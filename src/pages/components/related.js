import React from 'react'
import './related.css'

function Related (props){
  return(
    <div className='Related'> 

      <h1>{props.course.title}</h1>
    {
      props.course.lesson.map((item)=>{
       return <div className='RelatedAContainer'><a href={item.src} target='_blanck' key={item.id}>{item.title}</a></div>
      })
  
    }
    </div>
  )
}

export default Related