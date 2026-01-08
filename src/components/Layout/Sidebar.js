import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FiHome, FiScissors, FiUsers, FiPhone, FiCalendar } from 'react-icons/fi';
import { useBooking } from '../../context/BookingContext';
import BookingPanel from '../Booking/BookingPanel';

const SidebarContainer = styled(motion.aside)`
  width: 280px;
  background: linear-gradient(180deg, var(--secondary-black) 0%, var(--primary-black) 100%);
  border-right: 1px solid rgba(220, 38, 38, 0.2);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 300;
    box-shadow: ${props => props.isOpen ? '10px 0 30px rgba(0, 0, 0, 0.3)' : 'none'};
    padding-top: env(safe-area-inset-top, 0);
  }
  
  @media (min-width: 769px) {
    transform: translateX(0);
    position: fixed;
  }
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 250;
  backdrop-filter: blur(4px);
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const BookingButton = styled(motion.button)`
  margin: 2rem 2rem 1rem 2rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent-red) 0%, var(--dark-red) 100%);
  color: var(--white);
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(229, 62, 62, 0.3);
  -webkit-tap-highlight-color: transparent;
  position: relative;
  z-index: 10;
  cursor: pointer;
  border: none;
  outline: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(229, 62, 62, 0.4);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(229, 62, 62, 0.4);
  }
  
  @media (max-width: 768px) {
    margin: 6rem 1rem 1rem 1rem;
    padding: 1.2rem 1.5rem;
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    margin: 7rem 1rem 1rem 1rem;
    padding: 1.3rem 1.5rem;
    font-size: 1.1rem;
  }
  
  svg {
    flex-shrink: 0;
  }
`;

const Navigation = styled.nav`
  padding: 1rem 0 2rem 0;
  flex: 1;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  color: var(--gray-medium);
  transition: all 0.3s ease;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    color: var(--white);
    background: rgba(220, 38, 38, 0.1);
  }
  
  &:active {
    background: rgba(220, 38, 38, 0.2);
  }
  
  &.active {
    color: var(--white);
    background: rgba(220, 38, 38, 0.2);
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: var(--accent-red);
    }
  }
  
  svg {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
    font-size: 1.1rem;
    
    svg {
      font-size: 1.3rem;
    }
  }
`;

const BookingOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 280px;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 400;
  
  @media (max-width: 768px) {
    left: 0;
  }
`;

const navItems = [
  { path: '/', icon: FiHome, label: 'Главная' },
  { path: '/services', icon: FiScissors, label: 'Услуги' },
  { path: '/masters', icon: FiUsers, label: 'Мастера' },
  { path: '/contact', icon: FiPhone, label: 'Контакты' }
];

const Sidebar = ({ isMobileMenuOpen, onMobileMenuClose }) => {
  const { state, dispatch } = useBooking();

  const toggleBooking = () => {
    dispatch({ type: 'TOGGLE_BOOKING' });
    if (onMobileMenuClose) {
      onMobileMenuClose();
    }
  };

  const handleNavClick = () => {
    if (onMobileMenuClose) onMobileMenuClose();
  };

  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileOverlay 
            isOpen={isMobileMenuOpen} 
            onClick={onMobileMenuClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      
      <SidebarContainer
        isOpen={isMobileMenuOpen}
      >
        <BookingButton
          onClick={toggleBooking}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ 
            visibility: 'visible',
            opacity: 1,
            pointerEvents: 'auto'
          }}
        >
          <FiCalendar />
          Записаться на стрижку
        </BookingButton>
        
        <Navigation>
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.path}>
                <StyledNavLink to={item.path} onClick={handleNavClick}>
                  <item.icon />
                  <span>{item.label}</span>
                </StyledNavLink>
              </NavItem>
            ))}
          </NavList>
        </Navigation>
      </SidebarContainer>

      <AnimatePresence>
        {state.isBookingOpen && (
          <>
            <BookingOverlay
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              onClick={toggleBooking}
            />
            <BookingPanel />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;