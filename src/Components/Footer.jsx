import React from 'react'
import { SocialIcon } from "react-social-icons";
// import {SocialIcon} from "react-icons"

const Footer = () => {
    
    return (
        <>
            <footer className=' p-1 sm:p-5  text-black font-semibold'>
                <h1 className='text-4xl my-5'>DRS</h1>
                <div className=' space-x-1'>
                    <SocialIcon network="instagram" className="" style={{ height: 40, width: 40 }} />
                    <SocialIcon network="facebook" className="" style={{ height: 40, width: 40 }} />
                    <SocialIcon network="github" className="" style={{ height: 40, width: 40 }} />
                    <SocialIcon network="google" className="" style={{ height: 40, width: 40 }} />
                </div>
                <h1 className='sm:text-center  p-5 my-5'>Copyright 2023-24</h1>
            </footer>



        </>
    )
}

export default Footer;
