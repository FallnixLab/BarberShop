import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import MastersPage from './pages/MastersPage';
import ContactPage from './pages/ContactPage';
import { useBooking } from './context/BookingContext';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--primary-black) 0%, var(--secondary-black) 100%);
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 280px;
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 0;
`;

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useBooking();

  useEffect(() => {
    if (isMobileMenuOpen || state.isBookingOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, state.isBookingOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <AppContainer>
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        onMobileMenuClose={closeMobileMenu}
      />
      <MainContent>
        <Header 
          onMenuToggle={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <ContentArea>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/masters" element={<MastersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </ContentArea>
        <Footer />
      </MainContent>
    </AppContainer>
  );
}

export default App;