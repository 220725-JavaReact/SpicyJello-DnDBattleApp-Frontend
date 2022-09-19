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
    else return <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link to="/dashboard" className="navbar-brand">DnD Battle App</Link>
            </div>
            <div className="nav navbar-nav">
                <Link to="/upgrades" className="nav-item nav-link disabled">({user.gold} gp) Upgrades</Link>
                <Link to="/settings" className="nav-item nav-link disabled">Settings</Link>
                <Link to="/" onClick={logout} className="nav-item nav-link">Logout</Link>
            </div>
        </div>
    </nav>;
}
export default NavBar;