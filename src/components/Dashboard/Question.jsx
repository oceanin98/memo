import React, { useState } from 'react';


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
    const style = {
        maxHeight:'100px',
        minHeight:'38px',
          resize:'none',
          padding:'9px',
          boxSizing:'border-box',
          fontSize:'15px'};
    


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
        readOnly={true}
        />
           
            <label htmlFor="Question">Question</label>
            <input
              id="Question"
              type="text"
              name="Question"
              value={Question}
              readOnly={true}
            />
            <label htmlFor="Text">Text</label>
            
            <textarea 
            style={style}
              id="Text"
              type="Text"
              name="Text"
              value={Text}
              readOnly={true}
            />
            
            <div style={{ marginTop: '30px' }}>
              <input
                style={{ marginLeft: '12px' }}
                className="muted-button"
                type="button"
                value="Cancel"
                onClick={()=> setIsQuestion(false)}
              />
            </div>
          </form>
        </div>
      );
    };

    export default Question;

    