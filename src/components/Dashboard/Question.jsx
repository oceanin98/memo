import React, { useState } from 'react';

// const Question = ({ Students, setStudents, setIsAdding }) => {
//   const [Name, setName] = useState('');
//   const [Question, setQuestion] = useState('');
//   const [Text, setText] = useState('');

  const Question = ({ Students, selectedStudent, setStudents, setIsQuestion}) => {
    const id = selectedStudent.id;

  const [Name, setName] = useState(selectedStudent.Name);
  const [Question, setQuestion] = useState(selectedStudent.Question);
  const [Text, setText] = useState(selectedStudent.Text);

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: null,
    });

    localStorage.setItem('Students_data', JSON.stringify(Students));
    setStudents(Students);
    setIsQuestion(true);

    return (
        
        <div className="small-container">
          <form >
            <h1>글 보기 </h1>
            <label htmlFor="Name">Name</label>
            <input
          id="Name"
          type="text"
          name="Name"
          value={Name}
        //   onChange={e => setName(e.target.value)}
        />
           
            <label htmlFor="Question">Question</label>
            <input
              id="Question"
              type="text"
              name="Question"
              value={Question}
             
            />
            <label htmlFor="Text">Text</label>
            <input
              id="Text"
              type="Text"
              name="Text"
              value={Text}
              
            />
            
            <div style={{ marginTop: '30px' }}>
              <input
                style={{ marginLeft: '12px' }}
                className="muted-button"
                type="button"
                value="Cancel"
                onclick={()=> setIsQuestion(false)}
              />
            </div>
          </form>
        </div>
      );
    };

    export default Question;

    