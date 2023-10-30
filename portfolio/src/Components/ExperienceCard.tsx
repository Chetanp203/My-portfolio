import Image from 'next/image';
import React from 'react';

interface propsType {
    companyName: string;
    desc: string;
    img: string;
    role: string;
    designation: string;
  }
const ExperienceCard = ({ companyName, desc,img,role,designation}:propsType)=> {
  return 
  (
    <div>
    <div className="border border-accent p-8 h-[450px] flex flex-col justify-between">
    <h2 className="text-3xl text-accent">{companyName}</h2>
    <p>{desc}</p>

    <div className="flex gap-4">
    <Image 
    className="grayscale rounded-full"
    src={img}
    height={50}
    width={50}
    alt="user"
    />


    <div>
        <h2>{role}</h2>
        <p className="text-gray-500">{designation}</p>
    </div>
    </div>
    </div>
    </div>
  )
}


export default ExperienceCard;