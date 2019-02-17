import React from 'react'
import Lesson from './lesson'
import './lesson-wrapper.css'

const LessonWrapper = (props) =>(

    <div className='LessonWrapper'>
    {
      props.lesson.map((item)=>{
        return <Lesson  {...item} key={item.id}/>
        
      })
    }


    </div>

)
  


export default LessonWrapper