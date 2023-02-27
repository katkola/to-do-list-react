import './App.css';
import { useState } from 'react';
import ItemCreator from './components/ItemCreator';
import ItemDisplayer from './components/ItemDisplayer';

function App() {
  const[toDoList, setToDoList] = useState([]);
  const [counter, setCounter] = useState(0);

  //each item will ned the name containing the text entered
  //an id to make it easier to access
  //style to update when checked/unchecked
  const addItem =(newItem) =>{
    console.log(counter);
    setToDoList([{id:counter, name: newItem,style: ""}, ...toDoList
    ]);
    setCounter(counter+1);
    console.log(counter);
  }

  //set list to a copy no longer including the deleted item
  // const removeItem =(itemId) =>{

  // };

  //textbox to add things
  //list with to do item and two buttons: checkbox, delete button
  return (
    <div className="App">
      <h1>To do List</h1>
      <ItemCreator onNewItem={addItem}/>
      <ItemDisplayer allItems={toDoList}/>
    
    </div>
  );
}

export default App;
