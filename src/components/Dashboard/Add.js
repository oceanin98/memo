import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ Students, setStudents, setIsAdding }) => {
  const [Name, setName] = useState('');
  const [Question, setQuestion] = useState('');
  const [Text, setText] = useState('');


  const handleAdd = e => {
    e.preventDefault();

    if (!Name || !Question || !Text ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = Students.length + 1;
    const newStudent = {
      id,
      Name,
      Question,
      Text

    };

    Students.push(newStudent);
    localStorage.setItem('Students_data', JSON.stringify(Students));
    setStudents(Students);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${Name} 의 ${Question} 질문이 등록 되었습니다.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>질문하기 </h1>
        <label htmlFor="Name">이름</label>
        <input
          id="Name"
          type="text"
          name="Name"
          value={Name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="Question">질문</label>
        <input
          id="Question"
          type="text"
          name="Question"
          value={Question}
          onChange={e => setQuestion(e.target.value)}
        />
        <label htmlFor="Text">내용</label>
        <input
          id="Text"
          type="Text"
          name="Text"
          value={Text}
          onChange={e => setText(e.target.value)}
        />
        
        
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
