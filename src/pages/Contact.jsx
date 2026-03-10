import PageTransition from '../components/PageTransition';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
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
                                        <p>CAHIRENSONI2001@gmail.com</p>
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
                            <h2>Send an Inquiry</h2>
                            <form className="contact-form" action="https://formsubmit.co/CAHIRENSONI2001@gmail.com" method="POST">
                                <input type="hidden" name="_subject" value="New Inquiry from CA Website!" />
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" name="email" placeholder="john@company.com" required />
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

                                <button type="submit" className="btn btn-primary submit-btn">Submit Inquiry</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Contact;
