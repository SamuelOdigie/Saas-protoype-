import { Link } from "wouter";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/" className="navbar-brand">
        Codebuddy
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/mentors" className="nav-link">
              Mentors
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/resources" className="nav-link">
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/connect" className="nav-link">
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
