import React, { Component } from 'react'
import './app-navbar.css'

export default class AppNavbar extends Component {
  render () {
    const { src, activeTab, onTabClick } = this.props
    return (
      <React.Fragment>
      {src.map((tab, i) => <li 
        className='nav-bar__list-item'
        key={`link__${tab.id}`} 
        >
        <a 
          href={`#link__${tab.id}`}
          className={`nav-bar__tab ${tab.id === activeTab && 'active'}`}
          name={tab.id}
          onClick={onTabClick}
        >
          {tab.name}
        </a>
        </li>)}
      </React.Fragment>
    )
  }
}