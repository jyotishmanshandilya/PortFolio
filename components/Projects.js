'use client'
import React from 'react'
import projectdata from './projectdata'
import ProjectCard from './ProjectCard'

const Projects = () => {
    // projectdata.data.map((item)=>{
    //     console.log(item)
    // })
  return (
    <div className='mx-auto mx-5 px-9 py-5 bg-light-blue'>
        <h2 className='text-center mb-5'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5'>
            {projectdata.data.map((item) => (
                // console.log(item.title);
                <ProjectCard key={item.id} title={item.title} desc={item.description} link={item.link} img={item.img} code={item.code}/>
            ))}
        </div>
        <a className='' href='https://github.com/jyotishmanshandilya?tab=repositories'><button className='outline_btn mx-auto '>See All</button></a>
    </div>
  )
}

export default Projects
