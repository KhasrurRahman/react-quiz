import Illustration from "../Illustration";
import Form from "../Form";
import classes from "../../style/Login.module.css";
import InputText from "../Inputtext";
import Button from "../Button";

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration/>
                <Form className={`${classes.login}`}>
                    <InputText type="text" placeholder="Enter email" icon="person"/>
                    <InputText type="password" placeholder="Enter password" icon="lock"/>
                    <Button>Submit now</Button>
                    <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
                </Form>
            </div>
        </>
    )
}
