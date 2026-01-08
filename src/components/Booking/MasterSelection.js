import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { useBooking } from '../../context/BookingContext';
import { masters } from '../../data/services';

const MasterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const MasterCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid ${props => props.selected ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    border-color: var(--accent-red);
    background: rgba(26, 26, 26, 0.9);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
    
    &:hover {
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`;

const MasterPhoto = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-red), var(--light-red));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.8rem;
  border: 2px solid ${props => props.selected ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.2)'};
`;

const MasterName = styled.h3`
  font-size: 0.95rem;
  color: var(--white);
  margin-bottom: 0.3rem;
`;

const MasterRank = styled.p`
  color: ${props => {
    switch(props.rank) {
      case 'SSS-rank': return '#FFD700';
      case 'S-rank': return '#FF6B6B';
      case 'A-rank': return '#4ECDC4';
      case 'B-rank': return '#45B7D1';
      default: return 'var(--gray-medium)';
    }
  }};
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const MasterRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--gray-medium);
  font-size: 0.8rem;
  
  svg {
    color: #FFD700;
    font-size: 0.9rem;
  }
`;

const MasterSelection = () => {
  const { state, dispatch } = useBooking();

  const selectMaster = (master) => {
    dispatch({ type: 'SELECT_MASTER', payload: master });
  };

  return (
    <MasterGrid>
      {masters.map((master, index) => (
        <MasterCard
          key={master.id}
          selected={state.selectedMaster?.id === master.id}
          onClick={() => selectMaster(master)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.05,
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          }}
          whileHover={{ 
            y: -3,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <MasterPhoto 
            selected={state.selectedMaster?.id === master.id}
          >
            {master.name.split(' ').map(n => n[0]).join('')}
          </MasterPhoto>
          <MasterName>{master.name}</MasterName>
          <MasterRank rank={master.specialization}>{master.specialization}</MasterRank>
          <MasterRating>
            <FiStar />
            <span>{master.rating}</span>
          </MasterRating>
        </MasterCard>
      ))}
    </MasterGrid>
  );
};

export default MasterSelection;