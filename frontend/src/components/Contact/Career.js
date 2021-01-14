/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Button, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function handleSubmit(values) {
  console.log("Current State is: " + JSON.stringify(values));
  alert("Current State is: " + JSON.stringify(values));
  // event.preventDefault();
}
export default function Career() {
  return (
    <div className='row row-content bg-black'>
      <div className='col-12 text-center m-5'>
        <h3 className='text-light mb-5'>We Are Hiring !</h3>

        <div className='col-12 col-md-9 ml-5'>
          <LocalForm
            onSubmit={(values) => handleSubmit(values)}
            className='d-block'
          >
            <Row className='form-group'>
              <Label htmlFor='firstname' md={2} className='text-light'>
                Full Name
              </Label>
              <Col md={3}>
                <Control.text
                  model='.firstname'
                  id='firstname'
                  name='firstname'
                  placeholder='Full name'
                  className='form-control'
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className='text-danger'
                  model='.firstname'
                  show='touched'
                  messages={{
                    required: "",
                    minLength: " Must be greater than 2 characters",
                    maxLength: " Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className='form-group'>
              <Label htmlFor='telnum' md={2} className='text-light'>
                Contact Tel.
              </Label>
              <Col md={3}>
                <Control.text
                  model='.telnum'
                  id='telnum'
                  name='telnum'
                  placeholder='Tel. Number'
                  className='form-control'
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                    isNumber,
                  }}
                />
                <Errors
                  className='text-danger'
                  model='.telnum'
                  show='touched'
                  messages={{
                    required: "",
                    minLength: " Must be greater than 2 numbers",
                    maxLength: " Must be 15 numbers or less",
                    isNumber: " Must be a number",
                  }}
                />
              </Col>
            </Row>
            <Row className='form-group'>
              <Label
                htmlFor='email'
                md={{ size: 2, offset: 0 }}
                className='text-light'
              >
                <li style={{ listStyle: "none", marginLeft: "2.5rem" }}>
                  Email
                </li>
              </Label>
              <Col md={4}>
                <Control.text
                  model='.email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  className='form-control'
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className='text-danger ml-2 text-left'
                  model='.email'
                  show='touched'
                  messages={{
                    required: "",
                    validEmail: " Invalid Email Address",
                  }}
                />
              </Col>
            </Row>
            <Row className='form-group'>
              <Col md={{ size: 1 }}>
                <Label
                  htmlFor='positionType'
                  md={{ size: 2, offset: 9 }}
                  className='text-light'
                >
                  Position
                </Label>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Control.select
                  model='.positionType'
                  name='PositionType'
                  className='form-control'
                >
                  <option>Lorem</option>
                  <option>ipsum</option>
                  <option>lorem ipsum</option>
                  <option>Lorem Ipsum</option>
                </Control.select>
              </Col>
            </Row>
            <Row className='form-group mr-5'>
              <Col md={{ size: 1 }}>
                <Label
                  htmlFor='cv'
                  md={{ size: 2, offset: 8 }}
                  className='text-light'
                >
                  <li style={{ listStyle: "none", marginLeft: "2.5rem" }}>
                    CV
                  </li>
                </Label>
              </Col>
              <Col md={{ size: 1, offset: 1 }}>
                <Control.file
                  model='.cv'
                  name='cv'
                  className='form-control bg-none'
                ></Control.file>
              </Col>
            </Row>
            <Row className='form-group'>
              <Col md={{ size: 1, offset: 2 }}>
                <Button type='submit' color='primary' className='text-light'>
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </div>
      </div>
    </div>
  );
}
