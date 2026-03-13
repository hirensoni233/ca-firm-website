import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/cahirensoni2001@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (err) {
            setError("Something went wrong. Please try again later.");
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <PageTransition>
            <div className="contact-page">
                {/* Page Header */}
                <section className="page-header dark-section">
                    <div className="container">
                        <h1 className="page-title">Contact Me</h1>
                        <p className="page-subtitle">Let's discuss how we can streamline your accounting processes.</p>
                    </div>
                </section>

                <section className="section">
                    <div className="container contact-container">
                        <div className="contact-info-wrapper">
                            <h2>Get In Touch</h2>
                            <p className="contact-intro">
                                Whether you need comprehensive bookkeeping, a state-of-the-art automated financial model, or strategic tax planning, I'm here to help. Reach out directly or fill out the form.
                            </p>

                            <div className="contact-info-cards">
                                <div className="info-card glass">
                                    <div className="info-icon"><FaPhoneAlt /></div>
                                    <div>
                                        <h3>Phone</h3>
                                        <p>+91 9898243002</p>
                                    </div>
                                </div>

                                <div className="info-card glass">
                                    <div className="info-icon"><FaEnvelope /></div>
                                    <div>
                                        <h3>Email</h3>
                                        <p>cahirensoni2001@gmail.com</p>
                                    </div>
                                </div>

                                <div className="info-card glass">
                                    <div className="info-icon"><FaMapMarkerAlt /></div>
                                    <div>
                                        <h3>Office Location</h3>
                                        <p>Ahmedabad Gujarat India 380015</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper glass shadow-premium">
                            {isSubmitted ? (
                                <div className="success-message">
                                    <div className="success-icon"><FaCheckCircle /></div>
                                    <h2>Thank You!</h2>
                                    <p>Your inquiry has been submitted successfully. I will get back to you shortly.</p>
                                    <button onClick={() => setIsSubmitted(false)} className="btn btn-primary">Send Another Message</button>
                                </div>
                            ) : (
                                <>
                                    <h2>Send an Inquiry</h2>
                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" id="name" name="name" placeholder="Hiren Soni" required />
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="email" id="email" name="email" placeholder="hiren@company.com" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone Number</label>
                                                <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="service">Service Required</label>
                                            <select id="service" name="service" required defaultValue="">
                                                <option value="" disabled>Select a service</option>
                                                <option value="bookkeeping">Accounting & Bookkeeping</option>
                                                <option value="automation">Accounting Automation</option>
                                                <option value="tax">Taxation Services</option>
                                                <option value="consulting">General Consulting</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea id="message" name="message" rows="5" placeholder="Tell me about your business needs..." required></textarea>
                                        </div>

                                        {error && <p className="error-message">{error}</p>}

                                        <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Contact;

