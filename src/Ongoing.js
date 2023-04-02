import React from 'react'

function Ongoing({index, obj, setCompleted, completed, list, setList,drop,setDrop,important,setImportant}) {
  return (
    <div className="toDo" key={index}>
    <div className="left tick">
      <i value="false" className="fas fa-check" title="Done"
        onClick={() => {
          setCompleted([...completed, { id: obj.id, text: obj.text }])
          setList(list.filter((obj2) => {
            return obj2.id !== obj.id
          }))
        }}

      ></i>
  
      <i className="fa fa-star" style={{color:'#8e0b0b'}} aria-hidden="true" title="Important"
      onClick={()=>{
        setImportant([...important, { id: obj.id, text: obj.text }])
        setList(list.filter((obj2) => {
            return obj2.id !== obj.id
        }))
      }}
      ></i>
    </div>
    <div className="top">
      <p>{obj.text}</p>
    </div>
    <div className="bottom">
      <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', 
      minute: '2-digit', second: '2-digit' }).format(obj.id)}</p>
    </div>
    <div className="right close">
      <i value="false" className="fas fa-times" title="Drop" onClick={() => {
        setDrop([...drop, { id: obj.id, text: obj.text }])
        setList(list.filter((obj2) => {
          return obj2.id !== obj.id
        }))
      }}></i>
    </div>
  </div>
  )
}

export default Ongoing