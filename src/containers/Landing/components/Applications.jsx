import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { LandingSection, LandingContainer } from '../BasicLandingElements';

const email = `${process.env.PUBLIC_URL}/img/landing/applications_email.png`;
const calendar = `${process.env.PUBLIC_URL}/img/landing/applications_calendar.png`;
const chat = `${process.env.PUBLIC_URL}/img/landing/applications_chat.png`;
const todo = `${process.env.PUBLIC_URL}/img/landing/applications_todo.png`;
const arrow = `${process.env.PUBLIC_URL}/img/landing/arrow.svg`;

const AppsArr = [
  'email',
  'calendar',
  'chat',
  'todo',
];

const sliderData = {
  [AppsArr[0]]: {
    img: email,
    caption: 'Simple and convenient application for collecting and viewing letters',
  },
  [AppsArr[1]]: {
    img: calendar,
    caption: 'Do not miss a single important event in your life with the calendar application',
  },
  [AppsArr[2]]: {
    img: chat,
    caption: 'Communicate, make new acquaintances, save the history of correspondence. It\'s easy with our Chat app',
  },
  [AppsArr[3]]: {
    img: todo,
    caption: 'Make a plan for the day, month, year, to forget nothing. Our task manager will help you!',
  },
};

const Slider = ({ item, selectItem }) => {
  const { img } = sliderData[item];

  const handleNextClick = () => {
    const currentIndex = AppsArr.indexOf(item);
    if (currentIndex + 1 >= AppsArr.length) {
      selectItem(AppsArr[0]);
    } else {
      selectItem(AppsArr[currentIndex + 1]);
    }
  };
  const handlePrevClick = () => {
    const currentIndex = AppsArr.indexOf(item);
    if (currentIndex - 1 < 0) {
      selectItem(AppsArr[AppsArr.length - 1]);
    } else {
      selectItem(AppsArr[currentIndex - 1]);
    }
  };
  
  return (
    <LandingApplicationSliderWrap>
      <LandingApplicationSliderButton
        type="button"
        onClick={handlePrevClick}
        direction="left"
      >
        <img src={arrow} alt="Prev" />
      </LandingApplicationSliderButton>
      <LandingApplicationSliderBody>
        <LandingApplicationSliderImage src={img} alt="application" />
      </LandingApplicationSliderBody>
      <LandingApplicationSliderButton
        type="button"
        onClick={handleNextClick}
        direction="right"
      >
        <img src={arrow} alt="Next" />
      </LandingApplicationSliderButton>
    </LandingApplicationSliderWrap>
  );
};

Slider.propTypes = {
  item: PropTypes.string.isRequired,
  selectItem: PropTypes.func.isRequired,
};

const Applications = () => {
  const [selectedApp, selectApp] = useState(AppsArr[1]);
  const addSelectedModifier = currentApp => selectedApp === currentApp;

  return (
    <LandingSection>
      <LandingApplicationContainer>
        <LandingContainer>
          <ApplicationsTitle className="animate-on-scroll">
            Save your time using fully-responsive UI pages
          </ApplicationsTitle>
        </LandingContainer>
        <Slider item={selectedApp} selectItem={selectApp} />
        <LandingContainer>
          <LandingApplicationSlider>
            <LandingApplicationButton
              selected={addSelectedModifier(AppsArr[0])}
              onClick={() => selectApp(AppsArr[0])}
              type="button"
            >
              <span className="animate-on-scroll">E-mail</span>
              <LandingButtonDivider />
              <LandingButtonCaption className="animate-on-scroll">
                Make sure all of your tasks will be done in time!
              </LandingButtonCaption>
            </LandingApplicationButton>
            <LandingApplicationButton
              selected={addSelectedModifier(AppsArr[1])}
              onClick={() => selectApp(AppsArr[1])}
              type="button"
            >
              <span className="animate-on-scroll">Calendar</span>
              <LandingButtonDivider />
              <LandingButtonCaption className="animate-on-scroll">
                Simple and convenient application for collecting and viewing letters
              </LandingButtonCaption>
            </LandingApplicationButton>
            <LandingApplicationButton
              selected={addSelectedModifier(AppsArr[2])}
              onClick={() => selectApp(AppsArr[2])}
              type="button"
            >
              <span className="animate-on-scroll">Chat</span>
              <LandingButtonDivider />
              <LandingButtonCaption className="animate-on-scroll">
                Do not miss a single important event in your life
              </LandingButtonCaption>
            </LandingApplicationButton>
            <LandingApplicationButton
              selected={addSelectedModifier(AppsArr[3])}
              onClick={() => selectApp(AppsArr[3])}
              type="button"
            >
              <span className="animate-on-scroll">To Do</span>
              <LandingButtonDivider />
              <LandingButtonCaption className="animate-on-scroll">
                Communicate, make new acquaitances, save the history of correspondence
              </LandingButtonCaption>
            </LandingApplicationButton>
          </LandingApplicationSlider>
        </LandingContainer>
      </LandingApplicationContainer>
    </LandingSection>
  );
};

export default Applications;

// region STYLES

const LandingApplicationContainer = styled(LandingContainer)`
  @media (min-width: 1200px) {
    max-width: 1140px !important;
  }

  @media (min-width: 1400px) {
    max-width: 1340px !important;
  }

  @media (min-width: 1600px) {
    max-width: 1540px !important;
  }
`;

const LandingApplicationSliderWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const LandingApplicationSliderButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;
  transition: transform 0.2s ease-in-out;

  & img {
    transform: rotate(${({ direction }) => (direction === 'right' ? '180deg' : '0deg')});
  }

  &:active {
    transform: scale(0.90);
    transition: transform 0.1s ease-in-out;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const LandingApplicationSlider = styled.div`
  display: flex;
  flex-flow: row;
  gap: 40px;
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
`;

const LandingButtonDivider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background: ${transparentize(0.68, '#DDDDDD')};
  margin: 8px 0;
  transition: 0.3s;
`;

const LandingButtonCaption = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${transparentize(0.4, '#DDDDDD')};
`;

const LandingApplicationButton = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  text-align: left;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-width: 196px;

  font-size: 16px;
  line-height: 24px;
  font-family: Poppins, sans-serif;
  color: white;
  
  &:hover {
    
    ${LandingButtonDivider} {
      background: linear-gradient(139.48deg, #FB9E48 6.99%, #D84B43 53.88%, #971F49 99.96%);
    }
  }
  
  ${props => props.selected && `
    font-weight: bold;
    
    ${LandingButtonCaption} {
      color: white;
    }
    
    ${LandingButtonDivider} {
      background: linear-gradient(139.48deg, #FB9E48 6.99%, #D84B43 53.88%, #971F49 99.96%);
    }
  `}
`;

const LandingApplicationSliderBody = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1050px;
`;

const LandingApplicationSliderImage = styled.img`
  width: 100%;
`;

const ApplicationsTitle = styled.h1`
  margin-bottom: 40px;
  font-size: 36px !important;
  line-height: 40px !important;
  
  @media screen and (min-width: 576px) {
    text-align: center;
    font-size: 60px !important;
    line-height: 78px !important;
    margin-bottom: 80pximport { Button } from '../../../shared/components/Button';
;import { ArrowLeftIcon } from 'mdi-react/ArrowLeftIcon';
import { ChevronLeftIcon } from 'mdi-react/ChevronLeftIcon';

  }
`;

// endregion
