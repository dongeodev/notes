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
      <CSSTransitionGroup
        transitionName='mount'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <h2 key={this.props.title}>{this.props.title}</h2>
        </CSSTransitionGroup>
        <CSSTransitionGroup
      transitionName='deslice'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      >
        <img src={this.state.visible?arrowup:arrowdown} width={30} height={20} key={this.state.visible}/>
        </CSSTransitionGroup>
      </div>
      <CSSTransitionGroup
        transitionName='drop'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
      <div className={this.state.visible?'visible':'no-visible'} key={this.state.visible}>
        {
          this.props.content.map((item , i)=>{
           return <LessonContent text={item} key={item} i={i+1}/>
          })
        }
      </div>
        </CSSTransitionGroup>
      
      </section>
    )
  }
  

 

  
}

export default Lesson