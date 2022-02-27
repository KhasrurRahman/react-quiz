import classes from '../style/Account.module.css'
import {Link} from "react-router-dom";
export default function Account() {
    return (
        <div className={classes.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}
