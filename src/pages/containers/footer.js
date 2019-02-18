import React from 'react'
import Icon from '../../icons/icon';
import './footer.css'
import Twitter from '../../icons/twitter.svg'
import LinkedIn from '../../icons/linkedin.svg'
import GitHub from '../../icons/github.svg'

function Footer (props){
  return(
    <div className='Footer'>
      <p>2019 Copy right</p>
      <div className='socialMedia'>
      <div className='socialIcon'>
        <Icon src={GitHub} size={20}/>
      </div>
      <div className='socialIcon'>
        <Icon src={LinkedIn} size={20}/>
      </div>
      <div className='socialIcon'>
        <Icon src={Twitter} size={20}/>
      </div>
    </div>
    </div>
  )
}

export default Footer