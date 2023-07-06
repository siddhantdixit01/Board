import InputField from './InputField.js';
import {Link} from 'react-router-dom';


function Form(){
    return (
<form className="form" onSubmit={(event)=>{event.preventDefault();}}> 
    <InputField htmlFor="Email Address" type="text"/>
    <InputField htmlFor="Password" type="password"/>
    <a href="/">Forgot password?</a>
    <Link to='/dashboard'><input type="submit" value="Sign in" /></Link>
</form>
);
}
export default Form;