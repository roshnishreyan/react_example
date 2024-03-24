import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav classNameName={`navbar navbar-expand-lg navbar-${props.mode} bg-dark`}>
  <div classNameName="container-fluid">
    <a classNameName="navbar-brand" href="/">{props.title}</a>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="/">{props.aboutText}</a>
        </li>
        <li classNameName="nav-item dropdown">
          <a classNameName="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a classNameName="dropdown-item" href="/">Action</a></li>
            <li><a classNameName="dropdown-item" href="/">Another action</a></li>
            <li><hr classNameName="dropdown-divider"/></li>
            <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName="btn btn-outline-primary" type="submit">Search</button>
      </form>
      <div className="form-check form-switch text-light">
      <input className="form-check-input" onClick={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
       <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
</div>
    </div>
   </div>
 </nav>
    
 
  )
}
Navbar.propTypes = {title: PropTypes.string,
                     aboutText: PropTypes.string}

Navbar.defaultProps = {
    title: 'set title',
    aboutText:'about text here'
};

