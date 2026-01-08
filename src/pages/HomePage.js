import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiScissors, FiStar, FiClock, FiUsers, FiTrendingUp, FiMapPin, FiPhone, FiCheck, FiArrowRight, FiPlus, FiMinus, FiInstagram, FiMessageCircle } from 'react-icons/fi';
import { useBooking } from '../context/BookingContext';

const PageContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: 
    radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, var(--primary-black) 0%, var(--secondary-black) 100%);
  
  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 2rem 0;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  padding: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
    text-align: center;
  }
`;

const HeroContent = styled(motion.div)`
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  
  .highlight {
    color: var(--accent-red);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--accent-red);
      transform: scaleX(0);
      animation: underline 1s ease-out 1s forwards;
    }
  }
  
  @keyframes underline {
    to { transform: scaleX(1); }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--gray-medium);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const HeroFeatures = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--white);
  
  svg {
    color: var(--accent-red);
    font-size: 1.2rem;
  }
`;

const HeroVisual = styled(motion.div)`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VisualCard = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 120px;
  background: rgba(26, 26, 26, 0.9);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  
  &:nth-child(1) {
    top: 50px;
    left: 20px;
    transform: rotate(-5deg);
  }
  
  &:nth-child(2) {
    top: 150px;
    right: 30px;
    transform: rotate(8deg);
  }
  
  &:nth-child(3) {
    bottom: 100px;
    left: 50px;
    transform: rotate(3deg);
  }
`;

const CardIcon = styled.div`
  color: var(--accent-red);
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const CardText = styled.div`
  color: var(--white);
  font-size: 0.9rem;
  font-weight: 600;
`;

const ServicesPreview = styled.section`
  padding: 5rem 2rem;
  background: var(--secondary-black);
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--white);
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const SectionSubtitle = styled.p`
  color: var(--gray-medium);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
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

const ServiceCard = styled(motion.div)`
  background: rgba(10, 10, 10, 0.5);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-red);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent-red), var(--light-red));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: var(--white);
`;

const ServiceName = styled.h3`
  color: var(--white);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const ServicePrice = styled.div`
  color: var(--accent-red);
  font-weight: 600;
  font-size: 1.1rem;
`;

const StatsSection = styled.section`
  padding: 4rem 2rem;
  background: var(--primary-black);
  position: relative;
`;

const StatsGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(26, 26, 26, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(220, 38, 38, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent-red);
    transform: scaleX(0);
    transition: transform 0.6s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  color: var(--accent-red);
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const StatLabel = styled.p`
  color: var(--gray-medium);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const WhyChooseSection = styled.section`
  padding: 5rem 2rem;
  background: var(--secondary-black);
`;

const WhyChooseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const WhyChooseCard = styled(motion.div)`
  padding: 2rem;
  background: rgba(10, 10, 10, 0.3);
  border-radius: 12px;
  border-left: 4px solid var(--accent-red);
`;

const WhyChooseIcon = styled.div`
  color: var(--accent-red);
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const WhyChooseTitle = styled.h3`
  color: var(--white);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const WhyChooseText = styled.p`
  color: var(--gray-medium);
  line-height: 1.5;
`;

const LocationSection = styled.section`
  padding: 5rem 2rem;
  background: var(--primary-black);
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LocationContent = styled(motion.div)``;

const LocationTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--white);
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
`;

const LocationText = styled.p`
  color: var(--gray-medium);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const LocationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LocationDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--white);
  
  svg {
    color: var(--accent-red);
    font-size: 1.2rem;
  }
`;

const LocationMap = styled(motion.div)`
  height: 400px;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(220, 38, 38, 0.05) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--accent-red);
  border: 2px solid rgba(220, 38, 38, 0.2);
  position: relative;
  overflow: hidden;
`;

const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background: var(--primary-black);
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: var(--accent-red);
    font-family: serif;
  }
`;

const TestimonialText = styled.p`
  color: var(--gray-medium);
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--accent-red), var(--light-red));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: 600;
  font-size: 1.2rem;
  border: 2px solid var(--accent-red);
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  color: var(--white);
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

