import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavigationBar = () => {
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
                        <div className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="button">Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
