import React from 'react';
import poster from "../Images/netflix_poster.jpg";
import "../index.css";

const Section1 = () => {
    return (
        <>
            <div className="home opacity-100">

                <div className="background-image text-white ">
                    <div className='flex  justify-around my-5'>
                        <h1 className='text-5xl md:text-7xl  text-red-600 font-bold cursor-pointer'>METFLIX</h1>
                        <div className='flex space-x-5 md:space-x-10'>
                            <input type="text" placeholder='Search...' className='w-60 md:w-96 px-3 md:px-7  py-2 md:py-3 h-8 md:h-10 my-3 md:my-5 rounded  focus:border-collapse' />
                            <button className='bg-red-600 hover:bg-red-800 h-8 md:h-10 px-3 md:px-5 my-3 md:my-5 rounded'>Sign In</button>
                        </div>
                    </div>
                    <div>
                        <div className='text-center flex  justify-center  mt-44 '>

                            <h1 className='text-6xl font-bold '>
                                Unlimited movies, TV shows and more
                                <br />

                                <span className='text-3xl font-bold' >
                                    Watch anywhere. Cancel anytime.

                                    <br />
                                    <span className='text-2xl'>

                                        Ready to watch? Enter your email to create or restart your membership.</span>
                                </span>

                            </h1>
                        </div>
                        <div className='mt-14 mx-44 '>
                            <div className=' flex justify-around '>
                                <input type="text" placeholder='Enter your email' className='h-10   px-10 py-5  w-1/2 rounded' />
                                <button className='bg-red-600 rounded px-5  h-10 ' > Get Started</button>
                            </div>
                        </div>


                    </div>
                </div>

                <img src={poster} alt="image" />
            </div>

        </>
    )
}

export default Section1