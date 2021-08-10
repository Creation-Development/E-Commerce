import React from 'react'
import { Card, Container } from 'react-bootstrap';
import data from './Data';

const Dashboard = () => {
    var clothing = data.filter((item)=>item.category==="clothing")
    var electronic = data.filter((item)=>item.category==="electronic")
    var assesories = data.filter((item)=>item.category==="assesories")
    var sale = data.filter((item)=>item.sale==="true")
    return (
        <>
            <Container>
                <div className="row my-4">
                    <div className="col-md-6 text-center">
                        <Card className="shadow">
                            <Card.Title>
                                <h2 className="text-info my-4">
                                    Total Product
                                </h2>
                                <h3 className="text-info mb-4">{data.length}</h3>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className="col-md-6 text-center">
                        <Card className="shadow">
                            <Card.Title>
                                <h2 className="text-info my-4">
                                    Sale Product
                                </h2>
                                <h3 className="text-info mb-4">{sale.length}</h3>
                            </Card.Title>
                        </Card>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-4 text-center">
                        <Card className="shadow">
                            <Card.Title>
                                <h2 className="text-info my-4">
                                    Clothing Product
                                </h2>
                                <h3 className="text-info mb-4">{clothing.length}</h3>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className="col-md-4 text-center">
                        <Card className="shadow">
                            <Card.Title>
                                <h2 className="text-info my-4">
                                    Electronics Product
                                </h2>
                                <h3 className="text-info mb-4">{electronic.length}</h3>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className="col-md-4 text-center">
                        <Card className="shadow">
                            <Card.Title>
                                <h2 className="text-info my-4">
                                    Assesories Product
                                </h2>
                                <h3 className="text-info mb-4">{assesories.length}</h3>
                            </Card.Title>
                        </Card>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Dashboard;
