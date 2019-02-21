import React, {PureComponent} from 'react'
import './lesson-content.css'
import {format, format2} from '../../others/format'
class LessonContent extends PureComponent{
 
  
  render(){
    return(
      <div className='LessonContent'>
          
          <p className='number'>>_.</p> <p className='content'><b className='code'>{format(this.props.text)}</b>{format2(this.props.text)}</p>
       
      </div>
    )
  }
}

export default LessonContent