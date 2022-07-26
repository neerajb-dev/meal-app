import navbar_brand from "../assets/meal_app_logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const location = useLocation();
    // console.log(location.pathname);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light shadow position-sticky top-0">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={navbar_brand} alt="" width="60" height="60" className="rounded-circle" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/menu" className="nav-link" aria-current="page">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" aria-current="page">Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <div className="row g-0">
                <Sidebar type={`${location.pathname}`} />
                <Outlet />
            </div>
        </>
    )
};

export default Navbar;