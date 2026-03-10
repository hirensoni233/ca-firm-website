import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Layout;
