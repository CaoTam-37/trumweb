import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { handleChange, handleSubmit } from "../../features/form/formSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "./SectionFormStyles.css";

const SectionForm = () => {
  const {
    firstName,
    lastName,
    email,
    phoneNum,
    desiredPosition,
    desiredSalary,
  } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  return (
    <>
      <Container className='form-container'>
        {/* <input value={name} onChange={(e)=>dispatch(handleChange(e.target.value))}/> */}
        <div className='form-box'>
          <h1>contact us</h1>
          <h3>we are looking for young talent</h3>
          <div className='input-box'>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(handleSubmit());
              }}
            >
              <Row className='mb-3'>
                <Form.Group as={Col} controlId='formFirstName'>
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control
                    name='firstName'
                    type='text'
                    placeholder='Enter First Name'
                    value={firstName}
                    onChange={(e) =>
                      dispatch(
                        handleChange({
                          input: e.target.value,
                          name: e.target.name,
                        })
                      )
                    }
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='formLastName'>
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control
                    name='lastName'
                    type='text'
                    placeholder='Enter Last Name'
                    value={lastName}
                    onChange={(e) =>
                      dispatch(
                        handleChange({
                          input: e.target.value,
                          name: e.target.name,
                        })
                      )
                    }
                    required
                  />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col} controlId='formEmail'>
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    name='email'
                    type='text'
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(e) =>
                      dispatch(
                        handleChange({
                          input: e.target.value,
                          name: e.target.name,
                        })
                      )
                    }
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='formPhoneNumber'>
                  <Form.Label>Phone Number *</Form.Label>
                  <Form.Control
                    name='phoneNum'
                    type='text'
                    placeholder='Enter Your Phone Number'
                    value={phoneNum}
                    onChange={(e) =>
                      dispatch(
                        handleChange({
                          input: e.target.value,
                          name: e.target.name,
                        })
                      )
                    }
                    required
                  />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col} controlId='formFirstName'>
                  <Form.Label>Desired Position *</Form.Label>
                  <Form.Control
                    name='desiredPosition'
                    type='text'
                    placeholder='Enter Desired Position'
                    value={desiredPosition}
                    onChange={(e) =>
                      dispatch(
                        handleChange({
                          input: e.target.value,
                          name: e.target.name,
                        })
                      )
                    }
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId='formFirstName'>
                  <Form.Label>Desired Salary *</Form.Label>
                  <Form.Control
                    name='desiredSalary'
                    type='text'
                    placeholder='Enter Desired Salary'
                    value={desiredSalary}
                    onChange={(e) =>
                      dispatch(
                        handleChange({
                          input: e.target.value,
                          name: e.target.name,
                        })
                      )
                    }
                    required
                  />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <button type='submit' className='btn-submit'>
                  Submit
                </button>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SectionForm;
