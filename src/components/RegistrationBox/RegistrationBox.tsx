import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { IUser } from "../../models/User";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser, setUser } from "../LoginBox/UserSlice";

function RegistrationBox() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const [newUser, setNewUser] = useState<IUser>({
        id: 0,
        name: "",
        email: "",
        username: "",
        password: "",
        gold: 0
    });
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        newUser.name = event.target.value;
        setNewUser(newUser);
    }
    function updateEmail(event: React.ChangeEvent<HTMLInputElement>) {
        newUser.email = event.target.value;
        setNewUser(newUser);
    }
    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        newUser.username = event.target.value;
        setNewUser(newUser);
    }
    function updatePassword(event: React.ChangeEvent<HTMLInputElement>) {
        newUser.password = event.target.value;
        setNewUser(newUser);
    }
    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post<IUser>("http://spicyjellodndbattleappbe-eb-env.eba-k3zphm3n.us-east-1.elasticbeanstalk.com/api/users", newUser)
            .then(response => {
                dispatch(setUser(response.data));
            })
    }
    if (user.id > 0) return <Navigate replace to="/dashboard" />;
    else return <div className="row align-items-center justify-content-center box">
        <form onSubmit={onSubmit} className="col-md-3 content">
            <h1 className="text-center">DnD Battle App</h1>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" id="name" className="form-control"
                    required autoFocus
                    onChange={updateName}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" name="email" id="name"
                    pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                    className="form-control"
                    required
                    onChange={updateEmail}
                />
            </div>
            <div className="form-group">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name="username" id="username"
                    pattern="^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$"
                    className="form-control"
                    required
                    onChange={updateUsername}
                />
                <small id="username-help" className="form-text text-muted">
                    <ul>
                        <li>Max length 30</li>
                        <li>Alphanumeric characters, underscores, and periods allowed</li>
                        <li>Username cannot start nor end with a period and cannot have more than one consecutive period</li>
                    </ul>
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name="password" id="password"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    className="form-control"
                    required
                    onChange={updatePassword}
                />
                <small id="password-help" className="form-text text-muted">
                    <ul>
                        <li>Must be at least 8 characters</li>
                        <li>Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number</li>
                        <li>Special characters are allowed</li>
                    </ul>
                </small>
            </div>
            <input type="submit" className="btn btn-primary" value="Submit" />
            <Link to="/" className="btn btn-primary">Cancel</Link>
        </form>
    </div>;
}
export default RegistrationBox;