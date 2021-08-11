import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <div className="bg-dark">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 py-4">
                <div className="col-md-4 d-flex align-items-center">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
                    </Link>
                    <span className="text-light">&copy; 2021 E-Commerce Site</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3 mx-2"><Link className="text-light" to="/"><i class="fa fa-facebook text-danger"></i></Link></li>
                    <li className="ms-3 mx-2"><Link className="text-light" to="/"><i class="fa fa-instagram text-danger"></i></Link></li>
                    <li className="ms-3 mx-2"><Link className="text-light" to="/"><i class="fa fa-twitter text-danger"></i></Link></li>
                </ul>
            </footer>
            </div>
        </>
    )
}

export default Footer
