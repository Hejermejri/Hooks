import React from "react";
import { Card} from 'react-bootstrap';
import Img from "../image/10.jpg";
import Rating from '@material-ui/lab/Rating';

import Box from '@material-ui/core/Box';


export default function MovieCardComponent (props) {
   
    return(
      <>
      <Card style={{ width: '30rem',height:'30rem' }}>
  <Card.Img variant="top" src={props.movie.image} height= {300} width = {200}/>
  <Card.Body>
    <Card.Title>{props.movie.title}</Card.Title>
    <Card.Text>{props.movie.desc}</Card.Text>
    <Box component="fieldset" mb={3} borderColor="transparent">
        
        <Rating name="read-only" value={3} readOnly />
      </Box>
  </Card.Body>
</Card>
      </>
     );
        }





  
    
  


        
        
        