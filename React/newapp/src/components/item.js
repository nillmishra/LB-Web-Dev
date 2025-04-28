import './item.css';


function Item(props){
    const itemName = props.name;
    return(
        <div className="nirma">
            <h1>{itemName}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Item;