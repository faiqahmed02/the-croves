import React from 'react'

function Button(props) {
  return (
    <button className='crove-btn'>{props.text} <i class="fa fa-arrow-right"></i></button>
  )
}

export default Button