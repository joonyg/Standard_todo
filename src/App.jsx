
import { useState } from 'react';
import './App.css';




function App() {

  const [card,setcard] = useState([{id:0,title:"운동",list:"데드리프트"}])
  const [title,settitle] = useState("")
  const [list,setlist] = useState("")

  const Add_Todo = () => {
    const Todo_Add ={
      id : card.length+1,
      title : title,
      list : list,
    
    }
  setcard(...card,Todo_Add)
  settitle("")
  setlist("")
  }

  const Input_Title = (e) =>{
    settitle(e.target.value)
  }
  const Input_Todo = (e) =>{
    setlist(e.target.value)
  }
  return (
    <div>
      <div>
        todo_list
      </div>
      
      <input id='todo_title'value={title} onChange={(e)=>{Input_Title(e)}}/>
      <input id ='todo_input'value={list} onChange={(e)=>{Input_Todo(e)}}/>
      <button id="add_list" onClick={Add_Todo}>추가</button>


      <div className='Todo_card'>
        {card.map((card)=>{
          <div key={card.id} className='card_body'>
          <h3>{card.title}</h3>
          <div>
            {card.list}
          </div>
      </div>
        })
        }
      </div>

    </div>
  );
}

export default App;
