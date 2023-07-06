import Banner from './Banner.js';
import Auth from './Auth.js';
import Form from './Form.js';

function SigninBox(){
    return (<div id="sign-in-page">
        <div id="sign-in-box">
            <Banner />
            <div className="auth">
                <Auth href="/" img="../images/google-icon.png" name="Google"/>
                <Auth href="/" img="../images/apple.png" name="Apple"/>
            </div>
            <Form />
            <div className="end">Don’t have an account? <a href='#'>Register here</a></div>
        </div>
    </div>);
}
export default SigninBox;