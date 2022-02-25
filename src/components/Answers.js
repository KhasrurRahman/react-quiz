import CheckBox from "./CheckBox";
import classes from "../style/Answsers.module.css"


export default function Answers() {
    return (
        <div className={classes.answers}>
            <CheckBox className={classes.answer} text="A New Hope 1"/>
        </div>
    )
}
