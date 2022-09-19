import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";
import { useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginBox/UserSlice";
import "./DashboardBox.css";

function DashboardBox() {
    const user = useAppSelector(selectUser);
    if (user.id < 1) return <Navigate replace to="/" />;
    else return <div className="box">
        <NavBar />
        <div className="row align-items-center justify-content-center box">
            <Link to="/game" id="play_button" className="btn btn-primary col-md-2">Play</Link>
        </div>
    </div>;
}
export default DashboardBox;