import React, { useEffect, useState } from 'react';
import Pasta from './Pasta';
import AddPastaForm from './AddPastaForm';

function PastaTable() {
  const [noodles, setNoodles] = useState([]);
  const fetchNoodles = () => {
    fetch('http://localhost:8080/noodles')
      .then(response => response.json())
      .then(responseData => setNoodles(responseData.data))
  }
  useEffect(fetchNoodles, [])
  return <>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Starch</th>
          <th>Recommendations</th>
        </tr>
      </thead>
      <tbody>
        {noodles.map(n => <Pasta key={n.id} pasta={n} />)}
      </tbody>
      <tfoot>
      </tfoot>
    </table>
    <AddPastaForm fetchNoodles={fetchNoodles} />
  </>

  // option 1: build a form on the frontend for creating noodles
  // option 2: embed starch names in the data that comes back in our list function
}

export default PastaTable;
