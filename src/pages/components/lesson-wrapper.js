import React from 'react'
import Lesson from './lesson'
import './lesson-wrapper.css'

const LessonWrapper = (props) =>(

    <div className={`${props.backgroundWrapper[0]} ${props.backgroundWrapper[1]}`}>
    {
      props.lesson.map((item)=>{
        return <Lesson  {...item} key={item.id}/>
        
      })


    }
    </div>

)
  


export default LessonWrapper