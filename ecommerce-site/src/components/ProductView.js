import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom'
import data from './Data';

function ProductView(props) {
    var id = props.match.params.id;
    // eslint-disable-next-line
    var product = data.filter(item => item.id == id)[0];
    if (localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'))
        var quantityList = JSON.parse(localStorage.getItem('quantityList'))
        var cartitem = cart.filter((item) => item == id)
        var index = cart.indexOf(cartitem[0])
    }
    else{
        var quantity = 0
        var index = 0
        var quantityList =[0]
        var cartitem = []
    }
    var [quantity,setquantity] = useState(quantityList[index])
    

    var update = (num) => {
        document.getElementById('num').innerHTML = num
        setquantity(num)
    }
    var add = (e, num) => {
        e.preventDefault();
        var newNum = parseInt(num) + 1
        update(newNum)
    }
    var del = (e, num) => {
        if (num <= "1") {
            alert("Add Atleast One Item")
        }
        else {
            e.preventDefault();
            var newNum = parseInt(num) - 1
            update(newNum)
        }
    }
    return (
        <>
            <div class="row container my-4 featurette">
                <div className="col-md-1"></div>
                <div class="col-md-5">
                    <img src={product.image} width="500" height="500" />
                </div>
                <div className="col-md-1"></div>
                <div class="col-md-5">
                    <h4>{product.title}</h4>
                    <h4 className="text-danger my-4">Price : Rs.{product.price}&nbsp;&nbsp;&nbsp;<span class="badge bg-success">{product.discount}</span></h4>
                    <h5 className="my-4">{product.description}</h5>
                    <div className="text-center my-4">

                        {cartitem.length == 0 ?
                            <Link to={`/addcart/${product.id}/1`} className="btn btn-primary text-decoration-none">Add To Cart</Link>
                            :
                            <>
                                <ButtonGroup aria-label="Basic example">
                                    <Button className="mx-4" onClick={e => del(e, document.getElementById('num').innerHTML)}>-</Button>
                                    <p className="data my-3" id="num">{quantity}</p>
                                    <Button className="mx-4" onClick={e => add(e, document.getElementById('num').innerHTML)}>+</Button>
                                </ButtonGroup>
                                <Link to={`/updatecart/${product.id}/${quantity}`} className="btn btn-primary text-decoration-none">Add Item</Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(ProductView)