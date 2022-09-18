import { Navigate } from "react-router";
import NavBar from "../../shared/NavBar/NavBar";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginBox/UserSlice";

function DashboardBox() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    if (user.username === "") return <Navigate replace to="/" />;
    else return <div>
        <NavBar />
        <p>Welcome to your dashboard, {user.username}.</p>
    </div>;
}
export default DashboardBox;