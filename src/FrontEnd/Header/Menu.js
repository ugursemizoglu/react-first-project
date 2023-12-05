import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Nav>
         <NavItem>
          <NavLink active href='#'>
            Anasayfa
          </NavLink>
        </NavItem> 
        <NavItem>
          <NavLink active href='#'>
          Hakkımızda
          </NavLink>
        </NavItem> 
        <NavItem>
          <NavLink active href='#'>
          Projeler
          </NavLink>
        </NavItem> 
        <NavItem>
          <NavLink active href='#'>
          Blog
          </NavLink>
        </NavItem> 
        <NavItem>
          <NavLink active href='#'>
          İletişim
          </NavLink>
        </NavItem> 
        </Nav>
      </div>
    )
  }
}
