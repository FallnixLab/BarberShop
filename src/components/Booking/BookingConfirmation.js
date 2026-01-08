import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--white);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: var(--accent-red);
    background: rgba(26, 26, 26, 0.9);
  }
  
  &::placeholder {
    color: var(--gray-medium);
  }
`;

const InfoText = styled.p`
  color: var(--gray-medium);
  font-size: 0.85rem;
  line-height: 1.4;
  margin-top: 1rem;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, var(--accent-red) 0%, var(--light-red) 100%);
  color: var(--white);
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1.5rem;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
  }
`;

const BookingConfirmation = () => {
  const { state, dispatch } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    dispatch({ type: 'SET_CLIENT_INFO', payload: { [field]: value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Запись успешно создана! Мы свяжемся с Вами по телефону +375 (29) 123-45-67 для подтверждения.');
    
    dispatch({ type: 'COMPLETE_BOOKING' });
    setIsSubmitting(false);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Укажите Ваше Имя"
              value={state.clientInfo.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </InputWrapper>
        </FormGroup>

        <InfoText>
          * Данная информация необходима мастеру для связи с Вами и подтверждения записи.
        </InfoText>
        
        <SubmitButton
          type="submit"
          disabled={!state.clientInfo.name || isSubmitting}
          whileHover={{ scale: (state.clientInfo.name && !isSubmitting) ? 1.02 : 1 }}
          whileTap={{ scale: (state.clientInfo.name && !isSubmitting) ? 0.98 : 1 }}
        >
          {isSubmitting ? 'Отправка...' : 'Подтвердить запись'}
        </SubmitButton>
      </form>
    </Container>
  );
};

export default BookingConfirmation;