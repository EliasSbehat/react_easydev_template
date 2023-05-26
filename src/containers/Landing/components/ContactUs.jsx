import React from 'react';
import styled from 'styled-components';
import {
  LandingContainer,
  LandingSection,
} from '../BasicLandingElements';
import { landingGreenColor } from '../../../utils/palette';
import { ReactComponent as Background } from './images/contact_bg.svg';

const cup = `${process.env.PUBLIC_URL}/img/landing/cup.png`;

const ContactUs = () => (
  <LandingSection>
    <ContactBackground />
    <LandingContainer>
      <ContentWrap>
        <TextContent>
          <h2 className="animate-on-scroll">Have a project<br />to make?</h2>
          <p className="animate-on-scroll">
            We have teams for hire able to make your idea happen. <br /> Contact us to discuss the details.
          </p>
          <p className="animate-on-scroll"><MailLink href="mailto:hi@aspirity.com">hi@aspirity.com</MailLink></p>
          <p className="animate-on-scroll">
            Check more info and our portfolio here: <a href="www.aspirity.com">www.aspirity.com</a>
          </p>
        </TextContent>
        <StyledCup src={cup} />
      </ContentWrap>
    </LandingContainer>
  </LandingSection>
);

export default ContactUs;

// region STYLES

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const MailLink = styled.a`
  color: white !important;
  text-decoration: underline;
  font-size: 22px;
  transition: 0.3s;
  
  &:hover {
    color: ${landingGreenColor} !important;
  }
`;

const TextContent = styled.div`
  flex-shrink: 0;
  max-width: 368px;
  margin-right: 32px;
  
  & > * {
    margin-bottom: 32px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 31px;
  }
  
  a {
    color: ${landingGreenColor};
    font-weight: 700;
  }
`;

const StyledCup = styled.img`
  width: 100%;
  max-width: 320px;
  margin: 32px auto 0;
  transform: translateX(20px);
  object-fit: contain;
  animation: ease-in-out float-left 4s infinite;
  
  @media screen and (min-width: 576px) {
    max-width: 580px;
    margin: 0;
  }
`;

const ContactBackground = styled(Background)`
  position: absolute;
  top: 50%;
  left: 0;
  width: 80%;
  transform: translateY(-50%);
`;

// endregion
