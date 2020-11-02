import React from 'react'
//importamos el componente de los botones
import {Button} from '../Button'
//importamos los estilos
import './HeroSection.css'
//importando icono
import {FaPlayCircle} from 'react-icons/fa'
//importamos el video
import Video from '../../videos/video-1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Video} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <FaPlayCircle className='fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
