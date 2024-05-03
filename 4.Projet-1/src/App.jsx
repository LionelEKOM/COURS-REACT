import { useState } from 'react';
import { nanoid } from 'nanoid'
import './App.css'
import ListItem from './components/ListItem';

function App() {

  const [todoList, setTodoList] = useState([
      {id: nanoid(8), content: "item 1"},
      {id: nanoid(8), content: "item 2"},
      {id: nanoid(8), content: "item 3"}
  ])

  const [showValidation, setValidation] = useState(false)
  const[todo, setTodo] = useState("")

  function deleteTodo(id) {
  setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo === "") {
      setValidation(true);
      return;
    }
    setTodoList([...todoList, { id: nanoid, content: todo }]);
    setTodo("");
    setValidation(false);
  }

  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">To do List</h1>
        <form onSubmit={handleSubmit} action="" className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose a faire
          </label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            name=""
            id=""
            className="mt-1 block w-full rounded"
          />
          {showValidation && (
            <p className="text-red-600">Ajouter du texte a votre tache</p>
          )}
          <button className="mt-4 py-4 px-2 bg-slate-50 rounded min-w-[155px]">
            Ajouter
          </button>
        </form>
        <ul>
          {todoList.length === 0 && (
            <p className="text-slate-50">Aucune chose a faire...</p>
          )}
          {todoList.length > 0 &&
            todoList.map((item) => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App
