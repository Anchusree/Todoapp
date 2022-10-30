import React from 'react'

function Dropped({index, setList, list, droped, setDrop, drop}) {
  return (
    <div className="toDo" key={index}>
              <div className="left recycle"><i value="false" className="fas fa-redo-alt" title="Retrieve"
                onClick={() => {
                  setList([...list, { id: droped.id, text: droped.text }])
                  setDrop(drop.filter((obj2) => {
                    return obj2.id !== droped.id
                  }))

                }}
              ></i></div>
              <div className="top"><p className="textCross">{droped.text}</p></div>
              <div className="bottom">
                <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(droped.id)}</p>
              </div>
              <div className="right bin">
                <i value="false" className="fas fa-trash-alt" title="Delete" onClick={() => {
                  setDrop(drop.filter((obj2) => {
                    return obj2.id !== droped.id
                  }))
                }}></i>
              </div>
            </div>
  )
}

export default Dropped