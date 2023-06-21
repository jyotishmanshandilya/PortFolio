'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
//use client required for the GoogleButton
import React from 'react'
import About from '@/components/About'
import Techstack from '@/components/Techstack'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import WorkExp from '@/components/WorkExp'

const page = () => {
  const {data: session} = useSession();
  const state = session ? "sign out" : "sign in"
  // console.log(session?.user?.email)
  return (
    <div className='flex flex-col'>
      <h1 className='text-center pt-3 mb-5'>PortFolio</h1>
      {!session && <button className='black_btn mx-auto rounded mb-5' onClick={() => {signIn('github')}}>
        Sign in
      </button>}
      {session && <button className='black_btn mx-auto rounded mb-5' onClick={() => {signOut('github')}}>
        Sign Out
      </button>}
      {!session && <p className='text-center mb-5'>click on the above button to continue</p>}
      {session && <h3 className='text-center mb-5'>{session.user.name}, you have successfully signed in</h3>}

      {session && 
        <>
          {/* <img/> */}
          <About/>
          <Techstack/>
          <WorkExp/>
          <Projects/>
          {/* <Contact/> */}
          
        </>
      }
    </div>
  )
}

export default page
