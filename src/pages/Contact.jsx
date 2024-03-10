import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    // service_3z9iwze
      .sendForm('service', 'template_6ksvdsq', form.current, {
        publicKey: 'CJkRQIjkCkS0SGbUa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          document.getElementById('contact-form').reset()
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          const mainEl = document.querySelector('#main');

          const successAlertEl = document.createElement('div');
          successAlertEl.classList.add("alert", "alert-success");
          successAlertEl.innerHTML = `<h4 class="alert-heading">Thank you for getting in touch!</h4><p>If you're contacting me with an inquiry, you can expect a response within 2-3 business days.</p><hr><p class="mb-0">If you'd like to correspond with further details, or send any attachments feel free to contact me at: dianamariedischer@gmail.com</p>`

          mainEl.innerHTML = "";
          mainEl.appendChild(successAlertEl);
        },
      );
  };

  return (
    <div className='m-4'>
    <div className="m-auto p-4 rounded" id="contact">
    <h5 className='text-uppercase smallheader'>Contact</h5>
    <h1 id="contact-header">Get in touch!</h1> 
    <p>Feel free to send any inquiries or just say hey right here:</p>
    <Form ref={form} id="contact-form" onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="name" name="user_name" placeholder="Name*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" name="user_email" placeholder="Email*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Textarea">
        <Form.Control as="textarea" name="message" rows={3} placeholder="Message*"/>
      </Form.Group>
      <Button variant="primary" type="submit">Send email</Button>
    </Form>
    </div>
    </div>
  );
}

export default Contact;