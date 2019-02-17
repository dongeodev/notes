import React, {Component} from 'react'
import LessonContent from './lesson-content'
import './lesson.css'


class Lesson extends Component{
  state = {
    visible: false,
  }
  
  handleClick = (event) =>{
    event.preventDefault()
    this.setState({
      visible: !this.state.visible,
    })
  }
  render(){
    return(
      <section className='Lesson'>
  
      <div className='LessonTitle' onClick={this.handleClick} >
        <h2>{this.props.title}</h2>
      </div>
    
      <div className={this.state.visible?'visible':'no-visible'}>
        {
          this.props.content.map((item)=>{
           return <LessonContent text={item} key={item}/>
          })
        }
      </div>
      
      </section>
    )
  }
  

 

  
}

export default Lesson