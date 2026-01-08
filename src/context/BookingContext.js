import { createContext, useContext, useReducer } from 'react';

const BookingContext = createContext();

const initialState = {
  step: 1,
  selectedService: null,
  selectedMaster: null,
  selectedDate: null,
  selectedTime: null,
  clientInfo: {
    name: '',
    phone: '',
    email: ''
  },
  isBookingOpen: false
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'SELECT_SERVICE':
      return { ...state, selectedService: action.payload, step: 2 };
    case 'SELECT_MASTER':
      return { ...state, selectedMaster: action.payload, step: 3 };
    case 'SELECT_DATE':
      return { ...state, selectedDate: action.payload };
    case 'SELECT_TIME':
      return { ...state, selectedTime: action.payload, step: 4 };
    case 'SET_CLIENT_INFO':
      return { ...state, clientInfo: { ...state.clientInfo, ...action.payload } };
    case 'TOGGLE_BOOKING':
      return { ...state, isBookingOpen: !state.isBookingOpen };
    case 'RESET_BOOKING':
      return { ...initialState, isBookingOpen: state.isBookingOpen };
    case 'COMPLETE_BOOKING':
      return { ...initialState, isBookingOpen: false };
    default:
      return state;
  }
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};