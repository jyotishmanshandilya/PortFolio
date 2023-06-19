'use client'
import * as React from 'react';

import expdata from './expdata';
import WorkAcc from './WorkAcc';

export default function WorkExp() {
  return (
    <div className='mx-5 px-9 py-5 bg-[#394867] mb-5'>
        <h2 className='text-center mb-5 text-white'>Work Experience</h2>
        <div>
            {expdata.data.map((item)=>(
                <WorkAcc key={item.id} company={item.company} id={item.id} role={item.position} info={item.info}/>
            ))}
            
        </div>
    </div>
  );
}

