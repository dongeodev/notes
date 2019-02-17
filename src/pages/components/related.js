import React from 'react'
import './related.css'

function Related (props){
  return(
    <div className='Related'> 

      <h1>{props.cursos[0].title}</h1>
    {
      props.cursos[0].lesson.map((item)=>{
       return <a href={item.src} target='_blanck' key={item.id}>{item.title}</a>
      })
  
    }
    </div>
  )
}

export default Related