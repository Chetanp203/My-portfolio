import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data =[
    {
        id:0,
        title:"Meesho",
        desc:"A react and node based functional ecommerce website where users can register and login,it has role based register and login as buyer and seller,where seller can add, edit and delete their products.Buyers cand add nad remove thier products from the cart.All users can edit their profile",
        img:"https://static.theprint.in/wp-content/uploads/2021/09/meesho.jpg",
        tags:["Reactjs","Node","MongoDB","Mongoose","JS"]
    },
    {
        id:1,
        title:"TATACLIQ",
        desc:"A react and node based functional ecommerce website where users can register and login,it has role based register and login as buyer and seller,where seller can add, edit and delete their products.Buyers cand add nad remove thier products from the cart.All users can edit their profile",
        img:"https://www.cssdesignawards.com/cdasites/2017/201704/20170411225030.jpg",
        tags:["Reactjs","Node","MongoDB","Mongoose","JS"]
    }
    ,
    {
        id:2,
        title:"Quiz App",
        desc:"A react and node based functional website where users can register and login,it has role based register and login as admin and student,where admin can add questions and review them.Students cand login and play the quiz",
        img:"https://i.ytimg.com/vi/WcWNuOV6BUU/maxresdefault.jpg",
        tags:["Reactjs","Node","MongoDB","Mongoose","JS"]
    }
    ,
    {
        id:3,
        title:"Weather App",
        desc:"A react and node based functional website where we can search the name of any city and it will provide us with the weather of that city.",
        img:"https://camo.githubusercontent.com/891ad964b3d59f0679526b7000d350e6458b7ee265c8dc25a5981335b199445f/68747470733a2f2f6d64626f6f7473747261702e636f6d2f696d672f4d61726b6574696e672f6769746875622f776561746865722f62617369632e706e67",
        tags:["Reactjs","JS"]
    }
    ,
    {
        id:4,
        title:"Blog App",
        desc:"A react and node based functional web application wher user can login and add their blogs and view the blogs added by others.",
        img:"https://user-images.githubusercontent.com/29139306/223408199-decaa65b-6213-462b-891f-2996d7f7590c.png",
        tags:["Reactjs","Node","MongoDB","Mongoose","JS"]
    }
]

const Projects = () => {
  return (
    <div className="container pt-32">
        <Heading title="My Projects"/>
        <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">

       {data.map((el)=>(
       <Card
         key={el.id}
         title={el.title}
         desc={el.desc}
         img={el.img}
         tags={el.tags}
       />
       ))}

        </div>
    </div>
  )
}

export default Projects