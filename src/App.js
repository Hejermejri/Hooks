import './App.css';

import React,{ useState} from "react";
import {  Route, Switch } from 'react-router-dom';
import Img from "./image/10.jpg";
import Img2 from "./image/11.jpg";

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Description from './movie/Description';
import Home from './movie/Home';



 

function App({ match }) {
  let [movielist] = useState([
    {id:1,title: 'Titanic', desc: '******************************',image:Img},
    {id:2,title: 'Me before you', desc: '******************************',image:Img2}
  ]);
  return (
    <Switch>

<Route exact path="/"><Home/></Route>
<Route path="/desc/:id" render={ (props) => <Description data={movielist} {...props} />}/>
</Switch>
  );
}

export default App;
