import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import DownIcon from 'mdi-react/ChevronDownIcon';
import {
  colorIcon, colorRed, colorText, colorHover,
  colorGray, colorBackground, logoImg,
} from '@/utils/palette';
import {
 translate, right, left, marginRight, marginLeft,
} from '@/utils/directions';

export const TopbarContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  min-height: 60px;
  z-index: 101;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  background: ${colorBackground};

  @media screen and (max-width: 576px) {
    min-height: 120px;
  }
`;

export const TopbarLeft = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  ${left}: 0;
`;

export const TopbarRight = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  ${right}: 0;
  ${marginRight}: 15px;
  min-height: 120px;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media screen and (min-width: 576px) {
    min-height: auto;
    flex-wrap: nowrap;
  }
`;

export const TopbarRightOver = styled.div`
  display: flex;
  flex: auto;
  justify-content: space-between;
  height: 60px;
`;

export const TopbarLogo = styled(Link)`
  width: 150px;
  height: 32px;
  margin: auto 0;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: left;
  background-size: contain;
  display: none;
  background-image: ${logoImg};

  @media screen and (min-width: 835px) {
    display: block;
  }
`;


export const TopbarSearchWrap = styled.div`
  margin: 0;
  display: flex;
  height: 60px;
  
  @media screen and (min-width: 576px) {
    margin: auto 0 auto 15px;
  }

  @media screen and (min-width: 640px) {
    margin-right: 15px;
  }
`;

export const TopbarButton = styled.button`
  font-size: 18px;
  height: 100%;
  min-width: 60px;
  padding: 0 10px;
  cursor: pointer;
  position: relative;
  display: flex;
  border: none;
  background: transparent;
  transition: all 0.3s;
  color: ${colorText};

  &:hover {
    background-color: ${colorHover};
  }

  svg {
    margin: auto;
    height: 18px;
    width: 18px;
    fill: ${lighten(0.25, colorGray)};
  }

  @media screen and (max-width: 640px) {
    padding: 0 5px;
  }

  @keyframes beforePulse {

    from {
      width: 7px;
      height: 7px;
    }

    25% {
      width: 13px;
      height: 13px;
    }

    to {
      width: 7px;
      height: 7px;
    }
  }
`;

export const TopbarButtonNewLabel = styled.span`
  position: absolute;
  display: block;
  top: 20px;
  ${right}: 9px;

  & > span {
    position: relative;
    display: block;

    &:before {
      background-color: rgba(224, 83, 111, 0.2);
      content: "";
      position: absolute;
      top: 50%;
      border-radius: 50%;
      animation: beforePulse 1.5s infinite;
      ${left}: 50%;
      transform: ${translate};
    }

    &:after {
      height: 7px;
      width: 7px;
      background-color: ${colorRed};
      content: "";
      position: absolute;
      top: 50%;
      border-radius: 50%;
      ${left}: 50%;
      transform: ${translate};
    }
  }

  @media screen and (max-width: 576px) {
    top: 10px;
  }
`;

export const TopbarBack = styled.button`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  border: none;
`;

export const TopbarLinkIcon = styled.span`
  font-size: 13px;
  line-height: 13px;
  ${marginRight}: 10px;
  color: ${colorIcon};
`;

export const TopbarLinkTitle = styled.p`
  display: flex;
  margin: 0;
  font-size: 14px;
  line-height: 16px;
`;

export const TopbarDownIcon = styled(DownIcon)`
  height: 18px;
  margin: auto 0;
  fill: ${lighten(0.25, colorGray)};
  ${marginLeft}: 8px;
`;
