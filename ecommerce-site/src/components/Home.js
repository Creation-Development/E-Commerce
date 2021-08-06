import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../images/poster1.jpg'
import img2 from '../images/poster2.jpg'
import img3 from '../images/poster3.jpg'

export const Home = () => {
    
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        height="700"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        height="700"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        height="700"
                    />

                </Carousel.Item>
            </Carousel>
        </>
    )
}
