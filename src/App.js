import './App.css';
import {Movielist} from "./movie/Movielist";
import React,{ useState,useRef } from "react";
import Img from "./image/10.jpg";
import Img2 from "./image/11.jpg";
import { Card} from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


 

function App() {
  let [movielist] = useState([
    {title: 'Titanic', desc: '******************************',image:Img},
    {title: 'Me before you', desc: '******************************',image:Img2}
  ]);
  const [value, setValue] = React.useState(2);
 let [newmovie,SetNewMovie]=useState('');
 let namenewmovie = useRef();
 const addfilm = () => {
SetNewMovie(namenewmovie.current.value);
};

  return (
    <div className="App">
     <Movielist movielist={movielist} />
     
  <Card style={{ width: '30rem',height:'30rem' }}>
  <Card.Img variant="top" height= {300} width = {200}/>
  
  <Card.Body>
    <Card.Title>{newmovie}</Card.Title>
    
    <Box component="fieldset" mb={3} borderColor="transparent">
    <Typography component="legend">FEEL FREE TO RATE</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
  </Card.Body>
</Card>
<input ref={namenewmovie} onChange= {addfilm}  placeholder='ajouter un film'/>

</div>
  );
}

export default App;
