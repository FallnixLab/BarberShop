import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiClock, FiMail, FiInstagram, FiMessageCircle } from 'react-icons/fi';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: linear-gradient(135deg, var(--secondary-black) 0%, rgba(26, 26, 26, 0.8) 100%);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  &:hover {
    border-color: var(--accent-red);
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(220, 38, 38, 0.2);
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-red), var(--light-red));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--white);
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactTitle = styled.h3`
  color: var(--white);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  color: var(--gray-medium);
  line-height: 1.5;
`;

const MapSection = styled(motion.div)`
  background: linear-gradient(135deg, var(--secondary-black) 0%, rgba(26, 26, 26, 0.8) 100%);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  padding: 2rem;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--accent-red) 0%, var(--light-red) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  color: var(--white);
  font-size: 3rem;
`;

const MapText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

const SocialSection = styled(motion.div)`
  margin-top: 4rem;
  text-align: center;
`;

const SocialTitle = styled.h2`
  font-size: 2rem;
  color: var(--white);
  margin-bottom: 2rem;
  
  span {
    color: var(--accent-red);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--secondary-black) 0%, rgba(26, 26, 26, 0.8) 100%);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 50px;
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-red);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(220, 38, 38, 0.3);
  }
  
  svg {
    color: var(--accent-red);
    font-size: 1.2rem;
  }
`;

const contactInfo = [
  {
    icon: FiPhone,
    title: 'Телефон',
    text: '+375 (29) 123-45-67\nЗвоните с 9:00 до 21:00'
  },
  {
    icon: FiMapPin,
    title: 'Адрес',
    text: 'пр. Независимости, 25\nЦентр Минска, рядом с метро'
  },
  {
    icon: FiClock,
    title: 'Режим работы',
    text: 'Пн-Вс: 9:00 - 21:00\nБез выходных'
  },
  {
    icon: FiMail,
    title: 'Email',
    text: 'info@razorworks.by\nОтвечаем в течение часа'
  }
];

const socialLinks = [
  { icon: FiInstagram, label: 'Instagram', href: '#' },
  { icon: FiMessageCircle, label: 'WhatsApp', href: '#' },
  { icon: FiPhone, label: 'Telegram', href: '#' }
];

const ContactPage = () => {
  return (
    <PageContainer>
      <Container>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>Контакты</span>
        </PageTitle>
        
        <PageSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Свяжитесь с нами удобным способом или приходите в наш барбершоп
        </PageSubtitle>

        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {contactInfo.map((contact, index) => (
              <ContactCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <ContactIcon>
                  <contact.icon />
                </ContactIcon>
                <ContactDetails>
                  <ContactTitle>{contact.title}</ContactTitle>
                  <ContactText>{contact.text}</ContactText>
                </ContactDetails>
              </ContactCard>
            ))}
          </ContactInfo>

          <MapSection
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MapPlaceholder>
              <FiMapPin />
              <MapText>Интерактивная карта</MapText>
            </MapPlaceholder>
          </MapSection>
        </ContactGrid>

        <SocialSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <SocialTitle>
            Мы в <span>социальных сетях</span>
          </SocialTitle>
          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialLink
                key={index}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
                <span>{social.label}</span>
              </SocialLink>
            ))}
          </SocialLinks>
        </SocialSection>
      </Container>
    </PageContainer>
  );
};

export default ContactPage;