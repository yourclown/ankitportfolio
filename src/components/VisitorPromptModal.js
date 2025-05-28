import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { CiSquareInfo,CiUser } from "react-icons/ci";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import emailjs from '@emailjs/browser';
import { ImCalculator } from 'react-icons/im';
import { AiFillCiCircle } from 'react-icons/ai';

// --- Google Analytics Tracking Helper ---
// IMPORTANT: Be extremely careful about sending Personally Identifiable Information (PII)
// like email addresses directly to Google Analytics. This can violate Google's terms
// of service and privacy regulations (GDPR, CCPA).
// Google Analytics is primarily for aggregated, anonymous data.
// If you need to track individual leads, consider:
// 1. Hashing the email address BEFORE sending it (e.g., SHA256).
// 2. Using a dedicated CRM system for lead tracking.
// 3. ONLY sending a boolean parameter like 'email_provided: true'.
// For this example, I'm including `submitted_email` as a placeholder for where
// you might put a HASHED email, or just remove it if not strictly needed.

const trackGAEvent = (eventName, eventParams) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
    console.log(`GA Event Fired: ${eventName}`, eventParams); // For debugging
  } else {
    console.warn('gtag is not defined. Google Analytics tracking might not be active.');
  }
};

function VisitorPromptModal() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const formRef = useRef();

  // --- Modal Visibility Logic ---
  useEffect(() => {
    const hasSubmittedForm = localStorage.getItem('hasSubmittedVisitorPromptForm');
    if (hasSubmittedForm) {
      return;
    }

    const timer = setTimeout(() => {
      setShowModal(true);
      // Event: Prompt Modal Displayed
      trackGAEvent('modal_displayed_prompt', {
        event_category: 'engagement', // Category for engagement-related events
        event_label: 'visitor_prompt_modal_shown', // Specific action within the category
        ui_element: 'visitor_prompt_modal' // Which UI element triggered this
      });
    }, 12000); // 12 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    // Event: Prompt Modal Closed (without submission)
    trackGAEvent('modal_closed_prompt', {
      event_category: 'engagement',
      event_label: 'visitor_prompt_modal_closed',
      ui_element: 'visitor_prompt_modal',
      action_type: 'close_button' // Or 'outside_click' if you track that specifically
    });
  };

  // --- Form Handling Logic ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      Swal.fire({
        title: 'Validation Error',
        text: 'All fields (Name, Email, Message) are required.',
        icon: 'warning',
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            title: 'Validation Error',
            text: 'Please enter a valid email address.',
            icon: 'warning',
        });
        return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs.sendForm('service_y7kheas', 'template_gvavlig', formRef.current, 'c2y8DHMrbfCO8UfZ7')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for your interest! I will connect with you soon.',
          icon: 'success',
        });
        // Event: Form Submitted Successfully from Modal
        trackGAEvent('form_submit_modal_prompt', {
          event_category: 'lead_generation', // Category for conversion-related events
          event_label: 'contact_form_submitted', // Specific action
          form_name: 'visitor_prompt_contact_form', // Custom parameter for the form name
          email_provided: true, // Indicates an email was provided
          // submitted_email: formData.email // CAUTION: Only send HASHED or non-PII data
        });

        localStorage.setItem('hasSubmittedVisitorPromptForm', 'true');
        setShowModal(false);
        setFormData({ name: '', email: '', subject: '', message: '' });

      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          title: 'Error',
          text: 'There was an error sending the message. Please try again.',
          icon: 'error',
        });
        // Event: Form Submission Failed from Modal
        trackGAEvent('form_failed_modal_prompt', {
          event_category: 'error', // Category for errors
          event_label: 'contact_form_submission_failed',
          form_name: 'visitor_prompt_contact_form',
          error_message: error.text // Capture error for debugging
        });
      });
  };

  // --- Render ---
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Thanks for Visiting My Portfolio!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>I hope you enjoyed exploring my work. Let's connect!</p>
<p>Please feel free to leave a message using the form below.</p>
<p>
 or <a href="/contact-me" className="btn btn-secondary">Contact Me Directly</a>
</p>

        <Form ref={formRef} onSubmit={sendEmail} className="mt-3">
          <Form.Group>
  <Form.Label htmlFor="name">Name:</Form.Label>
  <div style={{ position: 'relative' }}>
    <Form.Control
      type="text"
      name="name"
      id="name"
      placeholder="Enter your name"
      value={formData.name}
      onChange={handleChange}
      required
      style={{
        color: 'black',
        padding: "15px",
        background: 'rgba(184, 78, 212, 0.02)',
        borderRadius: '10px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(1px)',
        border: '1px solid rgba(184, 78, 212, 0.3)',
        paddingLeft: '40px' // make space for the icon
      }}
    />
    <CiUser style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
  </div>
</Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ color: 'black', padding: "15px", background: 'rgba(184, 78, 212, 0.02)', borderRadius: '10px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(1px)', border: '1px solid rgba(184, 78, 212, 0.3)' }}
            />
            <Form.Text className="text-muted">
             <CiSquareInfo/>I'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group >
            <Form.Label htmlFor="subject">Subject:</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{ color: 'black', padding: "15px", background: 'rgba(184, 78, 212, 0.02)', borderRadius: '10px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(1px)', border: '1px solid rgba(184, 78, 212, 0.3)' }}
            />
          </Form.Group>

          <Form.Group >
            <Form.Label htmlFor="message">Message:</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              id="message"
              rows="4"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ color: 'black', padding: "15px", background: 'rgba(184, 78, 212, 0.02)', borderRadius: '10px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(9px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(184, 78, 212, 0.3)' }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Send Message
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VisitorPromptModal;