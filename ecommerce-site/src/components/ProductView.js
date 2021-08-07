import React from 'react'
import { withRouter } from 'react-router-dom'
import data from './Data';

function ProductView(props) {

    console.warn(props)
    var id = props.match.params.id;
    var product = data.filter(item => item.id == id)[0];
    console.log(product.image);

    return (
        <>
            <div class="row container my-4 featurette">
                <div className="col-md-1"></div>
                <div class="col-md-5">
                    <img src={product.image} width="500" height="500"/>
                </div>
                <div className="col-md-1"></div>
                <div class="col-md-5">
                    <h4>{product.title}</h4>
                    <h4 className="text-danger my-4">Price : Rs.{product.price}&nbsp;&nbsp;&nbsp;<span class="badge bg-success">{product.discount}</span></h4>
                    <h5 className="my-4">{product.description}</h5>
                    <div className="text-center my-4">
                    <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(ProductView)