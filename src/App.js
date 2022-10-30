
import { useState } from 'react';
import Completed from './Completed';
import Dropped from './Dropped';
import Ongoing from './Ongoing';
import './todoapp.css';

function App() {

  const [list, setList] = useState([{ id: 1667163330369, text: "Reading", status: false }])
  const [todo, setTodo] = useState('')
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [completed, setCompleted] = useState([{ id: 1667163482350, text: "Travelling", status: false }])
  const [drop, setDrop] = useState([{ id: 1667163330369, text: "Cooking", status: false }])


  return (
    <div className="App">
      <div className='mainHeading'>
        <h1>TODO List</h1>
      </div>
      <div className='subHeading'>
        <h2>Hey, it's {weekday[new Date().getDay()]}! 🌝 ☕ </h2>
      </div>
      <div className="todoinput">
        <div className='left'>
          <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        </div>
        <div className='right erase'>
          <i className="fas fa-eraser" title='clear' onClick={() => setTodo("")}></i>
        </div>
        <div className='rightEnd add'>
          <i onClick={() => {
            setList([...list, { id: Date.now(), text: todo}]);
            setTodo("")
          }
          } className="fas fa-plus"></i>
        </div>

      </div>

      <div className='container done'>
        <h3>Completed</h3>
        {
          completed.map((complete, index) =>
            <Completed key={index} index={index} complete ={complete} completed={completed} setCompleted ={setCompleted}/>
          
          )
        }

      </div>
      <div className="container onGoing">
        <h3>On Going</h3>
        {
          list.map((obj, index) =>
           <Ongoing key={index} index={index} obj={obj} setCompleted={setCompleted} completed={completed} list={list} setList={setList} drop={drop} setDrop={setDrop}/>

          )
        }


      </div>

      <div className="container dropped">
        <h3>Dropped</h3>
        {
          drop.map((droped, index) =>
           <Dropped key={index} index={index} setList={setList} list={list} droped={droped} setDrop={setDrop} drop={drop}/>
          )
        }

      </div>

    </div>
  );
}

export default App;
