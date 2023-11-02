import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Alert from "react-bootstrap/Alert";

const HomePage = function () {
   const [gallery1, setGallery1] = useState([]);
   const [gallery2, setGallery2] = useState([]);
   const [gallery3, setGallery3] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   const OMDB_URL = "http://www.omdbapi.com/?apikey=24ad60e9";

   useEffect(() => {
      fetchMovies();
   }, []);

   const fetchMovies = () => {
      Promise.all([
         fetch(OMDB_URL + "&s=harry%20potter")
            .then((response) => response.json())
            .then((responseObject) => {
               if (responseObject.Response === "True") {
                  setGallery1(responseObject.Search);
               } else {
                  setError(true);
               }
            }),
         fetch(OMDB_URL + "&s=avengers")
            .then((response) => response.json())
            .then((responseObject) => {
               if (responseObject.Response === "True") {
                  setGallery2(responseObject.Search);
               } else {
                  setError(true);
               }
            }),
         fetch(OMDB_URL + "&s=star%20wars")
            .then((response) => response.json())
            .then((responseObject) => {
               if (responseObject.Response === "True") {
                  setGallery3(responseObject.Search);
               } else {
                  setError(true);
               }
            }),
      ])
         .then(() => setLoading(false))
         .catch((err) => {
            setError(true);
            console.log("An error has occurred:", err);
         });
   };

   return (
      <>
         {error && (
            <Alert variant="danger" className="text-center">
               An error has occurred, please try again!
            </Alert>
         )}
         {!error && (
            <>
               <MovieList
                  title="Harry Potter"
                  loading={loading}
                  movies={gallery1.slice(0, 6)}
               />
               <MovieList
                  title="Lord of the Rings"
                  loading={loading}
                  movies={gallery2.slice(0, 6)}
               />
               <MovieList
                  title="Star Wars"
                  loading={loading}
                  movies={gallery3.slice(0, 6)}
               />
            </>
         )}
      </>
   );
};

export default HomePage;
