import React from 'react'
import { Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import user from './Userdata';

const Login = (props) => {
    var username = props.match.params.username
    var pass = props.match.params.pass
    if (username === '') {
        alert("Field can't be blank")
    }
    else if (pass === '') {
        alert("Field can't be blank")
    }
    else {
        var userdata = user.filter((person) => (person.username === username && person.password === pass))
        if (userdata.length === 0) {
            alert("Enter Valid Credentials and try again...!!")
            window.location = '/'
        }
        else {
            sessionStorage.setItem("username", userdata[0].username)
            sessionStorage.setItem("password", userdata[0].password)
            sessionStorage.setItem("id", userdata[0].id)
            window.location = '/'
        }
    }
    return (
        <>
        <div className="justify-content-center d-flex" style={{marginTop:300}}>
                <h1><Spinner animation="grow" size="lg" variant="success" /></h1>
                <h1><Spinner animation="grow" size="lg" variant="success" /></h1>
                <h1><Spinner animation="grow" size="lg" variant="success" /></h1>
                <h1><Spinner animation="grow" size="lg" variant="success" /></h1>
            </div>
        </>
    )
}
export default withRouter(Login)