const AuthorRole = styled.div`
  color: var(--gray-medium);
  font-size: 0.9rem;
`;

const WorkingHoursSection = styled.section`
  padding: 4rem 2rem;
  background: var(--secondary-black);
`;

const WorkingHoursGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const WorkingHoursContent = styled(motion.div)``;

const WorkingHoursTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--white);
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
`;

const WorkingHoursText = styled.p`
  color: var(--gray-medium);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const HoursTable = styled.div`
  background: rgba(10, 10, 10, 0.3);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(220, 38, 38, 0.2);
`;

const HoursRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(220, 38, 38, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const DayName = styled.span`
  color: var(--white);
  font-weight: 500;
`;

const HoursTime = styled.span`
  color: var(--accent-red);
  font-weight: 600;
`;

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: var(--primary-black);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-red);
    transform: translateY(-5px);
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent-red), var(--light-red));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: var(--white);
`;

const ContactTitle = styled.h3`
  color: var(--white);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const ContactInfo = styled.div`
  color: var(--gray-medium);
  line-height: 1.5;
  white-space: pre-line;
`;

const TeamSection = styled.section`
  padding: 5rem 2rem;
  background: var(--secondary-black);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamCard = styled(motion.div)`
  background: rgba(10, 10, 10, 0.5);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-red);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const MasterAvatar = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--accent-red), var(--light-red));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 2rem;
  color: var(--white);
  font-weight: 600;
  border: 3px solid var(--accent-red);
`;

const MasterName = styled.h3`
  color: var(--white);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const MasterSpecialty = styled.p`
  color: var(--accent-red);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const MasterExperience = styled.p`
  color: var(--gray-medium);
  font-size: 0.9rem;
`;

const ProcessSection = styled.section`
  padding: 5rem 2rem;
  background: var(--primary-black);
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 40px;
    right: -1rem;
    width: 2rem;
    height: 2px;
    background: var(--accent-red);
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--accent-red), var(--light-red));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  color: var(--white);
  font-weight: 700;
`;

const StepTitle = styled.h3`
  color: var(--white);
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const StepDescription = styled.p`
  color: var(--gray-medium);
  line-height: 1.5;
`;

const OffersSection = styled.section`
  padding: 5rem 2rem;
  background: var(--secondary-black);
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const OfferCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%);
  border: 2px solid var(--accent-red);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    transition: all 0.6s ease;
    opacity: 0;
  }
  
  &:hover::before {
    opacity: 1;
    animation: shine 0.6s ease-in-out;
  }
  
  @keyframes shine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
`;

const OfferBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--accent-red);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const OfferTitle = styled.h3`
  color: var(--white);
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const OfferDescription = styled.p`
  color: var(--gray-medium);
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const OfferPrice = styled.div`
  color: var(--accent-red);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const OfferOldPrice = styled.span`
  color: var(--gray-medium);
  text-decoration: line-through;
  font-size: 1rem;
  margin-left: 0.5rem;
`;

const FAQSection = styled.section`
  padding: 5rem 2rem;
  background: var(--secondary-black);
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  background: rgba(10, 10, 10, 0.3);
  border-radius: 12px;
  border: 1px solid rgba(220, 38, 38, 0.2);
  overflow: hidden;
`;

const FAQQuestion = styled.div`
  padding: 1.5rem 2rem;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(220, 38, 38, 0.1);
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 2rem 1.5rem;
  color: var(--gray-medium);
  line-height: 1.6;
`;

const FAQIcon = styled(motion.div)`
  color: var(--accent-red);
  font-size: 1.2rem;
`;

const HeroButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent-red), var(--light-red));
  color: var(--white);
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
  }
`;

const SocialSection = styled.section`
  padding: 4rem 2rem;
  background: var(--primary-black);
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-red);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const SocialIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent-red), var(--light-red));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: var(--white);
`;

