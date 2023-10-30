import Image from 'next/image';
import React from 'react';


interface propsType{
    title:string,
    desc: string,
    img:string,
    tags:string[]
}
const Card= ({title,desc,img,tags}: propsType) => {
  return (
    <div className="border border-white w-[300px] sm:w-[350px] h-[550px]">
        <div>
            <Image className="w-[300px] sm:w-[350px] h-[200px]"
             src={img} 
             width={350} 
             height={350} 
             alt={title} 
             />
        </div>

        <div className="p-4 space-y-4">
            <div className="text-4xl font-extralight">{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el)=>(
                    <div className="tags" key={el}>
                        {el}
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Card