import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
   return (
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
         <Navbar.Brand href="/">
            <img
               src="assets/logo.png"
               alt="logo"
               style={{ width: "100px", height: "55px" }}
            />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               <Link className="nav-link font-weight-bold" to="/">
                  Home
               </Link>
               <Link className="nav-link font-weight-bold" to="/tv-shows">
                  TV Shows
               </Link>
               <Link className="nav-link font-weight-bold" to="/movies">
                  Movies
               </Link>
               <Link className="nav-link font-weight-bold" to="/recent">
                  Recently Added
               </Link>
               <Link className="nav-link font-weight-bold" to="/mylist">
                  My List
               </Link>
               <Link
                  className="nav-link font-weight-bold"
                  to="/movie-details/tt11983728"
               >
                  movie details
               </Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default MyNavbar;
