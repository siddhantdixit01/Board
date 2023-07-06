function Auth(props){
    return (
                <a className="auth-button" href={props.href}>
                    <img src={props.img} alt=""/>
                    {`Sign in with ${props.name}`}
                </a>);
}
export default Auth;
