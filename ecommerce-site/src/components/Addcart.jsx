import React from 'react'
import { Spinner } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const Addcart = (props) => {
    var id = props.match.params.id
    var quantity = props.match.params.quantity
    if (localStorage.cart) {
        var cart = JSON.parse(localStorage.getItem('cart'));
        var quantityList = JSON.parse(localStorage.getItem('quantityList'));
    }
    else {
        var cart = []
        var quantityList = []
    }
    cart.push(parseInt(id))
    quantityList.push(parseInt(quantity))
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('quantityList', JSON.stringify(quantityList));
    console.log(JSON.parse(localStorage.getItem('cart')));
    console.log(JSON.parse(localStorage.getItem('quantityList')));
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
