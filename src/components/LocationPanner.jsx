import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LocationPanner(props) {
  let {loc,path}=props
  console.log(props)
  return (
    <div className='breadcrumbs'>
      <div className=''>
        <h3>
          <NavLink className={'location-link'} to='/home'>Home</NavLink>-
          <NavLink className={'location-link'} to={path}>{loc}</NavLink>
        </h3>
      </div>
    </div>
  )
}
