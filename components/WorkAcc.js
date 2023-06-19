'use client'
import React from 'react'
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const WorkAcc = (props) => {
    const [expanded, setExpanded] = useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
        <Accordion className='my-2' expanded={expanded === `panel${props.id}`} onChange={handleChange(`panel${props.id}`)}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {props.company}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{props.role}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                {props.info}
            </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default WorkAcc
