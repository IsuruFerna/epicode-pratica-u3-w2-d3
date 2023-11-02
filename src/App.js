// import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/styles.css";
import { Container, Dropdown } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import HomePage from "./pages/HomePage";
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./pages/TvShowsPage";
import MovieDetails from "./pages/MovieDetails";

// import MovieList from "./components/MovieList";
// import TvShows from "./components/TvShows";

const App = () => {
   return (
      <BrowserRouter>
         <div>
            <MyNavbar />
            <Container fluid className="px-4">
               <div className="d-flex justify-content-between">
                  <div className="d-flex">
                     <h2 className="mb-4">TV Shows</h2>
                     <div className="ms-4 mt-1">
                        <Dropdown>
                           <Dropdown.Toggle
                              style={{ backgroundColor: "#221f1f" }}
                              id="dropdownMenuButton"
                              className="btn-secondary btn-sm dropdown-toggle rounded-0"
                           >
                              Genres
                           </Dropdown.Toggle>
                           <Dropdown.Menu bg="dark">
                              <Dropdown.Item href="#/action-1">
                                 Comedy
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                 Drama
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                 Thriller
                              </Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                  </div>
                  <div>
                     <i className="fa fa-th-large icons"></i>
                     <i className="fa fa-th icons"></i>
                  </div>
               </div>

               <Routes>
                  <Route element={<HomePage />} path="/"></Route>
                  <Route element={<TvShows />} path="tv-shows"></Route>
                  <Route
                     element={<MovieDetails />}
                     path="movie-details/:movieId"
                  ></Route>
               </Routes>

               <MyFooter />
            </Container>
         </div>
      </BrowserRouter>
   );
};

export default App;
