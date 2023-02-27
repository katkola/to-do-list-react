import './App.css';
import { useState } from 'react';
import ItemCreator from './components/ItemCreator';
import ItemDisplayer from './components/ItemDisplayer';

let counter = 0;

function App() {
  const[toDoList, setToDoList] = useState([]);

  //each item will ned the name containing the text entered
  //an id to make it easier to access
  //style to update when checked/unchecked
  const addItem =(newItem) =>{
    setToDoList([{id:counter++, name: newItem,style: ""}, ...toDoList
    ]);
  }

  //set list to a copy no longer including the deleted item
  const deleteItem =(doneItem) =>{
    setToDoList(toDoList.filter(item => item.id !== doneItem.id));
  }

  const strikeItem =(currentItem) =>{
    let newList = toDoList.map((item, idx)=> {
      if(item.id === currentItem.id){
        if (item.style === "line-through") {
          return {id:item.id, name:item.name, style: ""}
        } else {
          return {id:item.id, name:item.name, style: "line-through"}
        }
      }
      else{
        return item;
      }

    });

    setToDoList(newList);
  }


  //textbox to add things
  //list with to do item and two buttons: checkbox, delete button
  return (
    <div className="App">
      <h1>To do List</h1>
      <ItemCreator onNewItem={addItem}/>
      <ItemDisplayer allItems={toDoList} onRemoveItem={deleteItem} onCheckMark={strikeItem}/>
    
    </div>
  );
}

export default App;
