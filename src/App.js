
import { useState } from 'react';
import Completed from './Completed';
import Dropped from './Dropped';
import Ongoing from './Ongoing';
import './todoapp.css';
import ImportantTask from './ImportantTask';

function App() {

  const [list, setList] = useState([{ id: 1, text: "Reading", status: false }])
  const [todo, setTodo] = useState('')
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [completed, setCompleted] = useState([{ id: 2, text: "Travelling", status: false }])
  const [drop, setDrop] = useState([{ id: 1, text: "Cooking", status: false }])

  const [important, setImportant] = useState([{ id: 3, text: "Assignment", status: false }])

  return (
    <div className="App">
      <div className='mainHeading'>
        <h1>TODO List</h1>
      </div>
      <div className='subHeading'>
        <h2>Hey, it's {weekday[new Date().getDay()]}! Focus On Your Day</h2>
      </div>
      <div className="todoinput">
        <div className='left'>
          <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        </div>
        <div className='right erase'>
          <i className="fas fa-eraser" title='clear' onClick={() => setTodo("")}></i>
        </div>
        <div className='rightEnd add'>
          {
            todo
              ?
              <i onClick={() => {
                setList([...list, { id: Date.now(), text: todo }]);
                setTodo("")
              }
              } className="fas fa-plus"></i>
              :
              null
          }


        </div>

      </div>
     
      <div className='container done'>
        <h3>Completed ({completed.length})</h3>
        {
          completed.map((complete, index) =>
            <Completed key={index} index={index} complete={complete} completed={completed} 
            setCompleted={setCompleted} />
          )
        }

      </div>
      <div className='container important'>
        <h3>Important of the Day ({important.length})</h3>
        {
          important.map((imp, index) =>
            <ImportantTask key={index} index={index} imp={imp} important={important} setImportant={setImportant}
              completed={completed} setCompleted={setCompleted}
            />
          )
        }

      </div>
      <div className="container onGoing">
        <h3>On Going ({list.length})</h3>
        {
          list.map((obj, index) =>
            <Ongoing key={index} index={index} obj={obj} setCompleted={setCompleted}
              completed={completed} list={list} setList={setList} drop={drop} setDrop={setDrop}
              important={important} setImportant={setImportant} />

          )
        }

      </div>

      <div className="container dropped">
        <h3>Dropped ({drop.length})</h3>
        {
          drop.map((droped, index) =>
            <Dropped key={index} index={index} setList={setList} list={list} droped={droped} setDrop={setDrop} 
            drop={drop} />
          )
        }

      </div>
    </div>
  );
}

export default App;
