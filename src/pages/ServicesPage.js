import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiClock, FiScissors, FiUser, FiShield, FiHeart, FiAward, FiZap } from 'react-icons/fi';
import { services } from '../data/services';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: var(--primary-black);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: left;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--white);
  margin-bottom: 0.5rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  color: var(--gray-medium);
  font-size: 1.1rem;
  line-height: 1.5;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.active ? 'var(--accent-red)' : 'transparent'};
  color: ${props => props.active ? 'var(--white)' : 'var(--gray-medium)'};
  border: 1px solid ${props => props.active ? 'var(--accent-red)' : 'var(--gray-dark)'};
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--accent-red);
    color: var(--white);
  }
`;

const ServicesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ServiceItem = styled(motion.div)`
  background: var(--secondary-black);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    border-color: var(--accent-red);
    background: rgba(26, 26, 26, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.2rem;
    gap: 0.8rem;
    
    &:hover {
      transform: translateY(-1px);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(229, 62, 62, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-red);
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ServiceContent = styled.div`
  flex: 1;
`;

const ServiceName = styled.h3`
  font-size: 1.1rem;
  color: var(--white);
  margin-bottom: 0.3rem;
  font-weight: 500;
`;

const ServiceDescription = styled.p`
  color: var(--gray-medium);
  font-size: 0.9rem;
  line-height: 1.4;
`;

const ServiceMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
`;

const ServicePrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white);
`;

const ServiceDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--gray-medium);
  font-size: 0.8rem;
  
  svg {
    font-size: 0.7rem;
  }
`;

const BookingNote = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(229, 62, 62, 0.05);
  border-left: 3px solid var(--accent-red);
  border-radius: 4px;
  color: var(--gray-medium);
  font-size: 0.9rem;
`;

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

const ServicesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredServices = services.filter(service => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'popular') return [1, 2, 6].includes(service.id);
    if (activeFilter === 'premium') return [2, 5].includes(service.id);
    return true;
  });

  return (
    <PageContainer>
      <Header>
        <Title>Услуги</Title>
        <Subtitle>
          Качественные стрижки и уход в центре Минска. Работаем только с проверенными инструментами и европейской косметикой.
        </Subtitle>
      </Header>

      <FilterButtons>
        <FilterButton 
          active={activeFilter === 'all'} 
          onClick={() => setActiveFilter('all')}
        >
          Все
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'popular'} 
          onClick={() => setActiveFilter('popular')}
        >
          Популярные
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'premium'} 
          onClick={() => setActiveFilter('premium')}
        >
          Премиум
        </FilterButton>
      </FilterButtons>

      <ServicesContainer>
        <ServicesList>
          {filteredServices.map((service, index) => (
            <ServiceItem
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              <ServiceIcon>
                {getServiceIcon(service.icon)}
              </ServiceIcon>
              
              <ServiceContent>
                <ServiceName>{service.name}</ServiceName>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceContent>
              
              <ServiceMeta>
                <ServicePrice>{service.price} BYN</ServicePrice>
                <ServiceDuration>
                  <FiClock />
                  {service.duration} мин
                </ServiceDuration>
              </ServiceMeta>
            </ServiceItem>
          ))}
        </ServicesList>

        <BookingNote>
          Для записи используйте кнопку "Записаться на стрижку" в боковой панели
        </BookingNote>
      </ServicesContainer>
    </PageContainer>
  );
};

export default ServicesPage;