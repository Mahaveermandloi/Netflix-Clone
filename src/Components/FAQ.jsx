 import React, { useState } from 'react';
import Questions from "./Questions";
// import { IoMdAdd } from "react-icons/io";
// import { RxCross1 } from "react-icons/rx";
import Doubt from './Doubt';

const FAQ = () => {
  const [data] = useState(Questions);

  return (
    <>
      <div>
        <div className='bg-black h-full'>
          <h1 className='text-center text-white text-5xl font-bold py-10'> Frequently Asked Questions</h1>
          {data.map((currElem) => {
            const { id } = currElem;
            return <Doubt key={id} {...currElem} />;
          })}
          <div className=''>
            <div className='h-full py-10 px-40'>
              <p className='text-white text-2xl text-center py-3'>Ready to watch? Enter your email to create or restart your membership.</p>
              <div className='flex justify-center space-x-4'>
                <input type="text" className='h-18 w-96 px-3 py-2 rounded bg-black border-2' placeholder='Enter email' />
                <button className='bg-red-600 w-1/5 rounded text-2xl font-bold text-white'>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
