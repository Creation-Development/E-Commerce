import React from 'react'
import { Container, Table } from 'react-bootstrap'
import data from './Data'

const TotalProducts = () => {
    return (
        <>
            <div className="text-center text-danger my-4">
                <h1>Total Products</h1>
            </div>
            <Container className="my-4">
                <Table className="text-center" striped bordered>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            data.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.title.slice(0, 20)}</td>
                                        <td>{item.description.slice(0, 50) + "..."}</td>
                                        <td>{item.price}</td>
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

export default TotalProducts
