import React from 'react'
import tv from "../tv.png"
import offline from "../mobile-0819.jpg"
import everywhere from "../device-pile-in.png"
import kids from "../kids.png";
const Section2 = () => {

    const sections = [
        {
            id: 1,
            heading: 'Enjoy on your TV',
            desc: ' Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            src: tv
        },
        {
            id: 2,
            heading: 'Download your shows to watch offline',
            desc: ' Save your favourites easily and always have something to watch.',
            src: offline
        },
        {
            id: 3,
            heading: 'Watch everywhere',
            desc: ' Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            src: everywhere
        },
        {
            id: 4,
            heading: 'Create profiles for kids',
            desc: ' Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
            src: kids
        },
    ]

    return (

        <>

            <div>
                {sections.map(({ id, heading, desc , src }) => (
                    < div key={id} className='h-96 bg-black my-2 ' >
                        <div className='flex justify-around px-44'>
                            <div>
                                <h1 className='text-white mt-20   font-bold text-6xl'>{heading}</h1>
                                <p className='text-white mt-5 text-2xl w-1/2'>{desc}</p>
                            </div>
                            <div>
                                <img src={src} alt="" className='h-72 my-5' />
                            </div>
                        </div>
                    </div >

                )

                )}
            </div>

        </>
    )


}

export default Section2;
