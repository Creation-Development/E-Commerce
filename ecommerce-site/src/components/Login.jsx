import React from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import user from './Userdata';

const Login = (props) => {
    var username = props.match.params.username
    var pass = props.match.params.pass
    var userdata = user.filter((person)=>(person.username === username && person.password === pass))
    if(userdata.length === 0){
    }
    else{
        sessionStorage.setItem("username",userdata[0].username)
        sessionStorage.setItem("password",userdata[0].password)
        sessionStorage.setItem("id",userdata[0].id)
    }
    window.location = '/'
    return (
        <>
        </>
    )
}
export default withRouter(Login)
