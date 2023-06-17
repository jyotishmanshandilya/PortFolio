'use client'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const Techstackcard = (props) => {
    const theme = useTheme();
    return (
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
    );
}

export default Techstackcard;