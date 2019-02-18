import React from 'react'
import './container.css'

const Container = (props)=>(
  <div className='Container'> 
    {props.children}
  </div>
)

export default Container