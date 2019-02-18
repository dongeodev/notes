import React from 'react'
import './icon.css'


function Icon(props){
    const {
      src,
      size
    }=props
  
  return(
    <img
      className='Icon'
      src={src}
      height={size}
      width={size}
    />
      
    
  )
}

export default Icon