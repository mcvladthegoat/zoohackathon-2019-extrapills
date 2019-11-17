import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Lead,
  Badge,
  ListGroup,
  List,
  Form,
  InputGroup,
  Button,
  BDiv,
  BH2,
  BH4,
  BH6,
  BSpan,
  BImg,
  BSmall,
  BHr,
  BFooter,
  BP
} from 'bootstrap-4-react';

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const {username: {value: username}, password: {value: password}} = e.target;
    console.log(username, password);
  }


  return (
    <div>
      <Row>
        <Col md="5" order="md-1" style={{margin: "0 auto"}}>
        <h1>Log in</h1>
          <Form needsValidation={false} onSubmit={onSubmit} >
          <BDiv mb="3">
            <label htmlFor="username">Username</label>
            <InputGroup>
              <Form.Input id="username" placeholder="Username" required />
            </InputGroup>
          </BDiv>
          <BDiv mb="3">
            <label htmlFor="password">Password</label>
            <InputGroup>
              <Form.Input id="password" placeholder="Your password" required type="password" />
            </InputGroup>
            <BHr md="3" />
            <Button primary lg block type="submit">Log in</Button>
          </BDiv>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
