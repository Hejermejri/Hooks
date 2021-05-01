import MovieCardComponent from "./MovieCardComponent";
import { Link} from 'react-router-dom';
export function Movielist(props) {
  return (
    <div>
{props.movielist.map((item) =>
<Link to={`desc/${item.id}`}>
<MovieCardComponent movie={item} /> </Link>)}
     </div>
  );
}

  
  
