import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./UserAuthContext";
import './Login.css';

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="">
      <p className="tab" style={{ color: "white", textAlign: "center" }}>{props.title} Signup</p>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="input" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </Form.Group>

          <Form.Group className="input" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </Form.Group>

          <div className="">
            <Button variant="primary" type="Submit" className="logged">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="hr foot-lnk">
        Already have an account? <Link to="/user-portal">Log In</Link>
      </div>
    </>
  );
};

export default Signup;