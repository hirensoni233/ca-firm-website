import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaChartLine, FaFileInvoiceDollar, FaChevronRight, FaRobot, FaNetworkWired, FaServer } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import './Home.css';

// Framer Motion Variants
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Home = () => {
    return (
        <PageTransition>
            <div className="home-page">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-background">
                        {/* Abstract Tech Nodes */}
                        <div className="tech-node node-1"></div>
                        <div className="tech-node node-2"></div>
                        <div className="tech-node node-3"></div>
                    </div>

                    <div className="container hero-content">
                        <motion.div
                            className="hero-text-content"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeUp} className="hero-badge">Hiren K Soni & Co</motion.div>
                            <motion.h1 variants={fadeUp} className="hero-title">
                                Precision Accounting <br />
                                <span className="text-highlight">& Intelligent Automation</span>
                            </motion.h1>
                            <motion.p variants={fadeUp} className="hero-subtitle">
                                Empowering modern businesses with rigorous financial management, strategic tax advisory, and custom reporting automation powered by AI and IT frameworks.
                            </motion.p>
                            <motion.div variants={fadeUp} className="hero-buttons">
                                <Link to="/contact" className="btn-premium primary">Contact Us</Link>
                                <Link to="/services" className="btn-premium secondary">Our Services</Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="home-stats-section">
                    <div className="container">
                        <motion.div
                            className="stats-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeUp} className="stat-item">
                                <h3 className="stat-number">5+</h3>
                                <p className="stat-label">Years of Excellence</p>
                            </motion.div>
                            <motion.div variants={fadeUp} className="stat-item">
                                <h3 className="stat-number">150+</h3>
                                <p className="stat-label">Clients Served</p>
                            </motion.div>
                            <motion.div variants={fadeUp} className="stat-item tech-stat">
                                <h3 className="stat-number">30+</h3>
                                <p className="stat-label">Automations Deployed</p>
                            </motion.div>
                            <motion.div variants={fadeUp} className="stat-item">
                                <h3 className="stat-number">100%</h3>
                                <p className="stat-label">Compliance Focus</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="section intro-section">
                    <div className="container intro-container">
                        <motion.div
                            className="intro-text"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeUp} className="section-title">Elevating Financial Systems through Technology</motion.h2>
                            <motion.div variants={fadeUp} className="divider-left"></motion.div>
                            <motion.p variants={fadeUp} className="intro-p">
                                We go beyond traditional bookkeeping by identifying core bottlenecks in your financial processes. With deep expertise in automated accounting solutions and AI-assisted data processing, we turn hours of manual administrative work into streamlined, real-time insights.
                            </motion.p>
                            <motion.p variants={fadeUp} className="intro-p">
                                Our hybrid approach merges Chartered Accountancy rigor with modern IT infrastructure. This ensures absolute clarity and control over your business finances, allowing you to focus on strategic growth while our algorithms handle the data.
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <Link to="/about" className="link-arrow">Explore My Methodology <FaChevronRight className="arrow-icon" /></Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="intro-image-wrapper"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="professional-card tech-card">
                                <div className="tech-icon-glow">
                                    <FaServer className="tech-icon" />
                                </div>
                                <h3>Data-Driven Strategy</h3>
                                <p>Delivering actionable financial intelligence powered by modern cloud infrastructure and compliance rigor.</p>
                                <div className="card-accent tech-accent"></div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Quick Services Section */}
                <section className="section services-preview-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={fadeUp}
                        >
                            <h2 className="section-title">Core Competencies</h2>
                            <p className="section-subtitle">Scalable, responsive, and highly precise financial IT frameworks.</p>
                        </motion.div>

                        <motion.div
                            className="core-services-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeUp} className="core-service-card">
                                <div className="core-service-icon">
                                    <FaFileInvoiceDollar />
                                </div>
                                <h3>Cloud Accounting</h3>
                                <p>Comprehensive reconciliation, financial reporting, and payroll management leveraging QuickBooks and Xero environments.</p>
                                <Link to="/services" className="core-service-link">View Details</Link>
                            </motion.div>

                            <motion.div variants={fadeUp} className="core-service-card highlight tech-highlight">
                                <div className="core-service-icon">
                                    <FaRobot />
                                </div>
                                <h3>AI & Automation</h3>
                                <p>Custom Python ETL scripts, AI data parsing, and advanced Excel macro workflows tailored to drastically accelerate reporting speed.</p>
                                <Link to="/services" className="core-service-link text-white">Our Services</Link>
                            </motion.div>

                            <motion.div variants={fadeUp} className="core-service-card">
                                <div className="core-service-icon">
                                    <FaChartLine />
                                </div>
                                <h3>Taxation Strategy</h3>
                                <p>Strategic corporate and individual tax planning, ensuring maximal compliance and proactive liability reduction via predictive modeling.</p>
                                <Link to="/services" className="core-service-link">View Details</Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Call To Action */}
                <section className="cta-section">
                    <div className="container cta-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Ready to modernize your financial operations?</h2>
                            <p>Schedule a confidential consultation to explore custom accounting architectures and AI integrations for your organization.</p>
                            <Link to="/contact" className="btn-premium primary cta-btn tech-btn">Contact Us</Link>
                        </motion.div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Home;
