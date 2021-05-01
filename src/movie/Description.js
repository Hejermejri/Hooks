
const Description = ({match,data}) => {
    var movie= data.find(p => p.id == match.params.id);

    var movieData;
    if(movie)
    movieData = <div>
      <h3> {movie.title} </h3>
      <h3> {movie.desc} </h3>
      <img src={movie.image} height= {300} width = {200}></img>
       </div>;

    return ( 
        <div className="description">
         
         {movieData}
         <h1>Home</h1>
        </div>
     );
}
 
export default Description;