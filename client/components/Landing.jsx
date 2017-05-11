import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Landing() {
  return (
    <div className="stretch">
      <div className="container">
        <h3 className="hero-text">Welcome to this boilerplate!!</h3>
        <LinkContainer to="dashboard">
          <Button bsStyle="primary" bsSize="large">Proceed</Button>
        </LinkContainer>
      </div>
    </div>
  );
}
