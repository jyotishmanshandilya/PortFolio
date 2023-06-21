'use client'
import React from 'react'
import { TextField, Box } from '@mui/material'
import { useSession } from 'next-auth/react'


const Contact = () => {
    const {data: session} = useSession();

    async function handleSubmit(e){
        e.preventDefault();
        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field => {
            // console.log(field);
            if(!field.name) return;
            formData[field.name] = field.value;
            // console.log(formData)
        });
        console.log(formData);
    }
  return (
    <div className='flex mx-auto'>
        <div className= 'p-5 m-5 sm:w-[35em]'>
            <h2 className='text-center mb-5'>Contact</h2>
            <form className='flex flex-col' method='POST' onSubmit={handleSubmit}>
                <div className='mx-auto'>
                    <TextField id="standard-basic" label="Username" variant="standard" className='m-5' defaultValue={session?.user?.name} name='username'/>
                    <TextField id="standard-basic" label="Email" variant="standard" className='m-5' defaultValue={session?.user?.email} name='email'/>
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
                    name='message'
                />
                {/* <div className='flex sm:flex-row gap-5 mx-auto '>
                    <p>
                        <label htmlFor='name'></label>
                        <input className='border border-black rounded' type='text' name='name'/>
                    </p>
                    <p>
                        <label htmlFor='email'></label>
                        <input className='border border-black rounded' type='email' name='email'/>
                    </p>
                </div>
                <p className='mt-5 mx-auto'>
                    <label htmlFor='message'></label>
                    <textarea className='border border-black rounded' name='message'/>
                </p> */}
                <button className='mx-auto outline_btn w-24'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
