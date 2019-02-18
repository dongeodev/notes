import React from 'react'
import MenuCourses from './menu-courses'
import './header.css'


function Header (props){
  return(
    <section className='Header'>
     <h1>Courses</h1>
     <div className='menuContainer'>
      <ul className='menu'>
        {
          props.courses.map((item)=>{
            return <MenuCourses {...item} key={item.id}/>
            // return console.log(item)
          })
        }
      </ul>
      </div>
    </section>
  
  )
}

export default Header