const SocialTitle = styled.h3`
  color: var(--white);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const SocialDescription = styled.p`
  color: var(--gray-medium);
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const SocialButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: var(--accent-red);
  border: 2px solid var(--accent-red);
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent-red);
    color: var(--white);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--accent-red);
  border-radius: 50%;
  opacity: 0.1;
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, var(--accent-red) 0%, var(--dark-red) 100%);
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  color: var(--white);
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const CTAText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--white);
  color: var(--accent-red);
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const stats = [
  { icon: FiUsers, number: '1.2K+', label: 'Клиентов' },
  { icon: FiStar, number: '4.8', label: 'Рейтинг' },
  { icon: FiTrendingUp, number: '96%', label: 'Довольных' },
  { icon: FiClock, number: '3', label: 'Года работы' }
];

const features = [
  { icon: FiScissors, text: 'Профессиональные мастера' },
  { icon: FiStar, text: 'Премиум обслуживание' },
  { icon: FiClock, text: 'Удобная запись онлайн' }
];

const topServices = [
  { icon: FiScissors, name: 'Мужская стрижка', price: '35 BYN' },
  { icon: FiUsers, name: 'Моделирование бороды', price: '25 BYN' },
  { icon: FiStar, name: 'VIP комплекс', price: '80 BYN' }
];

const whyChooseUs = [
  {
    icon: FiCheck,
    title: 'Опытные мастера',
    text: 'Наши специалисты имеют многолетний опыт и регулярно повышают квалификацию'
  },
  {
    icon: FiStar,
    title: 'Качественные материалы',
    text: 'Используем только проверенные инструменты и европейскую косметику'
  },
  {
    icon: FiClock,
    title: 'Удобное время работы',
    text: 'Работаем каждый день с 9:00 до 21:00 без выходных'
  },
  {
    icon: FiMapPin,
    title: 'Центр Минска',
    text: 'Удобное расположение в самом центре города рядом с метро'
  }
];

const testimonials = [
  {
    text: 'Отличный барбершоп! Мастера настоящие профессионалы, всегда получаю именно то, что хочу. Атмосфера супер, обязательно вернусь еще.',
    author: 'Александр М.',
    role: 'Постоянный клиент',
    avatar: 'А'
  },
  {
    text: 'Лучшее место в Минске для мужской стрижки. Качество на высоте, цены адекватные. Особенно нравится внимание к деталям.',
    author: 'Дмитрий К.',
    role: 'Клиент',
    avatar: 'Д'
  },
  {
    text: 'Хожу сюда уже полгода, всегда доволен результатом. Мастера понимают, что нужно, даже если сам не можешь объяснить.',
    author: 'Максим П.',
    role: 'Постоянный клиент',
    avatar: 'М'
  }
];

const workingHours = [
  { day: 'Понедельник', hours: '9:00 - 21:00' },
  { day: 'Вторник', hours: '9:00 - 21:00' },
  { day: 'Среда', hours: '9:00 - 21:00' },
  { day: 'Четверг', hours: '9:00 - 21:00' },
  { day: 'Пятница', hours: '9:00 - 21:00' },
  { day: 'Суббота', hours: '9:00 - 21:00' },
  { day: 'Воскресенье', hours: '10:00 - 20:00' }
];

const contactMethods = [
  {
    icon: FiPhone,
    title: 'Телефон',
    info: '+375 (29) 123-45-67\n+375 (33) 987-65-43'
  },
  {
    icon: FiMapPin,
    title: 'Адрес',
    info: 'пр. Независимости, 25\nМинск, Беларусь'
  },
  {
    icon: FiClock,
    title: 'Режим работы',
    info: 'Пн-Сб: 9:00 - 21:00\nВс: 10:00 - 20:00'
  }
];

const teamMembers = [
  {
    name: 'Александр Петров',
    specialty: 'Старший мастер',
    experience: 'Опыт работы 8 лет',
    avatar: 'АП'
  },
  {
    name: 'Дмитрий Козлов',
    specialty: 'Барбер-стилист',
    experience: 'Опыт работы 5 лет',
    avatar: 'ДК'
  },
  {
    name: 'Максим Волков',
    specialty: 'Мастер-универсал',
    experience: 'Опыт работы 6 лет',
    avatar: 'МВ'
  }
];

