import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import data from './Data';

export const ProductClothing = () => {


    var product = data.filter(item => item.category === "clothing");

    return (
        <>
            <div className="title text-center my-4">
                <h1>
                    Clothing Products
                </h1>
            </div>
            <div>

                <Container>
                    <div className="row">
                        {
                            product.map((item) => {

                                return (
                                    <>
                                        <div className="col-sm-4">
                                            <Card style={{ width: '25rem', height: 620, marginBottom: 50 }}>
                                                <Card.Img variant="top" src={item.image} height="450" />
                                                <Card.Body>
                                                    <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                                                    <Card.Title><b>Price : Rs.{item.price}&nbsp;&nbsp;&nbsp;<span class="badge rounded-pill bg-danger">{item.discount}</span>
                                                    </b></Card.Title>
                                                    <Card.Text>
                                                        {item.description.slice(0, 30)+"..."}
                                                    </Card.Text>
                                                    <div className="d-flex">
                                                        <Button className="btn-sm" href={`/product/${item.id}`} style={{ marginInline: 5 }} variant="primary"><i class="fa fa-cart-plus mr-2"></i> View Product</Button>
                                                        <Button className="btn-sm" style={{ marginInline: 5 }} variant="primary"><i class="fa fa-eye mr-2"></i> Add To Cart</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </>
                                )

                            })}
                    </div>


                </Container>


            </div>
        </>
    )
}
