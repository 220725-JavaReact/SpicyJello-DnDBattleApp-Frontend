import axios from "axios";
import { useState } from "react";
import { ILoginInfo } from "../../models/LoginInfo";
import { IUser } from "../../models/User";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser, setUser } from "./UserSlice";
import "./LoginBox.css";
import { Navigate } from "react-router-dom";

function LoginBox() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
        username: "",
        password: ""
    });
    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        loginInfo.username = event.target.value;
        setLoginInfo(loginInfo);
    }
    function updatePassword(event: React.ChangeEvent<HTMLInputElement>) {
        loginInfo.password = event.target.value;
        setLoginInfo(loginInfo);
    }
    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post<IUser>("http://spicyjellodndbattleappbe-eb-env.eba-k3zphm3n.us-east-1.elasticbeanstalk.com/api/users/login", loginInfo)
            .then(response => {
                dispatch(setUser(response.data));
            });
    }
    if (user.username !== "") return <Navigate replace to="/" />;
    else return <div id="login_box" className="d-flex align-items-center justify-content-center">
        <form onSubmit={onSubmit} className="col-lg-2">
            <div className="form-group">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name="username" id="username"
                    pattern="^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$"
                    className="form-control"
                    required autoFocus
                    onChange={updateUsername}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name="password" id="password"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    className="form-control"
                    required
                    onChange={updatePassword}
                />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
        </form>
    </div>;
}
export default LoginBox;