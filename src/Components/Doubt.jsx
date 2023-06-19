import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";


const Doubt = ({ que, ans }) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className='bg-black h-full'>
                <div className=' mx-40'>
                    <div className=' cursor cursor-pointer' >
                        <div className='flex justify-between hover:bg-gray-700 bg-gray-600 w-3/3  mt-2 h-20  ' onClick={() => setShow(!show)} >
                            <div className='text-white  px-5 py-5 text-3xl ' >
                                {que}</div>
                            <div className='py-4 px-5 '>

                                {show ? <RxCross1 size={40} /> : <IoMdAdd size={50} />}
                            </div>
                        </div>

                        {show && (
                            <div className='flex justify-between bg-gray-600 w-3/3  mt-2 h-full '>
                                <div className='text-white px-7 py-5 text-3xl ' >
                                    {ans}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doubt
