import MovieCardComponent from "./MovieCardComponent";

export function Movielist(props) {
  return (
    <div>
{props.movielist.map((item) =><MovieCardComponent movie={item}/>)}
     </div>
  );
}

  
  
