import React from 'react'
import {Link} from 'react-router-dom'

import './CardItem.css'

function CardItem({photo, text, label, path}) {
  return (
    <>
      <li className='cards__item'>
        <Link to={path} className='cards__item--link'>
          <figure
            className='figure cards__item--pic-wrap'
            data-category={label}
          >
            <img src={photo} alt='Travel place' className='cards__item__img' />
          </figure>
          <div className='cards__item--info'>
            <h5 className='cards__item--text'>{text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
