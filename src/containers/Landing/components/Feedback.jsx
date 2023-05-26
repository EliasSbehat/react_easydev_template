import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { landingAccentColor } from '@/utils/palette';
import { LandingButton, LandingContainer } from '../BasicLandingElements';

const background = `${process.env.PUBLIC_URL}/img/landing/design_code_bg.png`;
const designAndCodeImg = `${process.env.PUBLIC_URL}/img/landing/design_and_code.svg`;
const macbookImg = `${process.env.PUBLIC_URL}/img/landing/feedback_macbook.png`;

const Feedback = () => (
  <LandingFeedbackWrap>
    <LandingContainer>
      <Row>
        <Col md={12}>
          <LandingFeedbackTitle><b>Hey guys!</b></LandingFeedbackTitle>
          <LandingFeedbackSubhead>
            We are glad to offer you the EasyDev customization from light modernization to a super-custom
            development according to your project. Please, contact us via <b>biz@aspirity.com</b> to discuss our
            work or just press the button below.
          </LandingFeedbackSubhead>
          <LandingFeedbackForm>
            <LandingFeedbackButton
              href="https://bit.ly/3tk0rr1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Let{'\''}s work!
            </LandingFeedbackButton>
          </LandingFeedbackForm>
          <LandingFeedbackDesignImage src={designAndCodeImg} alt="design and code" />
          <LandingFeedbackMackbookImage src={macbookImg} alt="macbook" />
        </Col>
      </Row>
    </LandingContainer>
  </LandingFeedbackWrap>
);

export default Feedback;

// region STYLES

const LandingFeedbackWrap = styled.div`
  margin-top: -260px;
  padding-top: 395px;
  padding-bottom: 340px;
  text-align: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media screen and (min-width: 1200px) {
    padding-top: 430px;
  }
`;

const LandingFeedbackTitle = styled.h2`
  max-width: 680px;
  line-height: normal;
  color: ${landingAccentColor};
  margin: auto auto 50px;
`;

const LandingFeedbackForm = styled.div`
  margin-bottom: 20px;
`;

const LandingFeedbackDesignImage = styled.img`
  max-width: 900px;
  margin-bottom: 30px;
`;

const LandingFeedbackMackbookImage = styled.img`
  transform: translateX(11%);
`;

const LandingFeedbackSubhead = styled.p`
  color: ${landingAccentColor};
  font-size: 25px;
  line-height: 49px;
  max-width: 1090px;
  margin: 0 auto 70px auto;
`;

const LandingFeedbackButton = styled(LandingButton)`
  display: inline-block;
  width: 100%;
  max-width: 174px;
  height: 50px;
  padding: 16px 30px;
  font-family: 'Poppins', sans-serif;
  line-height: 20px;
  background: linear-gradient(139.48deg, #FEA63E 6.99%, #F03131 53.88%, #ED05AC 99.96%);
  color: #fff;
  box-shadow: none;

  &:hover {
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.12), 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

// endregion
