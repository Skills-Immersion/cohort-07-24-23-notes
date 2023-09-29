import React from 'react';

function Pasta({ pasta }) {
  return <tr>
    <td>{pasta.title}</td>
    <td>{pasta.starch}</td>
    <td>{pasta.recommendations}</td>
  </tr>
}

export default Pasta;
