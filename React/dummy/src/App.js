import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [name, setName] = useState('Nill');

  
  function changeHandler(event) {
    setText(event.target.value);
    console.log(text); // updated log to reflect current input
  }
  
  // Variation1 - Every Render 
  useEffect(() => {
    console.log("UI Renderer changed")
  });

  // Variation2 - First Render
  // useEffect(() => {
  //   console.log("UI Renderer changed");
  // },[]);

  // Variation3 - On First Render + Whenever Dependencies CHanges
  // useEffect(() => {
  //   console.log("UI Renderer changed");
  // }, [text]);

  // Variation4 - To Handler Unmounting of Component  
  // useEffect(() => {
  //   console.log("Added");
  //   return () => {
  //     console.log("Removed");
  //   }
  // }, [text]);


  return (
    <div className="App">
      <input type="text" onChange={changeHandler} value={text} />
    </div>
  );
}

export default App;
