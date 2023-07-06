import MenuItems from './MenuItems.js'

function Menu(props){
    var id="menu-sign-in";
    var display="hide";
    var l1=0,l2=-1;
    if(props.isLogin)
    {
        id="menu-dashboard";
        display="show";
    }
    return (
    <div id={id} className="menu">
        <div className="comp-name">
            <h1>Board.</h1>            
        </div>
        <MenuItems display={display} l1={l1} l2={l2}/>
        
    </div>
    );
}

export default Menu;