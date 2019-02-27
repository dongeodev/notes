import React, {Component} from 'react'
import MenuCourses from './menu-courses'
import './header.css'
import iconMenu from '../../backgrounds/menu.svg'


class Header extends Component{
  state ={
    menu: false,
  }
handleClick = (event)=>{
  this.setState({
    menu: !this.state.menu
  })
}
render(){
 
  return(
    <section className='Header'>
     <h1>Courses</h1>
     <img className="icon-menu hamburger-menu" id="hamburger-menu" src={iconMenu} width={35} height={35} onClick={this.handleClick}/>
  
     <div className={`menuContainer ${this.state.menu?'menuVisible':null}`}>
      <ul className='menu'>
        {
          this.props.courses.map((item,i)=>{
            return <MenuCourses handleMenu={this.handleClick}handleCourse={this.props.handleCourse}{...item} key={item.id} i={i}/>
           
          })
        }
      </ul>
      </div>
    </section>
  
  )
}
}
export default Header