import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = function () {
   const params = useParams();
   console.log("PARAMS", params);
   //  const navigate = useNavigate()

   console.log("movieID: ", params.movieId);

   const [movie, setMovie] = useState(null);

   useEffect(() => {
      const apikey = "ad8eaf52";
      fetch(`http://www.omdbapi.com/?i=${params.movieId}&apikey=${apikey}`)
         .then((response) => {
            if (!response.ok) {
               throw new Error("Fetch getting movie error!");
            }
            return response.json();
         })
         .then((movie) => {
            console.log("data fetched went fine", movie);
            setMovie(movie);
         })
         .catch((err) => console.log("Error!", err));
   }, [params.movieId]);

   return <h1>This is {movie?.Title}</h1>;
};

export default MovieDetails;
