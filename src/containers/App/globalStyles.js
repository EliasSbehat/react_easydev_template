import { createGlobalStyle } from 'styled-components';
import {
  colorBlue,
  colorBlueHover,
  colorText,
  colorAdditional,
  colorAccent,
  colorWhite,
  colorRed,
  colorBackgroundBody,
  scrollbarStyles,
} from '@/utils/palette';
import {
  left,
  borderLeft,
  paddingLeft,
} from '@/utils/directions';



const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  main {
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0 !important;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    line-height: 1.6;
  }

  .row > * {
    padding: 0 15px;
  }

  * {
    box-sizing: inherit;
  }

  ul, ol {
    // doesn't do RTL, it break a sidebar
    padding-left: 15px;
    margin-bottom: 0;
    list-style-image: url(${process.env.PUBLIC_URL}/img/circle.svg);
  }

  a {
    color: ${colorBlue};
    transition: all 0.3s;
    text-decoration: none;

    &:hover {
      color: ${colorBlueHover};
    }
  }

  button:focus, button:active {
    outline: none;
  }

  img {
    width: 100%;
  }

  label {
    margin-bottom: 8px;
  }

  //TYPOGRAPHY
  p, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-weight: 400;
    margin-bottom: 0;
    color: ${colorText};
  }

  h1 {
    font-size: 36px;
    line-height: 48px;

    &.subhead {
      font-size: 30px;
      color: ${colorAdditional};
      line-height: 36px;
    }
  }

  h2 {
    font-size: 30px;
    line-height: 36px;

    &.subhead {
      font-size: 24px;
      color: ${colorAdditional};
      line-height: 32px;
    }
  }

  h3 {
    font-size: 24px;
    line-height: 32px;

    &.subhead {
      font-size: 18px;
      color: ${colorAdditional};
      line-height: 24px;
    }
  }

  h4 {
    font-size: 18px;
    line-height: 24px;

    &.subhead {
      font-size: 12px;
      color: ${colorAdditional};
      line-height: 16px;
    }
  }

  h5 {
    font-size: 14px;
    line-height: 18px;

    &.subhead {
      font-size: 10px;
      color: ${colorAdditional};
      line-height: 12px;
    }
  }

  h6 {
    font-size: 12px;
    line-height: 16px;

    &.subhead {
      font-size: 8px;
      color: ${colorAdditional};
      line-height: 10px;
    }
  }
  
  hr {
    opacity: 0.1;
  }
  
  .table-responsive {
    ${scrollbarStyles};
  }

  blockquote {
    font-size: 13px;
    font-style: italic;
    ${borderLeft}: 3px solid ${colorAccent};
    margin-bottom: 0;
    text-align: ${left};
    ${paddingLeft}: 10px;
  }

  .highlight {
    background-color: ${colorAccent};
    color: ${colorWhite};
  }

  .typography-message{
    text-align: ${left};
  }

  .red-text {
    color: ${colorRed};
  }

  .page-title {
    text-align: ${left};
    font-weight: 500;
    text-transform: capitalize;
    font-size: 20px;

    &:last-child {
      margin-bottom: 30px;
    }

    &.page-title--not-last {
      margin-top: 20px;
    }
  }

  .page-subhead {
    text-align: ${left};
    margin-bottom: 20px;

    &.subhead {
      font-size: 14px;
      opacity: 0.7;
    }
  }

  ::selection {
    color: ${colorWhite};
    background: ${colorAccent};
  }

  .first-letter-uppercase:first-letter {
    text-transform: uppercase;
  }

  .container {

    @media screen and (min-width: 768px) {
      width: 100%;
      max-width: 1630px;
    }
  }


  .rc-slider-tooltip {
    padding-bottom: 2px;

    .rc-slider-tooltip-inner {
      margin-bottom: 5px;
      background-color: ${colorBackgroundBody};
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
      color: ${colorText};
      font-size: 12px;
      line-height: 12px;
      padding: 4px 4px;
      height: 20px;
      min-width: 28px;
      border-radius: 0;
    }

    &.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
      border-top-color: ${colorBackgroundBody};
    }

    &.rc-slider-tooltip-hidden {
      display: block;
    }
  }
`;

export default GlobalStyles;
