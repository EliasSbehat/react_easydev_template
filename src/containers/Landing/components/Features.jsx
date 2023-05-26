import React from 'react';
import styled from 'styled-components';
import {
  LandingButton,
  LandingSection,
  LandingContainer,
} from '../BasicLandingElements';

const feat01 = `${process.env.PUBLIC_URL}/img/landing/features/feat01.svg`;
const feat02 = `${process.env.PUBLIC_URL}/img/landing/features/feat02.svg`;
const feat03 = `${process.env.PUBLIC_URL}/img/landing/features/feat03.svg`;
const feat04 = `${process.env.PUBLIC_URL}/img/landing/features/feat04.svg`;
const feat05 = `${process.env.PUBLIC_URL}/img/landing/features/feat05.svg`;
const feat06 = `${process.env.PUBLIC_URL}/img/landing/features/feat06.svg`;
const feat07 = `${process.env.PUBLIC_URL}/img/landing/features/feat07.svg`;
const feat08 = `${process.env.PUBLIC_URL}/img/landing/features/feat08.svg`;
const feat09 = `${process.env.PUBLIC_URL}/img/landing/features/feat09.svg`;
const feat10 = `${process.env.PUBLIC_URL}/img/landing/features/feat10.svg`;
const feat11 = `${process.env.PUBLIC_URL}/img/landing/features/feat11.svg`;
const feat12 = `${process.env.PUBLIC_URL}/img/landing/features/feat12.svg`;

const Features = () => (
  <LandingSection>
    <LandingFeatureContainer>
      <LandingFeatureTitle className="animate-on-scroll">Top features for your next project</LandingFeatureTitle>
      <LandingFeaturesWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat01} />
          <h3 className="animate-on-scroll">Prebuilt Dashboards and fully functional Crypto Dashboard</h3>
        </LandingFeatureWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat02} />
          <h3 className="animate-on-scroll">Hand-picked libraries for your project</h3>
        </LandingFeatureWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat03} />
          <h3 className="animate-on-scroll">Full responsiveness</h3>
        </LandingFeatureWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat04} />
          <h3 className="animate-on-scroll">Metamask Integration</h3>
        </LandingFeatureWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat05} />
          <h3 className="animate-on-scroll">Numerous styled components and pages</h3>
        </LandingFeatureWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat06} />
          <h3 className="animate-on-scroll">All might of React Tables library</h3>
        </LandingFeatureWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat07} />
          <h3 className="animate-on-scroll">Dark & Light Styles</h3>
        </LandingFeatureWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat08} />
          <h3 className="animate-on-scroll">Clean and professional code</h3>
        </LandingFeatureWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat09} />
          <h3 className="animate-on-scroll">Fully functional Authorizations</h3>
        </LandingFeatureWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat10} />
          <h3 className="animate-on-scroll">Multilingual and RTL</h3>
        </LandingFeatureWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat11} />
          <h3 className="animate-on-scroll">React-Hot-Loader</h3>
        </LandingFeatureWrap>
        <LandingFeatureWrap>
          <LandingFeatureImage src={feat12} />
          <h3 className="animate-on-scroll">Pre-built seed projects</h3>
        </LandingFeatureWrap>
      </LandingFeaturesWrap>
      <LandingFeaturesAdditionalTitle className="animate-on-scroll">
        And detailed documentation to make it easy
      </LandingFeaturesAdditionalTitle>
      <LandingButton>Check demo</LandingButton>
    </LandingFeatureContainer>
  </LandingSection>
);

export default Features;

// region STYLES

const LandingFeatureContainer = styled(LandingContainer)`
  padding: 0 16px;
`;

const LandingFeatureTitle = styled.h2`
  text-align: center;
  margin-bottom: 90px;
`;

const LandingFeaturesAdditionalTitle = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;

const LandingFeaturesWrap = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 32px) calc(50% - 32px);
  max-width: 784px;
  min-width: 768px;
  width: 100%;
  margin-bottom: 92px;
  gap: 64px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: calc(50% - 26px) calc(50% - 26px);
    gap: 64px 51px;
    max-width: 100%;
    min-width: 0px;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 100%;
    margin-bottom: 64px;
    gap: 24px;
  }
`;

const LandingFeatureWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 992px) {
    gap: 24px;
  }
  
  @media screen and (min-width: 992px) {
    gap: 36px;
  }
`;

const LandingFeatureImage = styled.img`
  height: 60px;
  width: auto;
`;

// endregion
