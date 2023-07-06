import List1 from './List1.js';
import List2 from './List2.js';

function MenuItems(props){

    return(<div className={`menu-items ${props.display}`} >
            <ol className="list1">
                <List1 isActive="active" img="/" tab="Dashboard"/>
                <List1 isActive="" img="/" tab="Transactions"/>
                <List1 isActive="" img="/" tab="Schedules"/>
                <List1 isActive="" img="/" tab="Users"/>                
                <List1 isActive="" img="/" tab="Settings"/>                
            </ol>
            <ol className="list2">
                <List2 isActive="" tab="Help"/>
                <List2 isActive="" tab="Contact Us"/>
            </ol>
            
        </div>);
}

export default MenuItems;
