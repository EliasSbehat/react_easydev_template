import React from 'react';
import styled from 'styled-components';
import {
  LandingContainer,
  LandingSection,
} from '../BasicLandingElements';
import { ReactComponent as LargeTable } from './images/bestpractices_desktop.svg';
import { ReactComponent as MediumTable } from './images/bestpractices_tablet.svg';
import { ReactComponent as SmallTable } from './images/bestpractices_mobile.svg';

const background = `${process.env.PUBLIC_URL}/img/landing/technologies/background.png`;

const Technologies = () => (
  <LandingSection>
    <LandingTechnologiesBackground src={background} />
    <LandingContainer>
      <LandingTitleWrap>
        <h1 className="animate-on-scroll">Best practices</h1>
        <h3 className="animate-on-scroll">
          EasyDev is based on the popular and powerful technological stack that
          allows you to create modern projects easily.
        </h3>
      </LandingTitleWrap>
      <SmallTechnologiesTable />
      <MediumTechnologiesTable />
      <LargeTechnologiesTable />
    </LandingContainer>
  </LandingSection>
);

export default Technologies;

// region STYLES

const LandingTechnologiesBackground = styled.img`
  position: absolute;
  height: 1656px;
  width: 60%;
  z-index: -1;
`;

const LandingTitleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin-bottom: 40px;

  h3 {
    max-width: 560px;
  }

  @media (min-width: 576px) {
    flex-wrap: nowrap;
    margin-bottom: 128px;
  }
`;

const SmallTechnologiesTable = styled(SmallTable)`
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MediumTechnologiesTable = styled(MediumTable)`
  display: none;

  @media (min-width: 768px) {
    width: 100%;
    display: block;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const LargeTechnologiesTable = styled(LargeTable)`
  display: none;

  @media (min-width: 1024px) {
    width: 100%;
    display: block;
  }
`;

// endregion
