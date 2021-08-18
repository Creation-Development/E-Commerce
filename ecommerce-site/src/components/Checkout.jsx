import React from 'react'
import { Container, Table } from 'react-bootstrap';
import data from './Data';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Checkout = () => {
    
    var total = 0
    var datacart = JSON.parse(localStorage.getItem('cart'));
    var cartitem = [...new Set(datacart)]
    var quantityList = JSON.parse(localStorage.getItem('quantityList'));
    var orderID = Math.floor(Math.random() * 1000000)
    var cartquantity = cartitem.map((item) => (
        quantityList[datacart.indexOf(item)]
    ))
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        stepper:{
            background:'transparent'
        },
    }));

    function getSteps() {
        return ['Check Your Cart Item', 'Fill Details For Checkout', 'Confirm Order and Get OrderId'];
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <Container>
                        <div className="head my-4">
                            <h3>Check Your Cart Item</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 my-4">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Id</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartitem.map((item, index) => {
                                                var cartproduct = data.filter((i) => i.id == item)[0]
                                                total += cartproduct.price * cartquantity[index];
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{item}</td>
                                                            <td>{cartproduct.title.slice(0, 20) + "..."}</td>
                                                            <td>{cartquantity[index]}</td>
                                                            <td>{cartproduct.price * cartquantity[index]}</td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <tr>&nbsp;</tr>
                                        <tr>
                                            <th colspan="5"><h4>Total Cart Price : {total}</h4></th>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </Container>
                );
            case 1:
                return (
                    //form
                    <>
                        <div class="container">
                            <h4 class="mb-3 text=center my-4">Fill Details For Checkout</h4>
                            <form class="needs-validation" novalidate>
                                <div class="row g-3 text-start">
                                    <div class="col-sm-6">
                                        <label for="firstName" class="form-label">First name</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                                        <div class="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <label for="lastName" class="form-label">Last name</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="username" class="form-label">Username</label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text">@</span>
                                            <input type="text" class="form-control" id="username" placeholder="Username" required />
                                            <div class="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                                        <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="address" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                                        <div class="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                                        <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                                    </div>

                                    <div class="col-md-4">
                                        <label for="country" class="form-label">Country</label>
                                        <input type="text" class="form-control" id="counrty" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <label for="state" class="form-label">State</label>
                                        <input type="text" class="form-control" id="state" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <label for="zip" class="form-label">Zip</label>
                                        <input type="number" class="form-control" id="zip" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>

                                <hr class="my-4" />

                                <div class="form-check text-start">
                                    <input type="checkbox" class="form-check-input" id="same-address" />
                                    <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                                </div>

                                <div class="form-check text-start">
                                    <input type="checkbox" class="form-check-input" id="save-info" />
                                    <label class="form-check-label" for="save-info">Save this information for next time</label>
                                </div>

                                <hr class="my-4" />

                                <h4 class="mb-3 text-center">Payment</h4>

                                <div class="my-3 text-start">
                                    <div class="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                                        <label class="form-check-label" for="credit">Credit card</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                                        <label class="form-check-label" for="debit">Debit card</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                                        <label class="form-check-label" for="paypal">PayPal</label>
                                    </div>
                                </div>

                                <div class="row gy-3 text-start">
                                    <div class="col-md-6">
                                        <label for="cc-name" class="form-label">Name on card</label>
                                        <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                        <small class="text-muted">Full name as displayed on card</small>
                                        <div class="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="cc-number" class="form-label">Credit card number</label>
                                        <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-expiration" class="form-label">Expiration</label>
                                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-cvv" class="form-label">CVV</label>
                                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>

                                <hr class="my-4" />

                                <button class="w-25 btn btn-success" type="submit">Continue to checkout</button>
                            </form>
                        </div>


                    </>
                );
            case 2:
                return (
                    <div className="row">
                        <div className="head">
                            <h1>Confirm Order and Get OrderId</h1>
                        </div>
                        <div className="orderId" style={{marginBlock:200}}>
                        <h3>Your OrderId is : {orderID}</h3>
                        </div>
                    </div>
                );
            default:
                return 'No Cart Found';
        }
    }

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <>
            <div className="main-checkout row text-center">
                <div className="col-md-12 my-4">
                    <Container>
                        <div className="checkout card pb-4">
                            <h1 className="my-4">Checkout</h1>
                            <div className={classes.root}>
                                <Stepper className={classes.stepper} activeStep={activeStep}>
                                    {steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};
                                        if (isStepOptional(index)) {
                                            labelProps.optional = <Typography variant="caption"></Typography>;
                                        }
                                        if (isStepSkipped(index)) {
                                            stepProps.completed = false;
                                        }
                                        return (
                                            <Step key={label} {...stepProps}>
                                                <StepLabel {...labelProps}>{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>
                                <div>
                                    {activeStep === steps.length ? (
                                        <div>
                                            <Typography className={classes.instructions}>
                                                All steps completed - you&apos;re finished
                                            </Typography>
                                        </div>
                                    ) : (
                                        <div>
                                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                            <div>
                                                <Button variant="contained" color="secondary" disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                    Back
                                                </Button>

                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

            </div>
        </>
    )
}

export default (Checkout)