const processSteps = [
  {
    number: '1',
    title: 'Консультация',
    description: 'Обсуждаем ваши пожелания и подбираем оптимальный стиль'
  },
  {
    number: '2',
    title: 'Подготовка',
    description: 'Готовим инструменты и рабочее место для комфортной процедуры'
  },
  {
    number: '3',
    title: 'Стрижка',
    description: 'Выполняем стрижку с учетом всех ваших пожеланий'
  },
  {
    number: '4',
    title: 'Финиш',
    description: 'Укладка, стайлинг и финальные штрихи для идеального результата'
  }
];

const specialOffers = [
  {
    title: 'Первое посещение',
    description: 'Скидка 15% на любую услугу для новых клиентов',
    price: '30 BYN',
    oldPrice: '35 BYN',
    badge: '-15%'
  },
  {
    title: 'Комплекс "Стиль"',
    description: 'Стрижка + борода + укладка в одном пакете',
    price: '65 BYN',
    oldPrice: '80 BYN',
    badge: 'ХИТ'
  },
  {
    title: 'Студенческая скидка',
    description: 'Специальная цена для студентов при предъявлении студенческого',
    price: '25 BYN',
    oldPrice: '35 BYN',
    badge: '-30%'
  }
];

const faqData = [
  {
    question: 'Нужно ли записываться заранее?',
    answer: 'Да, мы работаем по предварительной записи. Это позволяет нам уделить каждому клиенту максимум внимания и избежать очередей.'
  },
  {
    question: 'Сколько времени занимает стрижка?',
    answer: 'Обычная мужская стрижка занимает 30-45 минут. Комплексные услуги (стрижка + борода + укладка) могут занять до 1.5 часов.'
  },
  {
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем наличные, банковские карты и бесконтактные платежи. Также доступна оплата через мобильные приложения.'
  },
  {
    question: 'Можно ли отменить или перенести запись?',
    answer: 'Да, вы можете отменить или перенести запись не позднее чем за 2 часа до назначенного времени, позвонив нам или написав в мессенджер.'
  },
  {
    question: 'Есть ли у вас парковка?',
    answer: 'Рядом с барбершопом есть платная парковка. Также в шаговой доступности находится станция метро "Площадь Независимости".'
  }
];

const socialNetworks = [
  {
    icon: FiInstagram,
    title: 'Instagram',
    description: 'Следите за нашими работами и новостями в Instagram',
    handle: '@razorworks_minsk'
  },
  {
    icon: FiMessageCircle,
    title: 'Telegram',
    description: 'Быстрая запись и консультации в нашем Telegram боте',
    handle: '@razorworks_bot'
  },
  {
    icon: FiPhone,
    title: 'Viber',
    description: 'Связывайтесь с нами через Viber для записи и вопросов',
    handle: '+375 (29) 123-45-67'
  }
];

