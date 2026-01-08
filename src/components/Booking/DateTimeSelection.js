import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import { ru } from 'date-fns/locale';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useBooking } from '../../context/BookingContext';
import { timeSlots } from '../../data/services';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CalendarSection = styled.div``;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const MonthTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NavButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--gray-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    border-color: var(--accent-red);
    color: var(--white);
  }
  
  &:active {
    background: rgba(220, 38, 38, 0.2);
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const WeekdayHeader = styled.div`
  background: var(--secondary-black);
  padding: 0.8rem 0.5rem;
  text-align: center;
  font-size: 0.75rem;
  color: var(--gray-medium);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DateCell = styled(motion.div)`
  background: ${props => props.isCurrentMonth ? 'var(--primary-black)' : 'rgba(26, 26, 26, 0.3)'};
  padding: 1rem 0.5rem;
  text-align: center;
  cursor: ${props => props.isCurrentMonth ? 'pointer' : 'default'};
  position: relative;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${props => props.selected && `
    background: var(--accent-red);
    color: var(--white);
  `}
  
  ${props => props.isCurrentMonth && !props.selected && `
    &:hover {
      background: rgba(220, 38, 38, 0.2);
    }
  `}
`;

const DateNumber = styled.div`
  font-size: 0.9rem;
  color: ${props => props.isCurrentMonth ? 'var(--white)' : 'var(--gray-dark)'};
  font-weight: ${props => props.selected ? '600' : '400'};
`;

const TimeSection = styled.div`
  ${props => !props.show && 'display: none;'}
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  color: var(--white);
  margin-bottom: 1rem;
`;

const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
  max-height: 200px;
  overflow-y: auto;
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
    max-height: 180px;
  }
`;

const TimeSlot = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid ${props => props.selected ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 6px;
  padding: 0.8rem 0.5rem;
  cursor: pointer;
  text-align: center;
  color: var(--white);
  font-size: 0.85rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-red);
    background: rgba(26, 26, 26, 0.9);
  }
  
  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.1);
      background: rgba(26, 26, 26, 0.8);
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 0.3rem;
    font-size: 0.8rem;
  }
`;

const weekdays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

const DateTimeSelection = () => {
  const { state, dispatch } = useBooking();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  
  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd
  });

  const handleDateSelect = (date) => {
    if (!isSameMonth(date, currentMonth)) return;
    dispatch({ type: 'SELECT_DATE', payload: date });
  };

  const handleTimeSelect = (time) => {
    dispatch({ type: 'SELECT_TIME', payload: time });
  };

  const isTimeAvailable = (time) => {
    return Math.random() > 0.3;
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  return (
    <Container>
      <CalendarSection>
        <CalendarHeader>
          <NavButton
            onClick={() => navigateMonth(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft />
          </NavButton>
          
          <MonthTitle>
            {format(currentMonth, 'LLLL yyyy', { locale: ru }).toUpperCase()}
          </MonthTitle>
          
          <NavButton
            onClick={() => navigateMonth(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight />
          </NavButton>
        </CalendarHeader>

        <CalendarGrid>
          {weekdays.map(day => (
            <WeekdayHeader key={day}>{day}</WeekdayHeader>
          ))}
          
          {calendarDays.map((date, index) => {
            const isCurrentMonth = isSameMonth(date, currentMonth);
            const isSelected = state.selectedDate && isSameDay(date, state.selectedDate);
            
            return (
              <DateCell
                key={index}
                isCurrentMonth={isCurrentMonth}
                selected={isSelected}
                onClick={() => handleDateSelect(date)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.01 }}
                whileHover={isCurrentMonth ? { scale: 1.05 } : {}}
              >
                <DateNumber isCurrentMonth={isCurrentMonth} selected={isSelected}>
                  {format(date, 'd')}
                </DateNumber>
              </DateCell>
            );
          })}
        </CalendarGrid>
      </CalendarSection>

      <TimeSection show={state.selectedDate}>
        <SectionTitle>Выберите время</SectionTitle>
        <TimeGrid>
          {timeSlots.map((time, index) => {
            const available = isTimeAvailable(time);
            return (
              <TimeSlot
                key={time}
                selected={state.selectedTime === time}
                className={!available ? 'disabled' : ''}
                onClick={() => available && handleTimeSelect(time)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                whileHover={available ? { scale: 1.05 } : {}}
                whileTap={available ? { scale: 0.95 } : {}}
              >
                {time}
              </TimeSlot>
            );
          })}
        </TimeGrid>
      </TimeSection>
    </Container>
  );
};

export default DateTimeSelection;