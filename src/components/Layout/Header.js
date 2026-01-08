import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiClock, FiMenu, FiX } from 'react-icons/fi';

const HeaderContainer = styled(motion.header)`
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(220, 38, 38, 0.2);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 200;
  
  @media (max-width: 768px) {
    padding: 1rem;
    z-index: 350;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white);
  position: relative;
  
  &::before {
    content: '✂';
    position: absolute;
    left: -2rem;
    color: var(--accent-red);
    font-size: 1.2rem;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  span {
    background: linear-gradient(135deg, var(--accent-red), var(--accent-gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.2);
  color: var(--white);
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  svg {
    font-size: 1.2rem;
  }
  
  &:active {
    background: rgba(220, 38, 38, 0.2);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-medium);
  font-size: 0.9rem;
  
  svg {
    color: var(--accent-red);
  }
`;

const Header = ({ onMenuToggle, isMobileMenuOpen }) => {
  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <HeaderContent>
        <Logo
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Razor<span>Works</span>
        </Logo>
        
        <ContactInfo>
          <ContactItem
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <FiPhone />
            <span>+375 (29) 123-45-67</span>
          </ContactItem>
          
          <ContactItem
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <FiMapPin />
            <span>пр. Независимости, 25</span>
          </ContactItem>
          
          <ContactItem
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <FiClock />
            <span>9:00 - 21:00</span>
          </ContactItem>
        </ContactInfo>
        
        <MobileMenuButton
          onClick={onMenuToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;