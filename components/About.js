'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

const About = () => {
    // const {data: session} = useSession();
    //console.log(session.user.email)
  return (
    <div className='sm:mx-10 flex flex-col md:flex-row justify-center gap-5 m-5 mt-24'>
      <Image className='mx-auto rounded-xl' src="/assets/profile-pic.jpeg" width={200} height={500}/>
      <div className='flex flex-col flex-center gap-5 bg-light-blue py-5 px-9 rounded-xl'>
          {/* <h2 className='text-center'>About Me</h2> */}
          <p className='text-justify'>
              Hi, I am Jyotishman Shandilya, your not so average dog loving, gymrat buddy.
              I am a <b>fullstack web developer</b> whose work mostly revolves around designing websites for 
              clients and building some personal projects. I am also working on building my digital 
              marketing and development agency called <b><a className='italic underline' href='https://dascii.com'>DASCII</a></b> where we provide businesses 
              with brand enhancing services such, marketing, development and design. Feel free to reach 
              out to me regarding any work or if you just discuss some ideas.
          </p>
          {/* <button className='outline_btn'>Contact me</button> */}
      </div>
    </div>
  )
}

export default About
