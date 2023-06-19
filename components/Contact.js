'use client'
import React from 'react'
import { TextField, Box } from '@mui/material'
import { useSession } from 'next-auth/react'


const Contact = () => {
    const {data: session} = useSession();
  return (
    <div className='flex mx-auto'>
        <div className= 'bg-light-blue p-5 m-5 sm:w-[35em]'>
            <h2 className='text-center mb-5'>Contact</h2>
            <form className='flex flex-col'>
                <div className='mx-auto'>
                    <TextField id="standard-basic" label="Username" variant="standard" className='m-5' defaultValue={session?.user?.name}/>
                    <TextField id="standard-basic" label="Email" variant="standard" className='m-5' defaultValue={session?.user?.email}/>
                </div>
                <br/>
                <TextField
                    id="standard-multiline-static"
                    label="Message"
                    multiline
                    rows={2}
                    defaultValue=""
                    variant="standard"
                    className='mx-5 sm:mx-10 mb-10'
                />
                <button className='mx-auto outline_btn w-24'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
