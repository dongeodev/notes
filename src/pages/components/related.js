import React from 'react'
import './related.css'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


function Related (props){
  return(
    <div className='Related'> 
      <div className={props.backgroundWrapper[2]}>

      <h1>{props.course.title}</h1>
      </div>
      <CSSTransitionGroup
        transitionName='mount'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
    {
      props.course.lesson.map((item)=>{
       return <div className='RelatedAContainer' key={item.src}><a href={item.src} target='_blanck' >{item.title}</a></div>
      })
  
    }
    </CSSTransitionGroup>
    </div>
  )
}

export default Related