import React from 'react'
import { Card, Container, Table } from 'react-bootstrap';
import Chart from 'react-google-charts';
import { Link } from 'react-router-dom';
import data from './Data';

const Dashboard = () => {
    var clothing = data.filter((item) => item.category === "clothing")
    var electronic = data.filter((item) => item.category === "electronic")
    var assesories = data.filter((item) => item.category === "assesories")
    var sale = data.filter((item) => item.sale === "true")
    return (
        <>
            <Container>
            <div className="text-center text-danger my-4">
                    <h1>Graphical View Of Products</h1>
                </div>
                <div className="text-center">
                <Card className="shadow" style={{height:500, width:1010, marginLeft:100}}>
                    <Chart
                        width={'800px'}
                        height={'100px'}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            [
                                'Element',
                                'Item',
                                { role: 'style' },
                                {
                                    sourceColumn: 0,
                                    role: 'annotation',
                                    type: 'string',
                                    calc: 'stringify',
                                },
                            ],
                            ['Clothing Products', parseInt(`${clothing.length}`), 'blue', null],
                            ['Electronics Products  ', `${electronic.length}`, 'blue', null],
                            ['Assesories Products  ', `${assesories.length}`, 'blue', null],
                        ]}
                        options={{
                            title: 'Item in Category',
                            width: 1000,
                            height: 500,
                            bar: { groupWidth: '50%' },
                            legend: { position: 'none' },
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '6' }}
                    />
                </Card>
                </div>
                <div className="row my-4">
                    <div className="col-md-6 text-center">
                        <Link to="/dashboard/total-products" className="text-decoration-none">
                            <Card className="shadow">
                                <Card.Title>
                                    <h2 className="text-primary my-4">
                                        Total Product
                                    </h2>
                                    <h3 className="text-success mb-4">{data.length}</h3>
                                </Card.Title>
                            </Card>
                        </Link>
                    </div>
                    <div className="col-md-6 text-center">
                        <Link to="/product/sale" className="text-decoration-none">
                            <Card className="shadow">
                                <Card.Title>
                                    <h2 className="text-primary my-4">
                                        Sale Product
                                    </h2>
                                    <h3 className="text-success mb-4">{sale.length}</h3>
                                </Card.Title>
                            </Card>
                        </Link>
                    </div>
                </div>
                <div className="row my-4 mb-4">
                    <div className="col-md-4 text-center">
                        <Link to="/product/clothing" className="text-decoration-none">
                            <Card className="shadow">
                                <Card.Title>
                                    <h2 className="text-primary my-4">
                                        Clothing Product
                                    </h2>
                                    <h3 className="text-success mb-4">{clothing.length}</h3>
                                </Card.Title>
                            </Card>
                        </Link>
                    </div>
                    <div className="col-md-4 text-center">
                        <Link to="/product/electronics" className="text-decoration-none">
                            <Card className="shadow">
                                <Card.Title>
                                    <h2 className="text-primary my-4">
                                        Electronics Product
                                    </h2>
                                    <h3 className="text-success mb-4">{electronic.length}</h3>
                                </Card.Title>
                            </Card>
                        </Link>
                    </div>
                    <div className="col-md-4 text-center">
                        <Link to="/product/assesories" className="text-decoration-none">
                            <Card className="shadow">
                                <Card.Title>
                                    <h2 className="text-primary my-4">
                                        Assesories Product
                                    </h2>
                                    <h3 className="text-success mb-4">{assesories.length}</h3>
                                </Card.Title>
                            </Card>
                        </Link>
                    </div>
                </div>
                
            </Container>
        </>
    )
}

export default Dashboard;
