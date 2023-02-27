import { useState } from 'react';

const ItemCreator = (props) =>{
    const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewItem(newItem);
        console.log(newItem);
    };

    return(
        <form onSubmit={ handleSubmit }>
            <input type="text" name="name" id="name" onChange={(e)=> setNewItem(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
};
export default ItemCreator;