const HomePage = () => {
  const { dispatch } = useBooking();
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleBookingClick = () => {
    dispatch({ type: 'TOGGLE_BOOKING' });
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <PageContainer>
      <HeroSection>
        <FloatingElements>
          <FloatingElement
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '20%', left: '10%' }}
          />
          <FloatingElement
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '60%', right: '15%' }}
          />
          <FloatingElement
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ bottom: '30%', left: '20%' }}
          />
        </FloatingElements>
        
        <HeroGrid>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Стиль это <span className="highlight">искусство</span>
            </HeroTitle>
            
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Мы создаем не просто стрижки — мы создаем образы, которые подчеркивают вашу индивидуальность
            </HeroSubtitle>
            
            <HeroFeatures
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <Feature key={index}>
                  <feature.icon />
                  <span>{feature.text}</span>
                </Feature>
              ))}
            </HeroFeatures>
            
            <HeroButton
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookingClick}
            >
              Записаться на стрижку
              <FiArrowRight />
            </HeroButton>
          </HeroContent>
          
          <HeroVisual>
            <VisualCard
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -5 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <CardIcon><FiScissors /></CardIcon>
              <CardText>Мастерская стрижка</CardText>
            </VisualCard>
            
            <VisualCard
              initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <CardIcon><FiStar /></CardIcon>
              <CardText>Премиум качество</CardText>
            </VisualCard>
            
            <VisualCard
              initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <CardIcon><FiUsers /></CardIcon>
              <CardText>Опытные мастера</CardText>
            </VisualCard>
          </HeroVisual>
        </HeroGrid>
      </HeroSection>

      <ServicesPreview>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Популярные услуги</SectionTitle>
            <SectionSubtitle>
              Самые востребованные услуги нашего барбершопа
            </SectionSubtitle>
          </SectionHeader>
          
          <ServicesGrid>
            {topServices.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceIcon>
                  <service.icon />
                </ServiceIcon>
                <ServiceName>{service.name}</ServiceName>
                <ServicePrice>{service.price}</ServicePrice>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </SectionContainer>
      </ServicesPreview>

      <StatsSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Наши достижения</SectionTitle>
            <SectionSubtitle>
              Цифры, которые говорят о нашем профессионализме
            </SectionSubtitle>
          </SectionHeader>
          
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </SectionContainer>
      </StatsSection>

      <WhyChooseSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Почему выбирают нас</SectionTitle>
            <SectionSubtitle>
              Что делает RazorWorks особенным местом для ухода за собой
            </SectionSubtitle>
          </SectionHeader>
          
          <WhyChooseGrid>
            {whyChooseUs.map((item, index) => (
              <WhyChooseCard
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <WhyChooseIcon>
                  <item.icon />
                </WhyChooseIcon>
                <WhyChooseTitle>{item.title}</WhyChooseTitle>
                <WhyChooseText>{item.text}</WhyChooseText>
              </WhyChooseCard>
            ))}
          </WhyChooseGrid>
        </SectionContainer>
      </WhyChooseSection>

      <TeamSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Наша команда</SectionTitle>
            <SectionSubtitle>
              Познакомьтесь с нашими талантливыми мастерами
            </SectionSubtitle>
          </SectionHeader>
          
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MasterAvatar>{member.avatar}</MasterAvatar>
                <MasterName>{member.name}</MasterName>
                <MasterSpecialty>{member.specialty}</MasterSpecialty>
                <MasterExperience>{member.experience}</MasterExperience>
              </TeamCard>
            ))}
          </TeamGrid>
        </SectionContainer>
      </TeamSection>

      <ProcessSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Как мы работаем</SectionTitle>
            <SectionSubtitle>
              Простой и понятный процесс создания вашего идеального образа
            </SectionSubtitle>
          </SectionHeader>
          
          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessGrid>
        </SectionContainer>
      </ProcessSection>

      <OffersSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Специальные предложения</SectionTitle>
            <SectionSubtitle>
              Выгодные акции и скидки для наших клиентов
            </SectionSubtitle>
          </SectionHeader>
          
          <OffersGrid>
            {specialOffers.map((offer, index) => (
              <OfferCard
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <OfferBadge>{offer.badge}</OfferBadge>
                <OfferTitle>{offer.title}</OfferTitle>
                <OfferDescription>{offer.description}</OfferDescription>
                <OfferPrice>
                  {offer.price}
                  <OfferOldPrice>{offer.oldPrice}</OfferOldPrice>
                </OfferPrice>
              </OfferCard>
            ))}
          </OffersGrid>
        </SectionContainer>
      </OffersSection>

      <LocationSection>
        <SectionContainer>
          <LocationGrid>
            <LocationContent
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <LocationTitle>Найти нас легко</LocationTitle>
              <LocationText>
                Мы находимся в самом сердце Минска на проспекте Независимости. 
                Удобное расположение рядом с метро делает нас доступными из любой точки города.
              </LocationText>
              
              <LocationDetails>
                <LocationDetail>
                  <FiMapPin />
                  <span>пр. Независимости, 25</span>
                </LocationDetail>
                <LocationDetail>
                  <FiPhone />
                  <span>+375 (29) 123-45-67</span>
                </LocationDetail>
                <LocationDetail>
                  <FiClock />
                  <span>Ежедневно 9:00 - 21:00</span>
                </LocationDetail>
              </LocationDetails>
            </LocationContent>
            
            <LocationMap
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FiMapPin />
            </LocationMap>
          </LocationGrid>
        </SectionContainer>
      </LocationSection>

      <TestimonialsSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Отзывы клиентов</SectionTitle>
            <SectionSubtitle>
              Что говорят о нас наши постоянные клиенты
            </SectionSubtitle>
          </SectionHeader>
          
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar>{testimonial.avatar}</AuthorAvatar>
                  <AuthorInfo>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </SectionContainer>
      </TestimonialsSection>

      <WorkingHoursSection>
        <SectionContainer>
          <WorkingHoursGrid>
            <WorkingHoursContent
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <WorkingHoursTitle>Режим работы</WorkingHoursTitle>
              <WorkingHoursText>
                Мы работаем каждый день, чтобы вы всегда могли выглядеть на все сто. 
                Удобное время работы позволяет записаться как в будни, так и в выходные.
              </WorkingHoursText>
            </WorkingHoursContent>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <HoursTable>
                {workingHours.map((schedule, index) => (
                  <HoursRow key={index}>
                    <DayName>{schedule.day}</DayName>
                    <HoursTime>{schedule.hours}</HoursTime>
                  </HoursRow>
                ))}
              </HoursTable>
            </motion.div>
          </WorkingHoursGrid>
        </SectionContainer>
      </WorkingHoursSection>

      <ContactSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Свяжитесь с нами</SectionTitle>
            <SectionSubtitle>
              Несколько способов связаться с нами для записи или консультации
            </SectionSubtitle>
          </SectionHeader>
          
          <ContactGrid>
            {contactMethods.map((contact, index) => (
              <ContactCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ContactIcon>
                  <contact.icon />
                </ContactIcon>
                <ContactTitle>{contact.title}</ContactTitle>
                <ContactInfo>{contact.info}</ContactInfo>
              </ContactCard>
            ))}
          </ContactGrid>
        </SectionContainer>
      </ContactSection>

      <FAQSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Часто задаваемые вопросы</SectionTitle>
            <SectionSubtitle>
              Ответы на самые популярные вопросы наших клиентов
            </SectionSubtitle>
          </SectionHeader>
          
          <FAQContainer>
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FAQQuestion onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <FAQIcon
                    animate={{ rotate: openFAQ === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFAQ === index ? <FiMinus /> : <FiPlus />}
                  </FAQIcon>
                </FAQQuestion>
                <FAQAnswer
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  {openFAQ === index && <div>{faq.answer}</div>}
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQContainer>
        </SectionContainer>
      </FAQSection>

      <SocialSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Мы в социальных сетях</SectionTitle>
            <SectionSubtitle>
              Подписывайтесь на наши аккаунты и будьте в курсе всех новостей
            </SectionSubtitle>
          </SectionHeader>
          
          <SocialGrid>
            {socialNetworks.map((social, index) => (
              <SocialCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SocialIcon>
                  <social.icon />
                </SocialIcon>
                <SocialTitle>{social.title}</SocialTitle>
                <SocialDescription>{social.description}</SocialDescription>
                <SocialButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.handle}
                </SocialButton>
              </SocialCard>
            ))}
          </SocialGrid>
        </SectionContainer>
      </SocialSection>

      <CTASection>
        <SectionContainer>
          <CTATitle>Готовы к новому образу?</CTATitle>
          <CTAText>
            Запишитесь прямо сейчас и получите скидку 10% на первое посещение
          </CTAText>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookingClick}
          >
            Записаться сейчас
            <FiArrowRight />
          </CTAButton>
        </SectionContainer>
      </CTASection>
    </PageContainer>
  );
};

export default HomePage;