import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Table = ({ Students, handleEdit, handleDelete ,handleQuestion}) => {
  Students.forEach((Student, i) => {
    Student.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  return (

    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Question</th>
            <th>Text</th>
            <th colSpan={2} className="text-center">
              편집
            </th>
          </tr>
        </thead>
        <tbody>
          {Students.length > 0 ? (
            Students.map((Student, i) => (
              <tr key={Student.id}>
                <td>{i + 1}</td>
                <td>{Student.Name}</td>

                <td onClick={() => handleQuestion(Student.id)}
                >{Student.Question}</td>

                <td>{Student.Text}</td>

                <td className="text-right">
                  <button
                    onClick={() => handleEdit(Student.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(Student.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
