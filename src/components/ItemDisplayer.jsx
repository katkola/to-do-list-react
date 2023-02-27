import { useState } from 'react';

const ItemDisplayer = (props) =>{
    const [currentList, setCurrentList] = useState(props.allItems);

    const removeItem = (item) => {
        console.log(item);
        //setCurrentList(currentList.filter(a=>a.name !== item.name));
    }

    return(
        <div className="main">
            {currentList.map((item,idx) =>(
                <div key={idx} style={{fontStyle: item.style}}> 
                    {item.name}
                    <button>checkmark</button>
                    {/* <button onClick={()=> removeItem(item)}> Delete</button> */}
                </div>
            ))
            
            }
        </div>
    );
};
export default ItemDisplayer;