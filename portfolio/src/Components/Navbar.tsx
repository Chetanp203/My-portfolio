import React from 'react';
import {AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
  return (
    <div className="container pt-8">
        <div className="flex justify-between items-center">
            <div className="text-xl font-medium">
            Chetan
            </div>
            <ul className="gap-10 lg:gap-16 hidden md:flex">
            <li className="menulink">Home</li>
            <li className="menulink">Projects</li>
            <li className="menulink">Skills</li>
            <li className="menulink">Testimonials</li>
            <li className="menulink">Contact</li>
            </ul>
            <AiOutlineMenu className="md:hidden" size={30}/>

        </div>

    </div>
  )
}

export default Navbar