'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const About = () => {
    const {data: session} = useSession();
    //console.log(session.user.email)
  return (
    <div className='flex flex-col flex-center gap-5 px-9 bg-[#F1F6F9] m-5 py-5'>
        <h2 className='text-center'>About Me</h2>
        <p className='text-justify'>
            Hi <b>{session?.user?.name}</b>, I am Jyotishman Shandilya, your not so average dog loving, gymrat buddy.
            I am a <b>fullstack web developer</b> whose work mostly revolves around designing websites for 
            clients and building some personal projects. I am also working on building my digital 
            marketing agency called <b><a className='italic underline' href='https://dascii.com'>DASCII</a></b> where we provide businesses 
            with brand enahncing services such, marketing, devlopment and design. Feel free to reach 
            out to me regarding any work or if you just discuss some ideas. You can contact me by 
            clicking on the button below
        </p>
        <button className='outline_btn'>Contact me</button>
    </div>
  )
}

export default About
