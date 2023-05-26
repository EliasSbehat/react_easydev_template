import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import {
 colorAccent, colorBackground, colorBorder, colorGray, 
} from '@/utils/palette';
import {
 paddingRight, paddingLeft, left, right, 
} from '@/utils/directions';

export const TopbarCollapseContent = styled.div`
  width: 270px;
  position: absolute;
  box-shadow: 0 10px 25px 0 rgba(33, 36, 50, 0.13);
  z-index: 102;
  ${right}: 0;
  background: ${colorBackground};

  @media screen and (max-width: 1024px) {
    ${right}: -150px;
  }

  @media screen and (min-width: 520px) {
    width: 330px;
  }

  @media screen and (max-width: 576px) {
    width: 250px;
    ${right}: -215px;
  }


  @media screen and (max-width: 320px) {
    width: 230px;
    ${right}: -210px;
  }
`;

export const TopbarCollapse = styled.div`
  position: relative;
  display: block;
  
  &:first-child {
    margin-left: 15px;
  }

  @media screen and (min-width: 568px) {
    display: block;
  }
`;

export const TopbarCollapseTitleWrap = styled.div`
  padding: 20px 15px 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colorBorder};
`;

export const TopbarCollapseItem = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  position: relative;
  height: 62px;
  align-items: center;
  flex-wrap: wrap;
  ${paddingLeft}: 70px;
  ${paddingRight}: 55px;
  border-bottom: 1px solid ${colorBorder};
`;

export const TopbarCollapseImageWrap = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  ${left}: 15px;
`;

export const TopbarCollapseMessage = styled.div`
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: ${colorGray};
  text-align: ${left};
`;

export const TopbarCollapseName = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: ${colorAccent};
`;

export const TopbarCollapseDate = styled.p`
  position: absolute;
  top: 12px;
  font-size: 10px;
  color: ${colorGray};
  margin-top: 2px;
  ${right}: 15px;
`;

export const TopbarCollapseLink = styled(Link)`
  display: block;
  padding: 10px;
  text-transform: uppercase;
  color: ${colorAccent};
  transition: 0.3s;
  text-align: center;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;

  &:hover {
    color: ${colorAccent}-hover;
  }
`;

export const TopbarCollapseTitle = styled.p`
  font-size: 14px;
  line-height: 16px;
`;

export const TopbarCollapseButton = styled.button`
  color: ${lighten(0.25, colorGray)};
  border: none;
  padding: 0;
  font-size: 12px;
  line-height: 16px;
  transition: 0.3s;
  background: transparent;
  text-align: ${right};

  &:hover {
    color: ${colorAccent};
  }
`;
