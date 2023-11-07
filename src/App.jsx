import { useState } from 'react';
import './App.css';

function App() {
  const [card, setCard] = useState([{ id: 0, title: "운동", list: "데드리프트" }]);
  const [title, setTitle] = useState("");
  const [list, setList] = useState("");

  const AddTodo = () => {
    const TodoAdd = {
      id: card.length + 1,
      title: title,
      list: list,
    };

    setCard([...card, TodoAdd]);
    setTitle("");
    setList("");
  };

  const InputTitle = (e) => {
    setTitle(e.target.value);
  };

  const InputTodo = (e) => {
    setList(e.target.value);
  };

  return (
    <div>
      <div>todo_list</div>
      <input
        id="todo_title"
        value={title}
        onChange={(e) => {
          InputTitle(e);
        }}
      />
      <input
        id="todo_input"
        value={list}
        onChange={(e) => {
          InputTodo(e);
        }}
      />
      <button id="add_list" onClick={AddTodo}>
        추가
      </button>
      <div className='Todo_card'>
        {card.map((item) => (
          <div key={item.id} className='card_body'>
            <h3>{item.title}</h3>
            <div>{item.list}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
