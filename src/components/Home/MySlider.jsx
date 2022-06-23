import { Carousel } from 'react-bootstrap'
import React from 'react'
export default function MySlider() {
  return(
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/slider1-store1-1920x800.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption className='BlackColor' >
          <h3 >Second slide label</h3>
          <p  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/slider2-store1-1920x800.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption className='BlackColor'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
