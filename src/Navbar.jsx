import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../src/images/logo.svg'

const Navbar = () =>{
    return(
        <>
         <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand"to="/" exact>
                            <div className='header-img'>
                            <img src={logo} className="img-fluid animate d-inline-block align-top" alt="" loading="lazy"/>
                            <div className='logo-header'>Restaurant & Menu</div>
                            </div>
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" activeClassName='menu_active' to="/" exact>Restaurant List</NavLink>
                                </li>
                                <li className="nav-item ml-3">
                                <NavLink className="nav-link" activeClassName='menu_active' to="/createResto" exact><button className="btn btn-outline-primary">Create New Restaurant</button></NavLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;