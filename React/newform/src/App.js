import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    comments: false,
    candidates: false,  
    offers: false,
    pushNotification: '',
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
    console.log('Form submitted');
    console.log('Form data:');
    console.log(formData);
  };
  const resetHandler = (event) => {
    event.preventDefault();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      comments: false,
      candidates: false,  
      offers: false,
      pushNotification: '',
    });
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
      <form>
        <label>First name</label><br></br>
        <input
          type="text"
          placeholder="First name"
          id='firstName'
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
          className='outline'
        />
        <br></br>
        <label>Last name</label><br></br>
        <input
        type="text"
        name="lastName" 
        placeholder='Last Name'
        onChange={changeHandler}
        id='lastName'
        value={formData.lastName}
        className='outline'
        />
        <br></br>
        <label>Email address</label><br></br>
        <input
        type="email"
        name="email"
        placeholder='Email'
        id='email'
        onChange={changeHandler}
        value={formData.email}
        className='outline'/>
        <br></br>
        <label>Country</label><br></br>
        <select
        name="country"
        placeholder='Country'
        onChange={changeHandler}
        id='country'
        value={formData.country}
        className='outline'>  
          <option value="India">India</option>
          <option value="Other">Other</option>
        </select>
        <br></br>
        <label>Street address</label>
        <br></br>
        <input
        type="text"
        name="streetAddress"
        placeholder='Street Address'
        id='streetAddress'
        onChange={changeHandler}
        value={formData.streetAddress}
        className='outline'/>
        <br></br>
        <label>City</label>
        <br></br>
        <input
        type="text"
        name="city"
        placeholder='City'
        id='city'
        onChange={changeHandler}
        value={formData.city}
        className='outline'/>
        <br></br>
        <label>State/Province </label>
        <br></br>
        <input 
        type="text" 
        name="state" 
        placeholder='State/Province'
        id='state'
        onChange={changeHandler}
        value={formData.state}
        className='outline'/>
        <br></br>
        <label>ZIP/Postal code</label>
        <br></br>
        <input 
        type="text" 
        name="zip" 
        placeholder='ZIP/Postal code'
        id='zip'
        onChange={changeHandler}
        value={formData.zip}
        className='outline'/>
        <br></br>
        <fieldset>
          <legend>By Email</legend>
          <div className='flex'>
          <input
            type="checkbox"
            name="comments"
            id="comments"
            onChange={changeHandler}
            checked={formData.comments}
          />
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>
          </div>
          <div className='flex'>
          <input
            type="checkbox"
            name="candidates"
            id="candidates"
            onChange={changeHandler}
            checked={formData.candidates}
          />
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
          </div>
          <div className='flex'>
          <input
            type="checkbox"
            name="offers"
            id="offers"
            onChange={changeHandler}
            checked={formData.offers}
          />
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer.</p>
          </div>
          </div>
        </fieldset>
        <br></br>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile number.</p>
          <input
          type='radio'
          name='pushNotification'
          id='pushEverything'
          value='Everything'
          onChange={changeHandler}
          />
          <label htmlFor='pushEverything'>Everything</label>
          <br></br>
          <input
          type='radio'
          name='pushNotification'
          id='pushEmail'
          value='Same as email'
          onChange={changeHandler}
          />
          <label htmlFor='pushEmail'>Same as email</label>
          <br></br>
          <input
          type='radio'
          name='pushNotification'
          id='pushNothing'
          value='No push notifications'
          onChange={changeHandler}
          />
          <label htmlFor='pushNothing'>No push notifications</label>
        </fieldset>
        <br></br>
        <button className='bg-blue-500 text-white p-2 rounded-md mr-5' onClick={submitHandler}>Submit</button>
        <button className='bg-blue-500 text-white p-2 rounded-md' onClick={resetHandler}>Reset</button>


      </form>
    </div>
  );
}

export default App;
