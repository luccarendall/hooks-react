import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
            <Link to={'/'}>to Home</Link>
            <br />
            <Link to={'/contact'}>to Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
