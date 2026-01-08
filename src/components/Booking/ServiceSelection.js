import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiClock, FiInfo, FiScissors, FiUser, FiShield, FiHeart, FiAward, FiZap } from 'react-icons/fi';
import { useBooking } from '../../context/BookingContext';
import { services } from '../../data/services';

const getServiceIcon = (iconType) => {
  const iconMap = {
    'scissors': FiScissors,
    'user': FiUser,
    'shield': FiShield,
    'heart': FiHeart,
    'award': FiAward,
    'zap': FiZap
  };
  
  const IconComponent = iconMap[iconType] || FiScissors;
  return <IconComponent />;
};

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid ${props => props.selected ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 1rem;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    border-color: var(--accent-red);
    background: rgba(26, 26, 26, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem;
    
    &:hover {
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  color: var(--accent-red);
`;

const ServiceInfo = styled.div`
  flex: 1;
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.3rem;
`;

const ServiceName = styled.h3`
  font-size: 1rem;
  color: var(--white);
  margin: 0;
`;

const InfoButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--gray-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  
  &:hover {
    background: rgba(220, 38, 38, 0.2);
    color: var(--white);
  }
`;

const ServiceDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--gray-medium);
`;

const ServicePrice = styled.div`
  color: var(--white);
  font-weight: 600;
`;

const ServiceDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  
  svg {
    font-size: 0.8rem;
  }
`;

const ServiceSelection = () => {
  const { state, dispatch } = useBooking();

  const selectService = (service) => {
    dispatch({ type: 'SELECT_SERVICE', payload: service });
  };

  return (
    <ServiceList>
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          selected={state.selectedService?.id === service.id}
          onClick={() => selectService(service)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.05,
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          }}
          whileHover={{ 
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <ServiceIcon>{getServiceIcon(service.icon)}</ServiceIcon>
          <ServiceInfo>
            <ServiceHeader>
              <ServiceName>{service.name}</ServiceName>
              <InfoButton>
                <FiInfo />
              </InfoButton>
            </ServiceHeader>
            <ServiceDetails>
              <ServicePrice>{service.price} BYN</ServicePrice>
              <ServiceDuration>
                <FiClock />
                <span>{service.duration} мин</span>
              </ServiceDuration>
            </ServiceDetails>
          </ServiceInfo>
        </ServiceCard>
      ))}
    </ServiceList>
  );
};

export default ServiceSelection;