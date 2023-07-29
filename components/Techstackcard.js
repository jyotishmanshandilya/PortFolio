'use client'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Techstackcard = (props) => {
    const theme = useTheme();
    return (
      <Tilt options={defaultOptions} style={{ height: 100, width: 200 }}>
          <Card className='grid grid-cols-2'>
            <Box className='align-middle'>
              <Typography className='text-center pt-9' component="div">
                {props.tech}
              </Typography>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 200, height: 100 }}
              image={props.logo}
              alt={`${props.tech} logo`}
            />
          </Card>
        </Tilt>
    );
}

export default Techstackcard;