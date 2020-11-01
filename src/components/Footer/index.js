import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import {Button} from '../Button/index'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTypo3,
  FaYoutube,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer'>
      <section className='footer__subscription'>
        <p className='footer__subscription--heading'>
          Join the adventure newsletter to receive our best vacation deals.
        </p>
        <p className='footer__subscription--text'>
          You can unsuscribe at any time.
        </p>
        <div className='input-areas'>
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            className='footer-input'
          />
          <Button buttonStyle='btn--outline' buttonSize='btn--large'>
            Suscribe
          </Button>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className='social__media'>
        <div className='social__media--wrap'>
          <div className='footer-logo'>
            <Link to='#' className='social-logo'>
              Vazto <FaTypo3 />
            </Link>
          </div>
          <small className='website-rights'>
            Vazto ® {new Date().getFullYear()}
          </small>
          <div className='social__icons'>
            <Link
              to='/'
              target='_blank'
              aria-label='Facebook'
              className='social__icons--link'
            >
              <FaFacebook />
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='Youtube'
              className='social__icons--link'
            >
              <FaYoutube />
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='Instagram'
              className='social__icons--link'
            >
              <FaInstagram />
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='Linkedin'
              className='social__icons--link'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
