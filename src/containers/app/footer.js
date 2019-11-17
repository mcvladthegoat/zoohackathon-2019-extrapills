import React, { Component } from 'react';
import { Container, BP } from 'bootstrap-4-react';

const Footer = props => (
  <Container as="footer">
    {/* <BP float="right"><a href="#">Back to top</a></BP> */}
    <p style={{textAlign: 'center', marginTop: '50px'}}>ExtraPills team, 2019 </p>
  </Container>
)

export default Footer;
