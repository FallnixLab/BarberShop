import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiHeart, FiExternalLink } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: var(--secondary-black);
  border-top: 1px solid rgba(220, 38, 38, 0.2);
  padding: 2rem 0;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
    margin-top: 2rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 1rem;
  }
`;

const PortfolioSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: rgba(10, 10, 10, 0.5);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-red);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(220, 38, 38, 0.2);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem 1.5rem;
    gap: 0.8rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--accent-red), var(--light-red));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--white);
  font-weight: 700;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const CompanyName = styled.h3`
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`;

const CompanyDescription = styled.p`
  color: var(--gray-medium);
  font-size: 0.85rem;
  margin: 0;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  text-align: center;
`;

const ProjectTitle = styled.div`
  color: var(--white);
  font-size: 0.95rem;
  font-weight: 500;
`;

const ProjectDescription = styled.div`
  color: var(--gray-medium);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;

const LinkButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  color: var(--accent-red);
  border: 1px solid var(--accent-red);
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent-red);
    color: var(--white);
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  color: var(--gray-medium);
  font-size: 0.8rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <PortfolioSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <LogoSection>
            <Logo>FL</Logo>
            <CompanyInfo>
              <CompanyName>FallnixLab</CompanyName>
              <CompanyDescription>Web Development Studio</CompanyDescription>
            </CompanyInfo>
          </LogoSection>
          
          <ProjectInfo>
            <ProjectTitle>Проект для портфолио</ProjectTitle>
            <ProjectDescription>
              <FiCode />
              <span>Разработано с</span>
              <FiHeart style={{ color: 'var(--accent-red)' }} />
              <span>в FallnixLab</span>
            </ProjectDescription>
          </ProjectInfo>
          
          <LinkButton
            href="https://fallnixlab.ru"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Посетить сайт</span>
            <FiExternalLink />
          </LinkButton>
        </PortfolioSection>
        
        <CopyrightSection>
          <p>© 2026 RazorWorks Barbershop. Все права защищены. | Разработано FallnixLab</p>
        </CopyrightSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;