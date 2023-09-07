import React, { useState } from 'react';

function AddCheeseForm({ addACheese }) {

  let initialFormData = {
    name: '',
    imageUrl: '',
    deliciousness: 0
  }
  const [formData, setFormData] = useState(initialFormData);

  function handleInput(event) {
    // update our formData based on what the user has typed right now
    // make a new object
    let newFormData = { ...formData };
    // update the specific key/value pair in that object based on which input the user typed in
    newFormData[event.target.name] = event.target.value;
    console.log(newFormData);
    // save the new form data to the state variable
    setFormData(newFormData);

    // alternatively, this is the short form you'll see in the modules
    // setFormData({
    //   ...formData,
    //   [event.target.name]: event.target.value
    // })
  }

  function handleSubmit(event) {
    event.preventDefault();
    addACheese({
      ...formData,
      deliciousness: Number(formData.deliciousness)
    });
  }
  return <form onSubmit={handleSubmit}>
    <h2>Add a Cheese</h2>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" value={formData.name} onChange={handleInput} />
    <label htmlFor="imageUrl">Image URL</label>
    <input type="url" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleInput} />
    <label htmlFor="deliciousness">Deliciousness</label>
    <input type="number" name="deliciousness" id="deliciousness" value={formData.deliciousness} onChange={handleInput} />
    <button type="submit">Add</button>
  </form>
}

export default AddCheeseForm;
