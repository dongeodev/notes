import React, {Component} from 'react'
import LessonContent from './lesson-content'
import './lesson.css'
import Icon from '../../icons/icon'
import arrowdown from '../../icons/arrow-down.svg'
import arrowup from '../../icons/arrow-up.svg'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Lesson extends Component{
  state = {
    visible: false,
    arrow: arrowdown,
  }
  
  handleClick = (event) =>{
    event.preventDefault()
    this.setState({
      visible: !this.state.visible,
      arrow: arrowup,
    })
  }
  render(){
    return(
      <section className='Lesson'>
     
      <div className='LessonTitle' onClick={this.handleClick} >
        <h2>{this.props.title}</h2>
        <CSSTransitionGroup
      transitionName='deslice'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      >
        <img src={this.state.visible?arrowup:arrowdown} width={30} height={20} key={this.state.visible}/>
        </CSSTransitionGroup>
      </div>
      <div className={this.state.visible?'visible':'no-visible'}>
        {
          this.props.content.map((item , i)=>{
           return <LessonContent text={item} key={item} i={i+1}/>
          })
        }
      </div>
      
      </section>
    )
  }
  

 

  
}

export default Lesson