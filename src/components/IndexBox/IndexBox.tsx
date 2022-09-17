import { Link } from "react-router-dom";
import "./IndexBox.css";

function IndexBox() {
    return <div id="index_box" className="d-flex align-items-center justify-content-center">
        <div className="col-lg-2 btn-group-vertical btn-group-lg">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
        </div>
    </div>;
}
export default IndexBox;