const [todos, setTodos] = useState([]);
const [inputVal, setInputValue] = useState("");

const handleInput = (e) => {
  setInputValue(e.target.value);
};

const handleAdd = () => {
  if (!inputVal.trim() !== "") {
    setTodos([...todos, inputVal]);
    setInputValue("");
  }
};

const handleDelete = (index) => {
  const newTodo = [...todos];
  newTodo.splice(index, 1);
  setTodos(newTodo);
};

return (
  <div>
    <input
      type="text"
      value={inputVal}
      placeHolder=""
      onChange={(e) => handleInput(e)}
    ></input>
    <button onClick={() => handleAdd()}>Add</button>
    <ul>
      {todos.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => handleDelete(index)}>delete</button>
        </li>
      ))}
    </ul>
  </div>
);
