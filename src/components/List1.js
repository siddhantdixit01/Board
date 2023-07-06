function List1(props){
        
    return (
        <>  
            <li onClick={()=>{alert("menu clicked");}} className={props.isActive}><img src={props.img} alt="" />
                {props.tab}
            </li>
        </>
    );
}

export default List1;