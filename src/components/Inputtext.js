import classes from '../style/InputText.module.css'

export default function InputText({icon,...rest}) {
    return (
        <div className={classes.textInput}>
            <input {...rest}/>
            <span className="material-icons-outlined"> {icon} </span>
        </div>
    )
}
