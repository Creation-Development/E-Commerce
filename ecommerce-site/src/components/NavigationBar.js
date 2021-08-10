import React, { useState } from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Search from './Search'

export const NavigationBar = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">E-Commerce Site</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: 370 }}>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Products"
                                    menuVariant="dark"
                                    href="/product"
                                >
                                    <NavDropdown.Item href="/product/clothing">Clothing</NavDropdown.Item>
                                    <NavDropdown.Item href="/product/assesories">Assesories</NavDropdown.Item>
                                    <NavDropdown.Item href="/product/electronics">Electronics</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/product/sale">Sale 50% Off</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                        </ul>
                        <form method="POST">
                            <div className="d-flex">
                                <input className="form-control me-2 bg-transparant" id="search" type="search" onChange={(e) => { setValue(e.target.value) }} placeholder="Search" aria-label="Search" />
                                <Link className="btn btn-warning" to={`/search/${value}`} type="submit">Search</Link>
                            </div>
                            <div>
                                <buttton class="btn btn btn-danger mx-2 my-2" data-bs-toggle="modal" data-bs-target="#loginModal">
                                    Login </buttton>
                                <buttton class="btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#signupModal">
                                    Signup</buttton>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
