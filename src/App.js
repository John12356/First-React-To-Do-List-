import './App.css';
import { useState } from 'react';

export default function App() {
  const [newItem,setNewItem] = useState("");
  const [todo,setTodo]=useState([])

  function handleSubmit(e){
    e.preventDefault();

    setTodo(currentTodo =>{
      return[
        ...currentTodo,
        {id: crypto.randomUUID(), title:newItem, completed:false},

      ]
    })
    setNewItem("");
  }

  function toggleTodo(id,completed){
    setTodo(currentTodo =>{
      return currentTodo.map(todo=>{
        if(todo.id===id){
          return {...todo,completed}
        }
        return todo;
      })
    })
  }

  function deleteTodo(id){
    setTodo(currentTodo => {
      return currentTodo.filter(todo=>todo.id !== id);
    })
  }

  return (
    <div className="main-form">
      <form onSubmit={handleSubmit} className='form-row'>
        <label htmlFor="" className='item-label'>new item</label>
        <input 
        value={newItem} 
        type="text" 
        onChange={e=> setNewItem(e.target.value)} 
        className='item-name' />
        <button className='add-button'>add</button>
      </form>
      <div className='item-list'>
        <h2 className='list-header'>to-do-list</h2>
        <ul className='lists'>
         {todo.length===0 && <h3 id='no-Todo'>No-ToDo's</h3>} 
          {todo.map(todo=>{
            return  (
              <li key={todo.id}>
                <label htmlFor="" className='list-item-name'>
                  <input type="checkbox" 
                  onChange={e=> toggleTodo(todo.id,e.target.checked)} 
                  checked={todo.completed} />
                  {todo.title}
                </label>
                <button onClick={()=>deleteTodo(todo.id)} className='del-button'>delete</button>
             </li>
            )
          })}
         
        </ul>
      </div>
    </div>
  );
}

