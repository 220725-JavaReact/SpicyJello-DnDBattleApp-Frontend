import { Link } from "react-router-dom";

function IndexBox() {
    return <div className="row align-items-center justify-content-center box">
        <div className="col-md-3 content">
            <h1 className="text-center">DnD Battle App</h1>
            <div className="col-md-12 btn-group-vertical btn-group-lg">
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
            </div>
        </div>
    </div>;
}
export default IndexBox;