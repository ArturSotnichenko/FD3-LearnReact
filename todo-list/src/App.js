import React, {useState}from 'react';

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState([]);


/* a function to adding todoes */
  const addTodo = (todo) => {
const newTodo = {
id:Math.random(),
todo: todo
}
/* add todo to the list */
setList([...list,newTodo]);

/* clear input box */
setInput("");
 
}

const deleteTodo = (id)=> {
  const newList = list.filter((todo) => todo.id !== id);
  setList(newList)
}


  return (
    <div>
      <h1>ToDo List</h1>
      <input type = "text"
       value={input} 
       onChange={(e) => setInput(e.target.value)}
       />
       <button onClick={() => addTodo(input)}>Add</button>
       <ul>
        {list.map((todo)=>(
          <li key={todo.id}>
            {todo.todo}
            <button onClick={()=> deleteTodo(todo.id)}>&times;</button>
          </li>
        )
        )}


       </ul>

    </div>
  );
}

export default App;