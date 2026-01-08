import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiX, FiArrowLeft } from 'react-icons/fi';
import { useBooking } from '../../context/BookingContext';
import ServiceSelection from './ServiceSelection';
import MasterSelection from './MasterSelection';
import DateTimeSelection from './DateTimeSelection';
import BookingConfirmation from './BookingConfirmation';

const PanelContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: linear-gradient(180deg, var(--secondary-black) 0%, var(--primary-black) 100%);
  border-left: 1px solid rgba(220, 38, 38, 0.2);
  z-index: 500;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    width: 100vw;
    border-left: none;
  }
`;

const PanelHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid rgba(220, 38, 38, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const BackButton = styled(motion.button)`
  color: var(--gray-medium);
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-tap-highlight-color: transparent;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--white);
    background: rgba(220, 38, 38, 0.1);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
    background: rgba(220, 38, 38, 0.2);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const CloseButton = styled(motion.button)`
  color: var(--gray-medium);
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: auto;
  -webkit-tap-highlight-color: transparent;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--white);
    background: rgba(220, 38, 38, 0.1);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
    background: rgba(220, 38, 38, 0.2);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const PanelTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--white);
  flex: 1;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const PanelContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const StepIndicator = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Step = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? 'var(--accent-red)' : 'var(--gray-dark)'};
  transition: all 0.3s ease;
`;

const stepTitles = {
  1: 'Шаг 1: Выбор услуги',
  2: 'Шаг 2: Выбор мастера',
  3: 'Шаг 3: Выбор даты и времени',
  4: 'Шаг 4: Подтверждение записи'
};

const BookingPanel = () => {
  const { state, dispatch } = useBooking();

  const closeBooking = () => {
    dispatch({ type: 'TOGGLE_BOOKING' });
    dispatch({ type: 'RESET_BOOKING' });
  };

  const goBack = () => {
    if (state.step > 1) {
      dispatch({ type: 'SET_STEP', payload: state.step - 1 });
    }
  };

  const renderStepContent = () => {
    switch (state.step) {
      case 1:
        return <ServiceSelection />;
      case 2:
        return <MasterSelection />;
      case 3:
        return <DateTimeSelection />;
      case 4:
        return <BookingConfirmation />;
      default:
        return <ServiceSelection />;
    }
  };

  return (
    <PanelContainer
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.4, 0, 0.2, 1],
        opacity: { duration: 0.3 }
      }}
    >
      <PanelHeader>
        {state.step > 1 && (
          <BackButton
            onClick={goBack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <FiArrowLeft />
          </BackButton>
        )}
        
        <PanelTitle>{stepTitles[state.step]}</PanelTitle>
        
        <CloseButton
          onClick={closeBooking}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <FiX />
        </CloseButton>
      </PanelHeader>
      
      <PanelContent>
        <StepIndicator>
          {[1, 2, 3, 4].map(step => (
            <Step key={step} active={step <= state.step} />
          ))}
        </StepIndicator>
        
        {renderStepContent()}
      </PanelContent>
    </PanelContainer>
  );
};

export default BookingPanel;