import React from 'react'

const Footer = () => {



    const footeritems1 = [
        { id: 1, link: 'FAQ', href: 'https//www.google.com' },
        { id: 1, link: 'Media Center', href: 'https//www.google.com' },
        { id: 1, link: 'Ways to Watch', href: 'https//www.google.com' },
        { id: 1, link: 'Cookies Preferences', href: 'https//www.google.com' },
        { id: 1, link: 'Speed Test', href: 'https//www.google.com' },
    ]

    const footeritems2 = [
        { id: 1, link: 'Help Center', href: 'https//www.google.com' },
        { id: 1, link: 'Investor Relations', href: 'https//www.google.com' },
        { id: 1, link: 'Terms of Use', href: 'https//www.google.com' },
        { id: 1, link: 'Corporate Information', href: 'https//www.google.com' },
        { id: 1, link: 'Legal Notices', href: 'https//www.google.com' },
    ]

    const footeritems3 = [
        { id: 1, link: 'Account', href: 'https//www.google.com' },
        { id: 1, link: 'Jobs', href: 'https//www.google.com' },
        { id: 1, link: 'Privacy', href: 'https//www.google.com' },
        { id: 1, link: 'Contact Us', href: 'https//www.google.com' },
        { id: 1, link: 'Only on Netflix', href: 'https//www.google.com' },
    ]


    return (
        <div className='bg-black  mt-1 h-full'>
            <div className='mx-10 p-10 '>
                <p className='text-white px-36 text-xl'>Questions? Call 000-800-919-1694</p>
            </div>

            <div className='  flex justify-evenly  text-white' >

                <div className=' flex flex-col' >
                    {
                        footeritems1.map(({ id, link, href }) => {
                            return <>
                                <ul >
                                    <a href={href}>
                                        <li className='py-2'>{link}</li>
                                    </a>
                                </ul>
                            </>

                        })
                    }

                </div>

                <div className='   flex flex-col' >
                    {
                        footeritems2.map(({ id, link, href }) => {
                            return <>
                                <ul >
                                    <a href={href}>
                                        <li className='py-2'>{link}</li>
                                    </a>
                                </ul>
                            </>

                        })
                    }

                </div>
                <div className='   flex flex-col' >
                    {
                        footeritems3.map(({ id, link, href }) => {
                            return <>
                                <ul >
                                    <a href={href}>
                                        <li className='py-2'>{link}</li>
                                    </a>
                                </ul>
                            </>

                        })
                    }

                </div>


            </div>
            <div className='flex pt-10 px-60 pb-12'>

            <h1 className='text-white text-2xl'>Metflix India</h1>
            </div>
        </div>
    )
}

export default Footer