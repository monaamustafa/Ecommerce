import React from "react";
import { Form, Button } from "react-bootstrap";
import LocationPanner from "../LocationPanner";
import "./style/register.css";

export default function Register() {
  return (
    <div>
      <LocationPanner loc="Register" path="/register" />
      <div className="container">
        <Form className="d-flex justify-content-center">
          <div className="formItem">
            <h6>Personal Information</h6>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                First Name <span>*</span>
              </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Last Name <span>*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>
          </div>
          <div className="formItem">
              <h6>Sign-In Information</h6>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>
                  Email <span>*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Password <span>*</span>
                </Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button className="MColor" type="submit">
              Create an Account
              </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
