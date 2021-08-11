import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="d-flex fixed-top flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: 200, height: '100%' }}>
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5">E-Commerce Site</span>
                </Link>
                <hr />
                <ul className="nav flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="nav-link text-white">
                            Dashboard
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link className="nav-link btn-toggle align-items-center text-white collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Products
                        </Link>
                        <div className="collapse show text-white" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li className="nav-link py-2 px-4"><Link to="/product/clothing" className="link-light text-decoration-none mx-4 rounded">Clothing</Link></li>
                                <li className="nav-link py-2 px-4"><Link to="/product/assesories" className="link-light text-decoration-none mx-4 rounded">Assesories</Link></li>
                                <li className="nav-link py-2 px-4"><Link to="/product/electronics" className="link-light text-decoration-none mx-4 rounded">Electronics</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/" className="nav-link text-white">
                            Customers
                        </Link>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Sidebar
