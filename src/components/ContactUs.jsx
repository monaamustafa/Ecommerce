import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import LocationPanner from "./LocationPanner";

export default function ContactUs() {
  return (
    <>
      <LocationPanner loc="Contact Us" path="ContactUs" />
      <div className="container contact-us ">
        <div className="d-flex">
          <div className="contact-form">
            <Form>
              <h6>Send us a Message!</h6>
              <div className="d-flex justify-content-between">

              <Form.Group className="mb-3 contact-form-input" controlId="formBasicEmail">
                
                <Form.Label>
                  Your Name <span>*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 contact-form-input" controlId="formBasicPassword">
                <Form.Label>
                  Your Email <span>*</span>
                </Form.Label>
                <Form.Control type="Email" placeholder="Email" />
              </Form.Group>
              </div>
              
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Button className="MColor" type="submit">
                SIGN IN
              </Button>
            </Form>
          </div>
          <div className="contact-info">
            <h3>Send us a Message!</h3>
            <div>
              <p>Restfield White City London</p>
              <p>G12 Ariel Way - United Kingdom</p>
            </div>
            <div>
              <p>(+800) 123 456 7890</p>
            </div>
            <div>
              <p>info@safiraoutfit.co.uk</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
