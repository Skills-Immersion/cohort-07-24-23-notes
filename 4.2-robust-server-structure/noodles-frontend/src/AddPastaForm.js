import React, { useState } from 'react';

function AddPastaForm({ fetchNoodles }) {
  let initialFormState = {
    title: '',
    starchId: '',
    recommendations: ''
  }
  const [formData, setFormData] = useState(initialFormState);
  function handleInput(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:8080/noodles', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: formData })
    }).then(res => fetchNoodles())
  }
  return <form onSubmit={handleSubmit}>
    <td><input name="title" onChange={handleInput} value={formData.title} /></td>
    <td><input name="starchId" onChange={handleInput} value={formData.starchId} /></td>
    <td><input name="recommendations" onChange={handleInput} value={formData.recommendations}></input></td>
    <input type="submit" />
  </form>


}

export default AddPastaForm;