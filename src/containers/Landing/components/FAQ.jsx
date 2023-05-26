import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import {
  LandingContainer,
  LandingSection,
} from '../BasicLandingElements';
import { ReactComponent as Background } from './images/faq_bg.svg';

import data from './faq-data.json';

const FAQ = () => (
  <LandingSection>
    <FAQBackground />
    <LandingContainer>
      <h2 className="animate-on-scroll">FAQ</h2>
      <FaqTable>
        <tbody>
          {data.map((item, index) => (
            <FaqRow key={item.question}>
              <td>{`${index + 1 < 10 ? 0 : ''}${index + 1}`}</td>
              <td><span className="animate-on-scroll">{item.question}</span></td>
              <td><span className="animate-on-scroll">{item.answer}</span></td>
            </FaqRow>
          ))}
        </tbody>
      </FaqTable>
    </LandingContainer>
  </LandingSection>
);

export default FAQ;

// region STYLES

const FaqTable = styled.table`
  display: block;
  margin-top: 48px;
  width: 100%;
  
  tbody {
    width: 100%;
    display: block;
  }

  @media screen and (min-width: 576px) {
    display: table;
    
    tbody {
      display: table-row-group;
    }
  }
`;

const FaqRow = styled.tr`
  display: block;
  padding: 48px 0 48px 40px;
  position: relative;
  border-bottom: 1px solid ${transparentize(0.9, '#DDDDDD')};
  
  &:first-of-type {
    border-top: 1px solid ${transparentize(0.9, '#DDDDDD')};
  }

  td {
    color: #DDDDDD;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    vertical-align: baseline;
    display: block;

    &:nth-child(2) {
      color: white;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 24px;
    }

    &:first-of-type {
      padding-left: 0;
      position: absolute;
      left: 0;
      top: 52px;
    }

    &:last-of-type {
      padding-right: 0;
    }

    span {
      display: block;
    }
  }
  
  @media screen and (min-width: 576px) {
    display: table-row;
    padding: 0;
    border-bottom: none;
    
    &:first-of-type {
      border-top: none;
      
      td {
        border-top: 1px solid ${transparentize(0.9, '#DDDDDD')};
      }
    }

    td {
      padding: 48px 32px;
      display: table-cell;
      border-bottom: 1px solid ${transparentize(0.9, '#DDDDDD')};
      
      &:nth-child(2) {
        max-width: 488px;
      }
      
      &:first-of-type {
        position: static;
        left: auto;
        top: auto;
      }
      
      &:last-of-type span {
        max-width: 460px;
      }
    }
  }
  
  @media screen and (min-width: 992px) {
    
    td {
      padding: 48px 64px;
    }
  }
`;

const FAQBackground = styled(Background)`
  position: absolute;
  right: 20px;
  top: 30%;
`;

// endregion
