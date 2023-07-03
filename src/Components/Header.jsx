import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = () => {

    const links = [
       
        {
            id: 1,
            path: '/register',
            text: 'Register'
        },
        
        {
            id: 2,
            path: '/login',
            text: 'Login'
        },
    ]

    const [nav_mb, setNav] = useState(false);

    return (<>
        <nav className='flex justify-between  bg-purple-700 px-5 py-2   text-white '>
            <h1 className='text-4xl sm:text-5xl'>DRS</h1>
            {
                nav_mb ?
                    <RxCross1 size={35} className='sm:hidden' onClick={() => {
                        setNav(!nav_mb);
                    }} /> :
                    < RxHamburgerMenu size={25} className='sm:hidden' onClick={() => {
                        setNav(!nav_mb);
                    }} />

            }

            <ul className=' sm:flex hidden space-x-10 text-xl  items-center    '>
                {
                    links.map(({ id, text, path }) => {
                        return (<>
                            <li key={id}>
                                <Link to={path}>{text}</Link>
                            </li>
                        </>)
                    })
                }
            </ul>






        </nav>

        {nav_mb && (

            <div className='h-full w-full absolute     text-white  sm:hidden  z-10 p-2 '>
                <div className='flex flex-col items-center  bg-indigo-300 pb-10 rounded-xl ' >

                    <ul className='flex flex-col p-2'>
                        {
                            links.map(({ id, text, path }) => (
                                <li key={id} className='pt-5 text-2xl text-center'>
                                    <Link to={path}>{text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>)

        }




    </>
    )
}

export default Header