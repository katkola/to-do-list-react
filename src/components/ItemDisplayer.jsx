import React from 'react';

const ItemDisplayer = (props) =>{
    let currentList = props.allItems;

    const removeItem = (i) => {
        props.onRemoveItem(i);
        console.log(currentList);
    }

    const checkItem = (i) =>{
        props.onCheckMark(i);
    }

    return(
        <div className="main">
            {currentList.map((item,idx) =>(
                <div key={idx} style={{textDecorationLine: item.style}}> 
                    {item.name}
                    <input type="checkbox" onClick={()=>checkItem(item)}/>
                    <button onClick={()=>removeItem(item)}>delete</button>
                </div>
            ))
            
            }
        </div>
    );
};
export default ItemDisplayer;