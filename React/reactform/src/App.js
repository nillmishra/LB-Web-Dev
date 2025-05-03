import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // console.log(firstName);
  // console.log(lastName);


  // const changeFirstNameHandler = (event) => {
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);

  // };
  // const changeLastNameHandler = (event) => {
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);

  // };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isAgree: true,
    mode: "", 
    favCar: ""
  });

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form Give Data");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter First name"
          // onChange={changeFirstNameHandler}
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Last name"
          // onChange={changeLastNameHandler}
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br></br>
        <textarea
            name="comment"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your Comments"
            onChange={changeHandler}
            value={formData.value}
          ></textarea>
          <br />
          <br />
          <input
            type="checkbox"
            name="isAgree"
            id='isAgree'
            checked={formData.isAgree}
            onChange={changeHandler}
          />
          <label htmlFor="isAgree">I agree to the terms and conditions</label>
          <br>
          </br>
          <fieldset> 

<input
  type="radio"
  name="mode"
  id="Dark-mode"
  value="Dark-mode"
  onChange={changeHandler}
  checked={formData.mode === "Dark-mode"}
/>

<label htmlFor="Dark-mode">Dark Mode</label>

<input
  type="radio"
  name="mode"
  id="Light-mode"
  value="Light-mode"
  onChange={changeHandler}
  checked={formData.mode === "Light-mode"}
/>
<label htmlFor="Light-mode">Light Mode</label>
</fieldset>
<select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="scarpio">Scarpio</option>
          <option value="russian">Russian</option>
          <option value="thar">Thar</option>
          <option value="bmw">BMW</option>
          <option value="other" selected>Other</option>
        </select>

        <label htmlFor="favCar">Your Favrioute Car</label>

        <br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
