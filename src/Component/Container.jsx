import React from 'react'

export default function Container(props) {
  return (
    <div className={`mx-auto my-4 max-w-7xl ${props.extraclass}`}>
        {props.children}
    </div>
  )
}
