'use client'
import React from 'react'
import Techstackcard from './Techstackcard'
import techdata from './techdata';

const techstackitems = ['C++', 'Java', 'Javascript', 'Python', 'C', 'Linux', 'Node.js', 'React', 'Next.js', 'MongoDB'];
const Techstack = () => {
    // techdata.data.map((item)=>{
    //     console.log(item.logo);
    // })

    
  return (
    <div>
        <h2 className='text-center'>TechStack</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-8 my-5'>
            {techdata.data.map((item) => (
                <Techstackcard key={item.id} tech={item.tech} logo={item.logo}/>
            ))}
        </div>
    </div>
  )
}

export default Techstack
