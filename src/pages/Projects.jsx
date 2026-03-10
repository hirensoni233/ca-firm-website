import PageTransition from '../components/PageTransition';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Global E-Commerce Bookkeeping Setup",
            category: "Accounting & Bookkeeping",
            description: "Designed and implemented a multinational chart of accounts in Xero for an expanding retail company, ensuring multi-currency reconciliation and seamless sales tax compliance across 3 continents.",
            techStack: ["Xero", "A2X", "Stripe Integration"],
            image: "finance-dashboard"
        },
        {
            title: "Automated AP/AR Workflow Integration",
            category: "Accounting Automation",
            description: "Built a robust automation pipeline using Python and Make.com to extract invoice data via OCR, push entries to QuickBooks Online, and auto-generate vendor payment schedules.",
            techStack: ["Python", "QBO", "OCR tech", "Make.com"],
            image: "automation-code"
        },
        {
            title: "Dynamic Excel Financial Modeling",
            category: "Financial Reporting",
            description: "Developed a VBA-powered advanced financial model that consolidated data from 5 regional subsidiaries into a single executive dashboard, reducing month-end reporting time from 4 days to 2 hours.",
            techStack: ["Advanced Excel", "VBA", "Power Query"],
            image: "excel-model"
        },
        {
            title: "Corporate Tax Restructuring",
            category: "Taxation Advisory",
            description: "Advised a high-growth tech startup on corporate tax restructuring ahead of a Series B funding round, identifying state tax credits and optimizing entity structure to save $450k annually.",
            techStack: ["Tax Strategy", "Compliance", "Entity Structuring"],
            image: "tax-documents"
        }
    ];

    return (
        <PageTransition>
            <div className="projects-page">
                {/* Page Header */}
                <section className="page-header dark-section">
                    <div className="container">
                        <h1 className="page-title">Projects & Experience</h1>
                        <p className="page-subtitle">A showcase of systems optimized, workflows automated, and businesses elevated.</p>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="section section-bg-light">
                    <div className="container">
                        <div className="portfolio-grid">
                            {projects.map((project, index) => (
                                <div className="portfolio-card glass" key={index}>
                                    <div className={`portfolio-img-placeholder ${project.image}`}>
                                        {/* Placeholder for project images - gradient mapping */}
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="portfolio-category">{project.category}</span>
                                        <h3 className="portfolio-title">{project.title}</h3>
                                        <p className="portfolio-desc">{project.description}</p>

                                        <div className="portfolio-tech">
                                            {project.techStack.map((tech, idx) => (
                                                <span key={idx} className="tech-badge">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="section text-center">
                    <div className="container">
                        <h2>Looking for similar results?</h2>
                        <br />
                        <a href="/contact" className="btn btn-primary">Let's Talk About Your Project</a>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Projects;
