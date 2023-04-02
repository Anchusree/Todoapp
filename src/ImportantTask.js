import React from 'react'

export default function ImportantTask({index,imp,important,setImportant,completed,setCompleted}) {
  return (
    <div className='toDo' key={index}>
    <div className='left'></div>
    <div className="left tick">
      <i value="false" className="fas fa-check" title="Done" style={{color:'#073dbf'}}
        onClick={() => {
          setCompleted([...completed, { id: imp.id, text: imp.text }])
          setImportant(important.filter((obj2) => {
            return obj2.id !== imp.id
          }))
        }}

      ></i>
    
    </div>
    <div className='top'>
        <p>{imp.text}</p> 
    </div>
    <div className='bottom'>
        <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(imp.id)}</p>
    </div>
    <div className='right bin'></div>
</div>
  )
}
