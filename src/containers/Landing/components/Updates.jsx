import React, { Fragment } from 'react';
import styled from 'styled-components';
import { landingGreenColor, colorWhite } from '@/utils/palette';
import { NavLink } from 'react-router-dom';
import {
  LandingSection,
  LandingContainer,
  LandingButton,
} from '../BasicLandingElements';

import data from '../../Documentation/11_changelog/components/changelog_data.json';

const Updates = () => (
  <LandingSection>
    <UpdatesContainer>
      <h1 className="animate-on-scroll">
        The latest <br /> updates
      </h1>
      <UpdatesWrap>
        {data.slice(0, 3).map(version => (
          <UpdateWrap key={version.version}>
            <h2 className="animate-on-scroll">v{version.version}</h2>
            <UpdateDate className="animate-on-scroll">{version.date}</UpdateDate>
            <p className="animate-on-scroll">
              {version.changes.map(change => (
                <Fragment key={`${version.version} ${change.name}`}>
                  {change.name}<br />
                </Fragment>
              ))}
            </p>
          </UpdateWrap>
        ))}
      </UpdatesWrap>
      <UpdateButton as={NavLink} to="/documentation/changelog">Have a look</UpdateButton>
    </UpdatesContainer>
  </LandingSection>
);

export default Updates;

// region STYLES

const UpdateButton = styled(LandingButton)`
  
  @media screen and (min-width: 992px) {
    margin-left: 200px;
  }
`;

const UpdatesContainer = styled(LandingContainer)`
  align-items: flex-start;
`;

const UpdatesWrap = styled.div`
  display: flex;
  gap: 64px;
  margin-top: 36px;
  margin-bottom: 40px;
  white-space: nowrap;
  width: 100%;
  overflow: auto;
  padding-bottom: 16px;

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
  
  @media screen and (min-width: 576px) {
    margin-top: 96px;
    margin-bottom: 80px;
  }
  
  @media screen and (min-width: 992px) {
    padding-left: 200px;
  }
`;

const UpdateWrap = styled.div`
  font-size: 16px;
  color: ${colorWhite};
  line-height: 30px;
  width: 100%;

  @media screen and (max-width: 576px) {
    width: fit-content;

    & p {
      width: fit-content;
      
      div {
        overflow: unset !important;
      }
    }
  }
`;

const UpdateDate = styled.p`
  margin-top: 36px;
  font-size: 13px;
  font-weight: 500;
  color: ${landingGreenColor} !important;
  margin-bottom: 8px;
`;
// endregion
