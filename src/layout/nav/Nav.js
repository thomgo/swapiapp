import {Link} from "react-router-dom";

function Nav() {
    return(
        <ul className="nav bg-warning">
            <li className="nav-item">
                <Link to="/home" className="nav-link text-dark">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/research" className="nav-link text-dark">Research</Link>
            </li>
        </ul>
    );
}

export default Nav;