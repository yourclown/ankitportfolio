import React, { useRef, useState, useEffect } from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import Particle from '../Particle';
import Contact from '../../Assets/contact.png'
import './Contactme.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function Contactme() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y7kheas', 'template_gvavlig', form.current, 'c2y8DHMrbfCO8Uf')
            .then((result) => {
                console.log(result.text);
                // Display success message using Swal
                Swal.fire({
                    title: 'Message Sent!',
                    icon: 'success',
                });
            })
            .catch((error) => {
                console.log(error.text);
                // Display error message using Swal
                Swal.fire({
                    title: 'Error',
                    text: 'There was an error sending the message. Please try again.',
                    icon: 'error',
                });
            });

        if (validateForm()) {
            console.log("success");
        }
    };


    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('All fields are required');
            return false;
        }

        // Add more complex validation logic for email if needed

        return true;
    }


    return (
        <>

            <Container fluid className="con-section">
                <Particle />
                <Container>
                    <Row>
                        <Col md={6}>
                            <Card style={{ height: "100%", background: 'rgba(184, 78, 212, 0.02)', borderRadius: '16px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(1px)', WebkitBackdropFilter: 'blur(1px)', border: '1px solid rgba(184, 78, 212, 0.3)' }}>
                                <Card.Body>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name:</label>

                                            <input pattern="[A-Za-z ]+" title="Please enter only letters" type="text" style={{ color: 'white', padding: "15px", background: 'rgba(184, 78, 212, 0.02)', borderRadius: '10px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(1px)', border: '1px solid rgba(184, 78, 212, 0.3)' }} className="form-control" id="name" placeholder="Enter your name" name="name" required />

                                        </div>

                                        <br></br>

                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" style={{ color: 'white', padding: "15px", background: 'rgba(184, 78, 212, 0.02)', borderRadius: '10px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(1px)', border: '1px solid rgba(184, 78, 212, 0.3)' }} className="form-control" id="email" placeholder="Enter your email" name="email" required />
                                        </div>
                                        <br></br>
                                        <div className="form-group">
                                            <label htmlFor="name">subject:</label>

                                            <input type="text" style={{ color: 'white', padding: "15px", background: 'rgba(184, 78, 212, 0.02)', borderRadius: '10px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(1px)', border: '1px solid rgba(184, 78, 212, 0.3)' }} className="form-control" id="name" placeholder="Enter your name" name="subject" required />

                                        </div>
                                        <br></br>
                                        <div className="form-group">
                                            <label htmlFor="message">Message:</label>
                                            <textarea style={{ color: 'white', padding: "15px", background: 'rgba(184, 78, 212, 0.02)', borderRadius: '10px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(9px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(184, 78, 212, 0.3)' }} className="form-control" id="message" rows="4" placeholder="Your message" name="message" required></textarea>
                                        </div>
                                        <br></br>
                                        <button type="submit" className="btn btn-primary" value="SEND">Send Message</button>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} style={{ paddingBottom: 20 }}>
                            <img
                                src={Contact}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "500px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}
