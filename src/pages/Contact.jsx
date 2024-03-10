import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  const form = useRef();
  const [validationError, setValidationError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check form validation before sending the email
    if (!form.current.checkValidity()) {
      setValidationError('Please fill out all required fields.');
      return;
    }

    setValidationError(null);

    emailjs
    // service_3z9iwze
      .sendForm('service_3z9iwze', 'template_6ksvdsq', form.current, {
        publicKey: 'CJkRQIjkCkS0SGbUa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          document.getElementById('contact-form').reset()

          const contactEl = document.querySelector('#contact');
          contactEl.classList.add("bg-white");

          const successAlertEl = document.createElement('div');
          successAlertEl.innerHTML = `<h5 class='text-uppercase smallheader'>Contact</h5><h1 id="contact-header">Thanks for reaching out!</h1> <p>If you're contacting me with an inquiry, you can expect a response within 2-3 business days.</p><hr><p class="mb-0">If you'd like to correspond with further details, or send any attachments feel free to contact me at: dianamariedischer@gmail.com</p>`


          contactEl.innerHTML = "";
          contactEl.appendChild(successAlertEl);
          
        },
        (error) => {
          console.log('FAILED...', error.text);

          const contactEl = document.querySelector('#contact');

          const failedAlertEl = document.createElement('div');
          failedAlertEl.innerHTML = `<h5 class='text-uppercase smallheader'>Contact</h5><h1 id="contact-header">Your message didn't go through</h1> <p>I'm sorry, there seems to be something wrong with this form at the moment.</p><hr><p class="mb-0">Please get in touch with me directly at: dianamariedischer@gmail.com</p>`

          contactEl.appendChild(failedAlertEl);
          
        },
      );
  };

  return (
    <div className='m-4'>
      <div className="m-auto p-4 rounded" id="contact">
        <h5 className='text-uppercase smallheader'>Contact</h5>
        <h1 id="contact-header">Get in touch!</h1>
        <p>Feel free to send any inquiries, or just say hey right here:</p>
        {validationError && <p className="text-danger">{validationError}</p>}
        <Form ref={form} id="contact-form" onSubmit={sendEmail} noValidate>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              name="user_name"
              placeholder="Name*"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Email*"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Textarea">
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              placeholder="Message*"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send Email
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;