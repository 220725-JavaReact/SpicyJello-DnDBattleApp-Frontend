
import { Link } from 'react-router-dom';
import './DashboardBox.css';

function DashboardBox() {
  return (

    <><div className="flex">
      <Link to="/upgrades">Upgrades</Link>

      <div className="settings">
        <Link to="/setting">Settings</Link>
        <Link to="/logout">Log Out</Link>
      </div>

    </div>

      <div className="container-box">
        <div className="big-button">
          <Link to="/gameBox"><button>START GAME</button></Link>
        </div>
      </div>

    </>

  )


}

export default DashboardBox;