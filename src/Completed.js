import React from 'react'

function Completed({index,complete,completed,setCompleted}) {
    return (
        <div className='toDo' key={index}>
            <div className='left'></div>
            <div className='top'>
                <p className='textCross'>{complete.text}</p>
            </div>
            <div className='bottom'>
                <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(complete.id)}</p>
            </div>
            <div className='right bin'>
                <i value="false" className='fas fa-trash-alt' title='Remove' onClick={() => {
                    setCompleted(completed.filter((obj2) => {
                        return obj2.id !== complete.id
                    }))
                }}></i>
            </div>
        </div>
    )
}

export default Completed