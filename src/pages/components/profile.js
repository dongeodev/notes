import React from 'react'
import './profile.css'
import imagem from '../../backgrounds/yo.jpg'
import t1 from '../../backgrounds/t1.png'
import code from '../../backgrounds/code.svg'
import email from '../../backgrounds/mail.svg'
import telephone from '../../backgrounds/telephone.svg'
import worldwide from '../../backgrounds/worldwide.svg'

function Profile(props){
  return(
    <div className='Profile'>
     <img
     className='Profile-img'
     src={imagem}
     width={198}
    //  height={150}
     />
     
     <div className='texts'>
     <h4 className={props.backgroundWrapper}><img className='icon-name'  src={code} width={20} height={20} alt='icon'/>Ing. Georgie Duarte</h4>
     <h6><img src={email} width={15} height={15} alt='email' />   geo.du07@gmail.com</h6>
     <h6><img src={telephone} width={15} height={15} alt='phone' />  3144877407</h6>
     <h6><img src={worldwide} width={15} height={15} alt='web'/>  www.geoing.com</h6>
     </div>
     <div className='certificado-container'>
     <img
     className='certificado'
     src={t1}
     width={195}
     height={150}
     />
     <img
     className='certificado'
     src={t1}
     width={195}
     height={150}
     />
    </div>
    </div>
  )
}

export default Profile