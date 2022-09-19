import { Link, Navigate } from "react-router-dom";
import { resetUser, selectUser } from "../../components/LoginBox/UserSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hook";
import "./NavBar.css";

function NavBar() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    function logout() {
        dispatch(resetUser());
    }
    if (user.username === "") return <Navigate replace to="/" />;
    else return <nav className="navbar">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link to="/dashboard" className="navbar-brand">DnD Battle App</Link>
            </div>
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/upgrades" className="nav-link disabled">({user.gold} gp) Upgrades</Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link disabled">Settings</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" onClick={logout} className="nav-link">Logout</Link>
                </li>
            </ul>
        </div>
    </nav>;
}
export default NavBar;