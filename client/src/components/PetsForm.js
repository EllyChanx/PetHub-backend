import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap';
import Navbar from './Navbar'

class PetsForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  routeChange(){
    let path = `/pets`;
    this.props.history.push(path);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://localhost:3001/pets', {
      method: 'POST',
      body: data,
    });
    this.routeChange()
  }

  render() {
    return (
      <Container className='App'>
        <h1>Enter your pet information</h1>
        <Form onSubmit={this.handleSubmit} className="form">
          <Row form>
            <Col>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Pet name" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="owner">Owner</Label>
                <Input type="text" name="owner" id="owner" placeholder="Your name" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" id="description" placeholder="Describe the pet"/>
          </FormGroup>
          <FormGroup>
            <Label for="image">Picture</Label>
            <Input type="file" name="image" id="image" />
            <FormText color="muted">
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Status</Label>
            <Input type="select" name="tag" id="exampleTag">
              <option>Lost</option>
              <option>Found</option>
              <option>Reunited</option>
            </Input>
          </FormGroup>
          <Button color="dark" style={{marginTop: '2rem'}} block>Report</Button>
        </Form>
      </Container>
    );
  }
}

export default PetsForm;
