import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ Students, selectedStudent, setStudents, setIsEditing }) => {
  const id = selectedStudent.id;

  const [Name, setName] = useState(selectedStudent.Name);
  const [Question, setQuestion] = useState(selectedStudent.Question);
  const [Text, setText] = useState(selectedStudent.Text);


  const handleUpdate = e => {
    e.preventDefault();

    if (!Name || !Question || !Text ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const Student = {
      id,
      Name,
      Question,
      Text
    };

    for (let i = 0; i < Students.length; i++) {
      if (Students[i].id === id) {
        Students.splice(i, 1, Student);
        break;
      }
    }

    localStorage.setItem('Students_data', JSON.stringify(Students));
    setStudents(Students);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${Student.Name} 의 ${Student.Question} 질문이 수정 되었습니다.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit </h1>
        <label htmlFor="Name">Name</label>
        <input
          id="Name"
          type="text"
          name="Name"
          value={Name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="Question">Question</label>
        <input
          id="Question"
          type="text"
          name="Question"
          value={Question}
          onChange={e => setQuestion(e.target.value)}
        />
        <label htmlFor="Text">Text</label>
        <input
          id="Text"
          type="Text"
          name="Text"
          value={Text}
          onChange={e => setText(e.target.value)}
        />
        
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
