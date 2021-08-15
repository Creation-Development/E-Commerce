
import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from './Data';
import user from './Userdata';

const LoginNavbar = () => {
    var userid = sessionStorage.getItem("id")
    var total = 0
    var userdata = user.filter((person) => person.id == userid)
    const [value, setValue] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var datacart = 0
    if (localStorage.cart) {
        var datacart = JSON.parse(localStorage.getItem('cart'));
        var cartitem = [...new Set(datacart)]
        var quantityList = JSON.parse(localStorage.getItem('quantityList'));
        var cartquantity = cartitem.map((item) => (
            quantityList[datacart.indexOf(item)]
        ))
        console.log(cartitem, cartquantity);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container-fluid">
                    <Link className="btn btn-dark" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </Link>
                    <Link className="navbar-brand" style={{ marginLeft: 630 }} to="/">E-Commerce Site</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form method="POST">
                            <div className="d-flex" style={{ marginLeft: 180 }}>
                                <input className="form-control me-2 bg-transparant" id="search" type="search" onChange={(e) => { setValue(e.target.value) }} placeholder="Search" aria-label="Search" />
                                <Link className="btn btn-warning" to={`/search/${value}`} type="submit">Search</Link>
                                <Link className="nav-item text-decoration-none dropdown-toggle text-white" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className="mx-2" src={userdata[0].image} height={40} width={40} style={{ borderRadius: 50 }} />{userdata[0].name.firstname + " " + userdata[0].name.lastname}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ marginLeft: 1345 }}>
                                    <li><Link className="dropdown-item" to="/">{userdata[0].name.firstname + " " + userdata[0].name.lastname}</Link></li>
                                    <li><Link className="dropdown-item" to="/">{userdata[0].email}</Link></li>
                                    {
                                        localStorage.cart ?
                                            <li><Link className="dropdown-item" to="/" data-bs-toggle="modal" data-bs-target="#exampleModal">Your Cart&nbsp;&nbsp;&nbsp;<span className="badge  rounded-pill bg-danger">{datacart.length / 2}</span></Link></li> :
                                            <li><Link className="dropdown-item" to="/" >Your Cart&nbsp;&nbsp;&nbsp;<span className="badge  rounded-pill bg-danger">{0}</span></Link></li>
                                    }
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/" onClick={() => { sessionStorage.clear(); localStorage.clear(); window.location = "/" }}>Logout</Link></li>
                                </ul>
                            </div>
                            <div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">Welcome {userdata[0].username}</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body  d-grid">
                    <ul className="nav flex-column mb-auto">
                        {userdata[0].role === "user" ?
                            <>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-white">
                                        Home
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
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-white">
                                        Home
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
                                    <Link to="/dashboard" className="nav-link text-white">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/total-user" className="nav-link text-white">
                                        Customers
                                    </Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            {
                localStorage.cart ?
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header text-center">
                                    <h5 className="modal-title" id="exampleModalLabel">Your Cart</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-center">
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Product Id</th>
                                                <th>Product Name</th>
                                                <th>Quantity</th>
                                                <th>Total Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartitem.map((item, index) => {
                                                    var cartproduct = data.filter((i) => i.id == item)[0]
                                                    total += cartproduct.price * cartquantity[index];
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>{index + 1}</td>
                                                                <td>{item}</td>
                                                                <td>{cartproduct.title.slice(0,20)+"..."}</td>
                                                                <td>{cartquantity[index]}</td>
                                                                <td>{cartproduct.price * cartquantity[index]}</td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                            <tr>
                                                <th colspan="5"><h4>Total Cart Price : {total}</h4></th>
                                            </tr>

                                        </tbody>
                                    </Table>
                                    <button type="button" onClick={() => {localStorage.clear(); window.location.reload()}} className="btn btn-danger mx-2" data-bs-dismiss="modal">Clear Cart</button>
                                    <Link to="/checkout/" type="button" className="btn btn-success mx-2">Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }

        </>
    )
}

export default LoginNavbar;

