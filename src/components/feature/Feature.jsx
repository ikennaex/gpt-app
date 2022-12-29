import React from 'react'
import "./feature.css"

const Feature = ({title, text}) => {
  return (
    <div className='gpt3-features-container-feature'>

      <div className='gpt3-features-container-feature-title'>
        <div />
        <h1>{title}</h1>
      </div>

      <div className='gpt3-features-container-feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature