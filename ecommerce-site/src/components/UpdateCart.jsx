import React from 'react'
import { Spinner } from 'react-bootstrap'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

const UpdateCart = (props) => {
    var id = props.match.params.id
    var quantity = props.match.params.quantity
    var cart = JSON.parse(localStorage.getItem('cart'))
    var quantityList = JSON.parse(localStorage.getItem('quantityList'))
    var cartdata = cart.filter((value) => value == id)
    var cartitem = cart.indexOf(cartdata[0])
    quantityList[cartitem] = parseInt(quantity)

    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('quantityList', JSON.stringify(quantityList));
    window.location = `/products/${id}`

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

export default withRouter(UpdateCart)
