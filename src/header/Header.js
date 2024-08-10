import {  NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar sticky-top navbar-dark navbar-expand-lg  bg-success">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={"https://m.media-amazon.com/images/I/31BYTzLOJ2L._AC_UF1000,1000_QL80_.jpg"} height={50}></img>
          <strong style={{ color: "white" }}>
            <i>MEDITECH HOSPITAL</i>
          </strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <strong>HOME</strong>
              </NavLink>
              
            </li>
            <li className="nav-item">
              <NavLink to="/patients" className="nav-link">
                <strong>PATIENTS</strong>
              </NavLink>
             
            </li>
            <li className="nav-item">
              <NavLink to="/doctors" className="nav-link">
                <strong>DOCTORS</strong>
              </NavLink>
             
            </li>
            <li className="nav-item">
              <NavLink to="/appoinments" className="nav-link">
                <strong>APPOINMENTS</strong>
              </NavLink>
             
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                <strong>ABOUT Us</strong>
              </NavLink>
              
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
