'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';


const ProjectCard= (props)=>{
    console.log(props.img)
    const img = `/assets/${props.img}`;
    //console.log(props.title);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={`${props.title} image`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='flex flex-row'>
        <Link href={props.link}>
            <Button size="small" color="primary">
            Demo
            </Button>
        </Link>
        <Link href={props.code}>
            <Button size="small" color="primary">
            See Code
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
