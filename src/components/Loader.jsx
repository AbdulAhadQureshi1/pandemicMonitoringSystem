import React from 'react'
import '../App.css'

export default function Loader() {
  return (
    <div className='load-wrapper flex'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
