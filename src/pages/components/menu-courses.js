import React, {Component}from 'react'
import './menu-courses.css'

class MenuCourses extends Component{
  handleClick = (event)=>{
    this.props.handleCourse(this.props.id)
  }
  render(){

    return(
      
      
        <li onClick={this.handleClick}>{this.props.title}</li>
      
     
    )
  }
  
}
export default MenuCourses