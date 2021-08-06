import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavigationBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container">
                    <Link class="navbar-brand" to="/">E-Commerce Site</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: 370 }}>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Products"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="/product/clothing">Clothing</NavDropdown.Item>
                                    <NavDropdown.Item href="/product/assesories">Assesories</NavDropdown.Item>
                                    <NavDropdown.Item href="/product/electronics">Electronics</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/product/sale">Sale 50% Off</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                        </ul>
                        <div class="d-flex">
                            <button class="btn btn-warning" type="button">Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
