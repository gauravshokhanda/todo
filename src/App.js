import React, {useState} from "react";
import './App.css';
import Todolist from "./Todolist";

function App() {

  const [inputList, setInputList] = useState();
  const [Items,setItems] = useState([ ]);

  const itemEvent = (event)=>{
    setInputList(event.target.value)
  };
  const listofitems = () =>{
        setItems((oldItems) =>{
          return[...oldItems,inputList]; 
        });
        setInputList("");
  };
  const deleteItems =(id) =>{
    console.log("deleted");

    setItems((oldItems) =>{
      return oldItems.filter((array,index)=>{
        return index !== id;
      })
    })


} 
  

  return (
    <div className="main_div">
      <div className="conent_div"> 
            <h1>To-do List</h1>
            <input type="text" placeholder="Add a item" value= {inputList} onChange={itemEvent} />
            <button onClick={listofitems}> +</button>  
            
            
            <ol>
             
             { Items.map( (itemsname,index) => {
                return <Todolist 
                text={itemsname} 
                id={index}
                key={index}
                onSelect={deleteItems}
                />
              })}
            </ol>

      </div>
    </div>
  );
}

export default App;
