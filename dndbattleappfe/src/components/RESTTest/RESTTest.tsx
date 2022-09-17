import axios from "axios";
import { IUser } from "../../models/User";

function RESTTest() {
    axios.get<IUser>('http://testapplication-env.eba-5yhtdt7c.us-east-1.elasticbeanstalk.com/api/users/1')
        .then(response => {
            console.log(response);
        })

    return <div></div>
}

export default RESTTest;