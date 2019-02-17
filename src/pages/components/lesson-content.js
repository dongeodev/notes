import React, {PureComponent} from 'react'
import './lesson-content.css'

class LessonContent extends PureComponent{
  render(){
    return(
      <div className='LessonContent'>
          
        <p>{this.props.text}</p>
       
      </div>
    )
  }
}

export default LessonContent