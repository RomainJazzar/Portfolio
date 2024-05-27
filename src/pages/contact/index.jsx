import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        // Prepare the message content
        const userMessage = e.target.message.value;
        const userEmail = e.target.user_email.value;
        const userPhone = e.target.user_phone.value;
        const finalMessage = `Email: ${userEmail}\nPhone: ${userPhone}\n\nMessage:\n${userMessage}`;

        emailjs.sendForm('service_xdzw1wh', 'template_9mnw3jg', e.target, 'T6lHlI37Jk1d1IbYv')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });

        e.target.reset(); // Reset form fields after submission
    };


    return (
        <div id='contact' className="contact-container contact">
            <div className="contact-info">

                <h3 style={{ fontSize: 40 }}>Ensemble, développons votre produit unique et innovant !</h3>
                <p>N'hésitez pas à m'écrire, je suis impatient de vous aider à réaliser vos visions en réalité !</p>
                <div className="options">
                    <p><FontAwesomeIcon icon={faUser} /> <span>Romain Jazzar</span></p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> <span>romainjazzar.com</span></p>
                    <p><FontAwesomeIcon icon={faPhone} /> <span>+33 7 71 02 6964</span></p>
                    <p><FontAwesomeIcon icon={faLocationDot} /> <span>Marseille, France.</span></p>

                </div>
            </div>
            <div className="form-heading">

                <h2 style={{ textAlign: 'center' , color:'white'}}>ME CONTRACTER</h2>
                <form className="custom-form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <input type="text" name="user_name" placeholder="Prénom - Nom" />
                    </div>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        <input type="tel" name="user_phone" placeholder="Numéro de téléphone" />
                    </div>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <input type="email" name="user_email" placeholder="Adresse e-mail" />
                    </div>
                    <div className="form-group message-area">
                        <FontAwesomeIcon icon={faPen} className="icon" />
                        <textarea name="message" placeholder="Message" rows="5"></textarea>
                    </div>
                    <button type="submit">Envoyer le message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
