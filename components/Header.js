import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from '../routes'
export default() => {
    
    return (
      <Menu style ={{ marginTop: '10px' }}>
        <Link route='/'>
        <a className='item'>
            Midn1ght Campa1gn
        </a>
        </Link>
 <Menu.Menu position='right'>
 <Link route='/'>
        <a className='item'>
            Campa1gns
        </a>
        </Link>
        <Link route='/campaigns/new'>
        <a className='item'>
            +
        </a>
        </Link>
        
        </Menu.Menu>
      </Menu>
    )
  }

