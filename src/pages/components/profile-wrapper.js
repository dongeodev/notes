import React from 'react'
import './profile-wrapper.css'

const ProfileWrapper=(props)=>(
  <section className='ProfileWrapper'>
    {props.children}
  </section>
)

export default ProfileWrapper