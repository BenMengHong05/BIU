import React from 'react'

export default function header() {

    const menu = {
        links: ['Home', 'About', 'Contact' , 'Product']
       
    }
  return (
    <div>
        <h1 style={{color: 'red' , textAlign: 'center' }}>HELO HEADER</h1>
        {menu.links}
    </div>
  )
}
