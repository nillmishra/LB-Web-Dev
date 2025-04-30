import './App.css';
import React from 'react';
import Testimonials from './components/Testimonials.js';
import reviews from './data.js';

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimonial</h1>
        <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto rounded-full'></div>
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
