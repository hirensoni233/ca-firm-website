import PageTransition from '../components/PageTransition';
import { FaFileInvoiceDollar, FaLaptopCode, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    return (
        <PageTransition>
            <div className="services-page">
                {/* Page Header */}
                <section className="page-header dark-section custom-header">
                    <div className="container text-center">
                        <h1 className="page-title">Professional Services</h1>
                        <p className="page-subtitle">Scalable frameworks for accounting, taxation, and advanced automation.</p>
                    </div>
                </section>

                <section className="section services-main-section">
                    <div className="container">
                        <div className="services-showcase">

                            {/* Service 1 */}
                            <div className="service-premium-card">
                                <div className="service-card-visual">
                                    <FaFileInvoiceDollar className="massive-icon" />
                                    <div className="visual-glow"></div>
                                </div>
                                <div className="service-card-content">
                                    <h2>Accounting & Bookkeeping</h2>
                                    <div className="divider-left"></div>
                                    <p>
                                        Professional bookkeeping and accounting services designed to maintain rigorously accurate financial records. I handle everything from day-to-day transaction coding to complex end-of-month reconciliations and final financial reporting.
                                    </p>
                                    <ul className="premium-service-list">
                                        <li><FaCheckCircle className="check-icon" /> Real-time transaction processing & bank reconciliation</li>
                                        <li><FaCheckCircle className="check-icon" /> Accounts Payable & Receivable management</li>
                                        <li><FaCheckCircle className="check-icon" /> Comprehensive monthly and year-end reporting</li>
                                        <li><FaCheckCircle className="check-icon" /> Budgeting and variance analysis</li>
                                    </ul>
                                    <div className="software-tags">
                                        <span className="software-tag">QuickBooks Online</span>
                                        <span className="software-tag">Xero</span>
                                    </div>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="service-premium-card reverse">
                                <div className="service-card-content">
                                    <h2>Accounting Automation</h2>
                                    <div className="divider-left"></div>
                                    <p>
                                        Automation is the future of finance. I specialize in identifying bottlenecks in your accounting processes and building custom software solutions that eliminate repetitive manual entries, mitigate risk, and accelerate reporting speed.
                                    </p>
                                    <ul className="premium-service-list">
                                        <li><FaCheckCircle className="check-icon" /> Automated financial report generation</li>
                                        <li><FaCheckCircle className="check-icon" /> Advanced Excel macro & Power Query</li>
                                        <li><FaCheckCircle className="check-icon" /> Python scripts for ETL</li>
                                        <li><FaCheckCircle className="check-icon" /> Custom workflow integrations</li>
                                    </ul>
                                    <div className="software-tags">
                                        <span className="software-tag">Microsoft Excel</span>
                                        <span className="software-tag">Python</span>
                                        <span className="software-tag">Zapier / Make</span>
                                    </div>
                                </div>
                                <div className="service-card-visual">
                                    <FaLaptopCode className="massive-icon" />
                                    <div className="visual-glow"></div>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="service-premium-card">
                                <div className="service-card-visual">
                                    <FaChartLine className="massive-icon" />
                                    <div className="visual-glow"></div>
                                </div>
                                <div className="service-card-content">
                                    <h2>Taxation Services</h2>
                                    <div className="divider-left"></div>
                                    <p>
                                        Navigating the complex landscape of tax regulations requires precision and foresight. I provide comprehensive taxation services to ensure absolute compliance while aggressively pursuing strategic tax reduction opportunities within the bounds of the law.
                                    </p>
                                    <ul className="premium-service-list">
                                        <li><FaCheckCircle className="check-icon" /> Individual and High-Net-Worth taxation</li>
                                        <li><FaCheckCircle className="check-icon" /> Corporate and Partnership firm taxation</li>
                                        <li><FaCheckCircle className="check-icon" /> Expatriate and International tax advisory</li>
                                        <li><FaCheckCircle className="check-icon" /> Regulatory compliance & proactive planning</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Services;
