import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

 const Navbar = (props) => {
    return (
            <nav className="navbar navbar-expand-sm navbar-light bg-primary">
                <Link className="  navbar-brand m-2" to="/">{props.title}</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="contact/add">Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
            </nav>
    )
}

Navbar.defaultProps={
    title: "Contact List"
}

Navbar.propTypes={
    title: PropTypes.string.isRequired
}

export default Navbar;
