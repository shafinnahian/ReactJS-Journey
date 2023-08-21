import { Fragment, useState } from "react";
// import { MouseEvent } from "react";

interface listGroupProps {
    item: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({item, heading, onSelectItem}: listGroupProps){ 
    // let item = [
    //     'New York',
    //     'San Francisco',
    //     'Tokyo',
    //     'London',
    //     'Paris'
    // ];   //taken to App.tsx to be dynamically used in props -> listGroupProps

    const [selectedIndex, setSelectedIndex] = useState(-1);

    // const handleClick = (event: MouseEvent) => console.log(event) // this is called annotation

    //if we use <></> it means using <Fragments></Fragments>
    return ( <>
    <h1>{heading}</h1>
    {item.length == 0 ? <p>No item found</p> : null}
    {/* {item.length == 0 && <p>No item found</p>} */}
    <ul className="list-group">
        {item.map( (item, index) => <li 
            className={ selectedIndex === index ? 'list-group-item active': 'list-group-item'}
            key = {item} 
            onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
            }}
            >
                {item}</li>)}
    </ul>
</>);
}

export default ListGroup;