import React from "react";
import { Form, Button } from "react-bootstrap";
import "../Sass/register.css";

export default function Login() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="formItem">
          <Form>
            <h6>Login Your Account</h6>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
            SIGN IN
            </Button>
          </Form>
        </div>
        <div className="formItem">
          <h4>Don't Have An Account? Register Now !</h4>
          <a
            href="/register"
            className="btn MColor"
            variant="primary"
            type="submit"
          >
            REGISTER NOW!
          </a>
        </div>
      </div>
    </div>
  );
}
