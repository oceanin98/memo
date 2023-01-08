import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';


import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';
import Question from './Question';
//
// import Sidebar from './sidebar';
// import SidebarItem from './SidebarItem';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "./styles.css";


import { studentsData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [Students, setStudents] = useState(studentsData);
  const [selectedStudent, setselectedStudent] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isQuestion, setIsQuestion] = useState(false);


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Students_data'));
    if (data !== null && Object.keys(data).length !== 0) setStudents(data);
  }, []);

  const handleQuestion = id => {
    const [Student] = Students.filter(Student => Student.id === id);

    setselectedStudent(Student);
    setIsQuestion(true);
  };

  const handleEdit = id => {
    const [Student] = Students.filter(Student => Student.id === id);

    setselectedStudent(Student);
    setIsEditing(true);
  };


  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [Student] = Students.filter(Student => Student.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${Student.Name} 의 ${Student.Question} 질문이 삭제 되었습니다.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const StudentsCopy = Students.filter(Student => Student.id !== id);
        localStorage.setItem('Students_data', JSON.stringify(StudentsCopy));
        setStudents(StudentsCopy);
      }
    });
  };

  return (
    <div className="container">

      
      {!isAdding && !isEditing && (
        <>
        
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            Students={Students}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleQuestion={handleQuestion}
          />
        </>
      )}
      {isAdding && (
        <Add
        Students={Students}
          setStudents={setStudents}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
        Students={Students}
        selectedStudent={selectedStudent}
          setStudents={setStudents}
          setIsEditing={setIsEditing}
        />
      )}
      {isQuestion && (
        <Question
        Students={Students}
        selectedStudent={selectedStudent}
          setStudents={setStudents}
          setIsQuestion={setIsQuestion}
        />
      )}
     
    </div>
  );
};

export default Dashboard;
