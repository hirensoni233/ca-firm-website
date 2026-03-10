import PageTransition from '../components/PageTransition';
import { FaCheckCircle, FaFileExcel, FaPython, FaBookOpen } from 'react-icons/fa';
import { SiQuickbooks, SiXero } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <PageTransition>
            <div className="about-page">
                {/* Page Header */}
                <section className="page-header dark-section">
                    <div className="container">
                        <h1 className="page-title">About Me</h1>
                        <p className="page-subtitle">Expert in modern accounting and deep financial automation.</p>
                    </div>
                </section>

                {/* Bio Section */}
                <section className="section">
                    <div className="container about-container">
                        <div className="about-image-wrapper">
                            <div className="about-image-standin glass shadow-premium">
                                <FaBookOpen className="standin-icon" />
                                <h3 className="standin-text">Hiren K Soni</h3>
                            </div>
                        </div>

                        <div className="about-content">
                            <h2>Chartered Accountant & <span className="gradient-text">Automation Specialist</span></h2>
                            <div className="divider"></div>

                            <p className="about-p">
                                I am a specialized Chartered Accountant focusing on modernizing the traditional accounting workflows. With extensive experience in bookkeeping, taxation, and financial reporting, I bring clarity and control to your business finances.
                            </p>

                            <p className="about-p">
                                My approach goes beyond standard compliance. I actively build custom Excel-based and Python-driven tools to automate repetitive accounting processes, giving you accurate data in real-time while radically reducing manual overhead.
                            </p>

                            <div className="expertise-grid">
                                <div className="expertise-item">
                                    <FaCheckCircle className="expertise-icon" />
                                    <span>Accounting & Bookkeeping</span>
                                </div>
                                <div className="expertise-item">
                                    <FaCheckCircle className="expertise-icon" />
                                    <span>Financial Reporting & Analysis</span>
                                </div>
                                <div className="expertise-item">
                                    <FaCheckCircle className="expertise-icon" />
                                    <span>Tax Planning & Compliance</span>
                                </div>
                                <div className="expertise-item">
                                    <FaCheckCircle className="expertise-icon" />
                                    <span>Excel-based Automation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Software Expertise */}
                <section className="section section-bg-light">
                    <div className="container text-center">
                        <h2 className="section-title">Software & Technology Proficiency</h2>
                        <p className="section-subtitle">Leveraging the best industry platforms to ensure seamless operations.</p>

                        <div className="tools-grid">
                            <div className="tool-card glass shadow-sm">
                                <SiQuickbooks className="tool-icon qb" />
                                <h3>QuickBooks Online</h3>
                            </div>
                            <div className="tool-card glass shadow-sm">
                                <SiXero className="tool-icon xero" />
                                <h3>Xero</h3>
                            </div>
                            <div className="tool-card glass shadow-sm">
                                <FaFileExcel className="tool-icon excel" />
                                <h3>Advanced Excel</h3>
                            </div>
                            <div className="tool-card glass shadow-sm">
                                <FaPython className="tool-icon python" />
                                <h3>Python Automation</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section text-center">
                    <div className="container">
                        <h2>Let's discuss how we can improve your financial systems</h2>
                        <br />
                        <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default About;
