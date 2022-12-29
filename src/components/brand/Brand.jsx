import React from 'react'
import "./brand.css"
import {google, slack, atlassian, dropbox, shopify} from "../brand/imports"

const Brand = () => {
  return (
    <div className='gpt3-brand section-padding'>

      <div><img src={google} alt= "google"></img></div>
      <div><img src={slack} alt= "slack"></img></div>
      <div><img src={atlassian} alt= "atlassian"></img></div>
      <div><img src={dropbox} alt= "dropbox"></img></div>
      <div><img src={shopify} alt= "shopify"></img></div>
    </div>
  )
}

export default Brand