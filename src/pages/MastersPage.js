import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiStar, FiAward } from 'react-icons/fi';
import { masters } from '../data/services';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: var(--primary-black);
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3.5rem;
  color: var(--white);
  text-align: center;
  margin-bottom: 1rem;
  
  span {
    color: var(--accent-red);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--gray-medium);
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const MastersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const MasterCard = styled(motion.div)`
  background: linear-gradient(135deg, var(--secondary-black) 0%, rgba(26, 26, 26, 0.8) 100%);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-red) 0%, var(--light-red) 100%);
  }
  
  &:hover {
    border-color: var(--accent-red);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(220, 38, 38, 0.2);
  }
`;

const MasterAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-red), var(--light-red));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--white);
  margin: 0 auto 1.5rem;
  border: 4px solid rgba(220, 38, 38, 0.3);
`;

const MasterName = styled.h3`
  font-size: 1.5rem;
  color: var(--white);
  margin-bottom: 0.5rem;
`;

const MasterSpecialization = styled.p`
  color: var(--accent-red);
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const MasterDescription = styled.p`
  color: var(--gray-medium);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 0.95rem;
`;

const MasterStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const StatIcon = styled.div`
  color: var(--accent-red);
  font-size: 1.5rem;
`;

const StatValue = styled.div`
  color: var(--white);
  font-weight: 600;
  font-size: 1.1rem;
`;

const StatLabel = styled.div`
  color: var(--gray-medium);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MasterNote = styled.div`
  text-align: center;
  color: var(--gray-medium);
  font-size: 0.85rem;
  font-style: italic;
  padding: 0.8rem;
  border-top: 1px solid rgba(220, 38, 38, 0.2);
  margin-top: 1rem;
`;

const MastersPage = () => {
  return (
    <PageContainer>
      <Container>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Наши <span>мастера</span>
        </PageTitle>
        
        <PageSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Профессионалы своего дела с многолетним опытом работы в Минске
        </PageSubtitle>

        <MastersGrid>
          {masters.map((master, index) => (
            <MasterCard
              key={master.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <MasterAvatar>
                {master.name.split(' ').map(n => n[0]).join('')}
              </MasterAvatar>
              
              <MasterName>{master.name}</MasterName>
              <MasterSpecialization>{master.specialization}</MasterSpecialization>
              <MasterDescription>{master.description}</MasterDescription>
              
              <MasterStats>
                <Stat>
                  <StatIcon><FiStar /></StatIcon>
                  <StatValue>{master.rating}</StatValue>
                  <StatLabel>Рейтинг</StatLabel>
                </Stat>
                <Stat>
                  <StatIcon><FiAward /></StatIcon>
                  <StatValue>{master.experience}</StatValue>
                  <StatLabel>Лет опыта</StatLabel>
                </Stat>
              </MasterStats>
              
              <MasterNote>
                Запись через боковую панель
              </MasterNote>
            </MasterCard>
          ))}
        </MastersGrid>
      </Container>
    </PageContainer>
  );
};

export default MastersPage;