function List2(props){
return (<li onClick={()=>{alert("menu clicked");}} className={props.isActive}>{props.tab}</li>);
}

export default List2;