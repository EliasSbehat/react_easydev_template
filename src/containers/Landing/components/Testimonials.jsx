/* eslint-disable max-len */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import StarIcon from 'mdi-react/StarIcon';
import {
  Card, CardBody,
} from '@/shared/components/Card';
import { landingAccentColor } from '@/utils/palette';
import { LandingContainer, LandingSection } from '../BasicLandingElements';

const Stars = () => (
  <Fragment>
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarIcon />
  </Fragment>
);

const Testimonials = () => (
  <LandingSection>
    <LandingContainer>
      <TestimonialHeaderWrap>
        <h2 className="animate-on-scroll">Our users love us</h2>
        <HeaderStars>
          <Stars />
        </HeaderStars>
      </TestimonialHeaderWrap>
      <TestimonialsWrap>
        <TestimonialLink
          href="https://themeforest.net/item/easypro-developer-friendly-react-bootstrap-4-admin-template/reviews/21798550"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <LandingTestimonial>
              <LandingTestimonialName className="animate-on-scroll">by Malsher</LandingTestimonialName>
              <LandingTestimonialsStars>
                <Stars />
              </LandingTestimonialsStars>
              <LandingTestimonialReview className="animate-on-scroll">
                We have used many themes on many projects but none
                that have been so easy to work with. The design has delighted our customer and the code is easy
                to work with. This is the best theme we have used so far.
              </LandingTestimonialReview>
            </LandingTestimonial>
          </Card>
        </TestimonialLink>
        <TestimonialLink
          href="https://themeforest.net/item/easypro-developer-friendly-react-bootstrap-4-admin-template/reviews/21798550"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <LandingTestimonial>
              <LandingTestimonialName className="animate-on-scroll">by wibgyor</LandingTestimonialName>
              <LandingTestimonialsStars>
                <Stars />
              </LandingTestimonialsStars>
              <LandingTestimonialReview className="animate-on-scroll">
                The components have been deigned well, which is enabling us to customize it quickly.
              </LandingTestimonialReview>
            </LandingTestimonial>
          </Card>
        </TestimonialLink>
        <TestimonialLink
          href="https://themeforest.net/item/easypro-developer-friendly-react-bootstrap-4-admin-template/reviews/21798550"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <LandingTestimonial>
              <LandingTestimonialName className="animate-on-scroll">by jd4ever</LandingTestimonialName>
              <LandingTestimonialsStars>
                <Stars />
              </LandingTestimonialsStars>
              <LandingTestimonialReview className="animate-on-scroll">
                {`I'm very happy with this purchase. This is a single-page
                react app through and through. Clean code and easy to work with`}
              </LandingTestimonialReview>
            </LandingTestimonial>
          </Card>
        </TestimonialLink>
      </TestimonialsWrap>
    </LandingContainer>
  </LandingSection>
);

export default Testimonials;

// region STYLES

const TestimonialHeaderWrap = styled.div`
  margin-bottom: 40px;
  
  h2 {
    max-width: 200px;
  }
  
  h2 * {
    text-align: center !important;
  }
  
  @media screen and (min-width: 576px) {
    margin-bottom: 96px;

    h2 {
      min-width: auto;
    }
  }
`;

const TestimonialsWrap = styled.div`
  display: flex;
  gap: 30px;
  overflow: auto;
  width: 100%;

  &::-webkit-scrollbar {
    height: 5px;
    background: #16161C;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(139.48deg, #FB9E48 6.99%, #D84B43 53.88%, #971F49 99.96%);
  }
`;

const TestimonialLink = styled.a`
  display: block;
  width: 100%;
  min-width: 260px;
`;

const LandingTestimonial = styled(CardBody)`
  padding: 20px 30px 30px;
  background-color: transparent !important;
  border: 1px solid #DDDDDD;
  border-radius: 16px;
`;

const LandingTestimonialName = styled.p`
  color: ${landingAccentColor};
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

const LandingTestimonialsStars = styled.div`
  margin-bottom: 18px;
  display: flex;
  gap: 5px;

  svg {
    fill: #FFC107;
    height: 16px;
    width: 16px;
  }
`;

const HeaderStars = styled(LandingTestimonialsStars)`
  margin-top: 8px;
  margin-bottom: 0;
  justify-content: center;
  gap: 8px;
  
  svg {
    height: 24px;
    width: 24px;
  }
`;

const LandingTestimonialReview = styled.p`
  color: #DDDDDD;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  margin: 0;
`;

// endregion
