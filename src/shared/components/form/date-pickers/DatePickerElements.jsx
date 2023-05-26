import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import {
  colorAccent,
  colorAccentHover,
  colorBackground,
  colorBorder,
  colorHover,
  colorLightAccent,
  colorText,
  colorWhite,
  scrollbarStyles,
} from '@/utils/palette';
import { borderLeft } from '@/utils/directions';



export const DatePickerWrap = styled.div`
  border-radius: 4px;
  color: #646777;
  outline: none;
  font-size: 12px;
  height: 32px;
  transition: border 0.3s;
  background: transparent;

  &[disabled] {
    background-color: #d8dae2;
    color: #b1b2bb;
  }

  .react-datepicker {
    display: block !important;
  }
  
  .react-datepicker__input-time-container {
    background: ${colorBackground};
    padding: 10px 15px;
    margin: 0;
    color: ${colorText};
  }

  & > div,
  .react-datepicker-wrapper,
  .rc-time-picker,
  .react-datepicker__input-container {
    width: 100%;
  }

  .react-datepicker__time-list {
    padding: 0;
    overflow-x: hidden;
    
    ${scrollbarStyles};
  }

  .react-datepicker__time-list-item {
    width: 50px;
  }

  .react-datepicker__time {
    overflow: hidden;
    border-radius: 0 !important;
  }

  .date-picker__svg {
    width: 14px;
    height: 14px;
    margin: auto 10px;
    fill: ${colorText};
  }

  .react-datepicker__header {
    background-color: ${colorAccent};
    border-color: ${colorAccent};
    border-radius: 0;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker__day-name,
  .react-datepicker__time-name {
    color: ${colorWhite};
  }

  .react-datepicker__navigation--next {
    border-left-color: ${colorWhite};

    &:hover {
      border-left-color: ${colorWhite};
    }
  }

  .react-datepicker__navigation--previous {
    border-right-color: ${colorWhite};

    &:hover {
      border-right-color: ${colorWhite};
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${colorAccent};
    transition: all 0.3s;

    &:hover {
      background-color: ${colorAccentHover};
    }
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
    border-bottom-color: ${colorAccent};
    margin-top: -7px;
  }

  .react-datepicker {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    border: none;
    display: inline-flex;
  }

  .react-datepicker__time-container {
    ${borderLeft}: 1px solid ${colorBorder};
    width: 85px!important;
  }
  
  .react-datepicker__time-box {
    width: 85px !important;
    border-radius: 0 !important;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-range,
  .react-datepicker__time-list-item--selected {
    background-color: ${colorAccentHover} !important;
  }

  .react-datepicker__month-container,
  .react-datepicker__time-list {
    background-color: ${colorBackground} !important;
  }

  .react-datepicker__header, 
  .react-datepicker__day--selected,
  .react-datepicker__time-list-item--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${colorAccent} !important;
    color: ${colorWhite} !important;
  }

  .react-datepicker__day--weekend,
  .react-datepicker__day,
  .react-datepicker__time-list {
    color: ${colorText};
  }

  .react-datepicker__day:hover,
  .react-datepicker__time-list-item:hover {
    background-color: ${colorHover} !important;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${colorLightAccent};
    border-radius: 50%;

    &:hover {
      border-radius: 50%;
    }

    &:hover {
      background-color: ${colorAccentHover} !important;
    }
  }

  .react-datepicker__time-container .react-datepicker__time
  .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: ${colorAccent};
  }

  .react-datepicker__month-text {
    color: ${colorText};
    transition: 0.3s;
    
    &:hover {
      background-color: ${colorHover};
    }
  }

  .react-datepicker__month-text--keyboard-selected {
    background-color: ${colorAccent};
    border-radius: 0.3rem;
    transition: 0.3s;

    &:hover {
      background-color: ${colorAccentHover};
    }
  }

  .react-datepicker-time__input {
    outline-color: ${colorAccent};

    &::-webkit-calendar-picker-indicator {
      filter: ${props => (props.theme.mode === 'dark' ? 'invert(1)' : 'none')};
    }
  }

  .react-datepicker-popper {
    z-index: 100;
  }
  
  .react-datepicker__close-icon:after {
    background-color: ${colorAccent};
  }
`;

export const DatePickerWrapInterval = styled(DatePickerWrap)`
  display: flex;

  & > div, .react-datepicker-wrapper,
  .react-datepicker__input-container {
    max-width: 170px;
  }
`;

