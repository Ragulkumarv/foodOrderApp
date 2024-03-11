import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddToDo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  const deleteToDo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className="mt-3">
      <h1 className="text-2xl font-bold mb-2">To Do List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
          placeholder="Add To Do's"
          className="border border-gray-300 rounded-md py-2 px-4 mr-2"
        />
        <button
          onClick={() => handleAddToDo()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Add+
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            {todo}
            <button
              onClick={() => deleteToDo(index)}
              className="text-red-500 font-semibold hover:text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
