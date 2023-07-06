function InputField(props){
return(
        <div className="input-field">
                <label htmlFor={props.htmlFor}>{props.htmlFor}</label>
                <input type={props.type} />
        </div>
);
}
export default InputField;