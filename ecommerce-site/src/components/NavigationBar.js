import React, { useState } from 'react'
import { Modal, Button, Form, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavigationBar = () => {

    const [showlogin, setShowlogin] = useState(false);

    const handleLoginClose = () => setShowlogin(false);
    const handleLoginShow = () => setShowlogin(true);


    const [showsignup, setShowsignup] = useState(false);
    
    const handleSignupClose = () => setShowsignup(false);
    const handleSignupShow = () => setShowsignup(true);
    
    const [username, setusername] = useState("");
    const [pass, setpass] = useState("");

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">E-Commerce Site</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form method="POST">
                            <div className="d-flex" style={{marginLeft:1200}}>
                                <Button variant="danger" className="mx-2" onClick={handleLoginShow}>
                                    Login
                                </Button>
                            </div>
                            <div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>


            <Modal show={showlogin} onHide={handleLoginClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Log-in Here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container className="p-4">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={(e)=>{setusername(e.target.value)}} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e)=>{setpass(e.target.value)}} type="password" placeholder="Password" />
                            </Form.Group>
                        </Container>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>window.location=`/login/${username}/${pass}`}>
                        Submit
                    </Button>
                    <Button variant="warning" onClick={handleSignupShow}>
                        Sign-Up
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showsignup} onHide={handleSignupClose}>
                <Modal.Header>
                    <Modal.Title>Register Here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container className="p-4">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter E-Mail" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>
                        </Container>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleSignupClose}>
                        Submit
                    </Button>
                    <Button variant="danger" onClick={handleSignupClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}
