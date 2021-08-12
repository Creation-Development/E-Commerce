import React from 'react'
import { Spinner } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import data from './Data'

const Addcart = (props) => {
    var id = props.match.params.id
    var item = data.filter((value) => value.id == id)[0]
    var cart = []
    if(sessionStorage.cart){
        var cart = JSON.parse(sessionStorage.getItem('cart'));
    }
    cart.push({
        "productId":item.id,
        "quantity":1
    })
    sessionStorage.setItem('cart', JSON.stringify(cart));
    window.history.back()
    return (
        <>
            <div className="justify-content-center d-flex" style={{ marginTop: 300 }}>
                <Spinner className="mx-4" animation="grow" variant="success" />
                <Spinner className="mx-4" animation="grow" variant="success" />
                <Spinner className="mx-4" animation="grow" variant="success" />
                <Spinner className="mx-4" animation="grow" variant="success" />
            </div>
        </>
    )
}

export default withRouter(Addcart)
