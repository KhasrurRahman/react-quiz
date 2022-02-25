import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../../style/Signup.module.css";
import InputText from "../Inputtext";
import CheckBox from "../CheckBox";
import Button from "../Button";


export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration/>
                <Form className={`${classes.signup}`}>
                    <InputText type="text" placeholder="Enter name" icon="person"/>
                    <InputText type="email" placeholder="Enter email" icon="alternate_email"/>
                    <InputText type="password" placeholder="Enter password" icon="lock"/>
                    <InputText type="password" placeholder="Confirm password" icon="lock_clock"/>
                    <CheckBox text="I agree to the Terms & Conditions"/>
                    <Button><span>Submit Now</span></Button>
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}
