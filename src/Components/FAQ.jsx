import React, { useState } from 'react'
import Questions from "./Questions";
// import { IoMdAdd } from "react-icons/io";
// import { RxCross1 } from "react-icons/rx";
import Doubt from './Doubt';

const FAQ = () => {


//     const [data, setData] = useState(Questions);

    return (
        <>
            <div>
                <div className='bg-black h-full'>

                    <h1 className='text-center text-white text-5xl font-bold py-10' > Frequently Asked Questions</h1>
                    {
                        data.map((currElem) => {
                            const { id } = currElem;
                            return <Doubt key={id}   {...currElem} />
                        })
                    }
                    <div className=''>

                        <div className='h-full py-10 px-40'>
                            <p className='text-white text-2xl text-center py-3 ' >Ready to watch? Enter your email to create or restart your membership.</p>
                            <div className='flex justify-center space-x-4'>

                                <input type="text"  className='h-18 w-96  px-3 py-2 rounded bg-black border-2' placeholder='Enter email' />
                                <button className='bg-red-600  w-1/5 rounded text-2xl font-bold text-white '>Get Started  </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )



}

export default FAQ



// import React, { useState } from 'react';
// import Questions from "./Questions";
// import { IoMdAdd } from "react-icons/io";
// import { RxCross1 } from "react-icons/rx";

// const FAQ = () => {
//   const [showAnswers, setShowAnswers] = useState({});

//   const toggleAnswer = (id) => {
//     setShowAnswers((prevState) => ({
//       ...prevState,
//       [id]: !prevState[id]
//     }));
//   };

//   return (
//     <>
//       <div className='bg-black h-full'>
//         <h1 className='text-center text-white text-5xl font-bold py-10'> Frequently Asked Questions</h1>
//         <div className='mx-40'>
//           {Questions.map(({ id, que, ans }) => (
//             <div className='cursor cursor-pointer' key={id}>
//               <div className='flex justify-between hover:bg-gray-700 bg-gray-600 w-full mt-2 h-20' onClick={() => toggleAnswer(id)}>
//                 <div className='text-white px-5 py-5 text-3xl'>{que}</div>
//                 <div className='py-4 px-5'>
//                   {showAnswers[id] ? <RxCross1 size={40} /> : <IoMdAdd size={50} />}
//                 </div>
//               </div>
//               {showAnswers[id] && (
//                 <div className='flex justify-between bg-gray-600 w-full mt-2 h-full'>
//                   <div className='text-white px-7 py-5 text-3xl'>{ans}</div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FAQ;




