import React from 'react'
import { Container, Table } from 'react-bootstrap'
import user from './Userdata'

const Totaluser = () => {
    return (
        <>
            <Container className="my-4" style={{marginLeft:210}}>
            <div className="text-center text-danger my-4">
                <h1>Total Users</h1>
            </div>
                <Table className="text-center" striped bordered>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Username</th>
                            <th>Full Name</th>
                            <th>Contact Number</th>
                            <th>E-Mail</th>
                            <th>Password</th>
                            <th>Zip-Code</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            user.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.username}</td>
                                        <td>{item.name.firstname + " " + item.name.lastname}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>{item.address.zipcode}</td>
                                        <td><h4><i className="fa fa-pencil-square-o text-info"></i></h4></td>
                                        <td><h4><i className="fa fa-trash-o text-danger"></i></h4></td>
                                    </tr>
                                )
                            })



                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Totaluser
