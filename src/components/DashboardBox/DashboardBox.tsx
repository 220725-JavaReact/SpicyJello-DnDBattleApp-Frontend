import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginBox/UserSlice";
import "./DashboardBox.css";

function DashboardBox() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    if (user.id < 1) return <Navigate replace to="/" />;
    else return <div id="dashboard_box">
        <NavBar />
        <div id="dashboard" className="d-flex align-items-center justify-content-center">
            <Link to="/game" id="play_button" className="btn btn-primary btn-lg">Play</Link>
        </div>
    </div>;
}
export default DashboardBox;