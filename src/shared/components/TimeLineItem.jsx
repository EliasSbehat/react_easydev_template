import React from 'react';
import PropTypes from 'prop-types';
import {
  CardBody, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import styled from 'styled-components';
import { colorAccent, colorBackground } from '@/utils/palette';
import {
 left, right, paddingRight, paddingLeft, borderLeft, borderRight, marginLeft, 
} from '@/utils/directions';

const getIcon = (type) => {
  switch (type) {
    case 'work':
      return <span className="lnr lnr-briefcase" />;
    case 'video':
      return <span className="lnr lnr-film-play" />;
    case 'file':
      return <span className="lnr lnr-file-add" />;
    default:
      return null;
  }
};

const TimeLineItem = ({
  type, img, title, date, children,
}) => (
  <TimelineItemWrap>
    {img ? (
      <TimeLineIcon><img src={img} alt="img" /></TimeLineIcon>
    ) : (
      <TimeLineIcon type={type}>{getIcon(type)}</TimeLineIcon>
    )}
    <TimeLineItemContent>
      <TimeLineItemTitle>{title}</TimeLineItemTitle>
      <CardSubhead>{date}</CardSubhead>
      {children}
    </TimeLineItemContent>
  </TimelineItemWrap>
);

TimeLineItem.propTypes = {
  type: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TimeLineItem.defaultProps = {
  type: '',
  img: '',
  title: '',
  date: '',
};

export default TimeLineItem;

// region STYLES

const TimeLineItemContent = styled(CardBody)`
  width: calc(50% - 52px);
  ${paddingRight}: 25px;
  ${paddingLeft}: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 5px;
  position: relative;
  background-color: ${colorBackground};

  &:after {
    content: '';
    position: absolute;
    ${right}: -20px;
    top: 20px;
    border: 10px solid transparent;
    ${borderLeft}: 10px solid ${colorBackground};
  }
`;

const TimeLineItemTitle = styled(CardTitle)`
  text-transform: uppercase;
  font-weight: 700;
`;

const TimelineItemWrap = styled.div`
  position: relative;
  padding-bottom: 50px;
  text-align: ${left};

  &:nth-child(even) {

    ${TimeLineItemContent} {
      ${marginLeft}: calc(50% + 52px);

      &:after {
        ${right}: auto;
        ${left}: -20px;
        border: 10px solid transparent;
        ${borderRight}: 10px solid ${colorBackground};
      }
    }
  }

  @media screen and (max-width: 991px) {

    &:nth-child(even) ${TimeLineItemContent},
    & ${TimeLineItemContent} {
      ${marginLeft}: 72px;
      width: calc(100% - 72px);

      &:after {
        ${right}: auto;
        ${left}: -20px;
        border: 10px solid transparent;
        ${borderRight}: 10px solid ${colorBackground};
      }
    }
  }
`;

const getIconColor = (type) => {
  switch (type) {
    case 'work':
      return 'linear-gradient(to bottom, #4ce1b6, #1cd25a), linear-gradient(#4ce1b6, #4ce1b6)';
    case 'video':
      return 'linear-gradient(to bottom, #708eee, #9e44f3), linear-gradient(#7082ee, #7082ee)';
    case 'file':
      return 'linear-gradient(to bottom, #ee4f99, #f76e5b)';
      
    default:
      return colorAccent;
  }
};

const TimeLineIcon = styled.div`
  position: absolute;
  ${left}: calc(50% - 25px);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-image: ${props => getIconColor(props.type)};
  overflow: hidden;
  text-align: center;
  display: flex;
  
  img {
    height: 100%;
    width: auto;
    min-width: 100%;
  }

  span {
    color: white;
    font-size: 20px;
    margin: auto;
  }

  @media screen and (max-width: 991px) {
    ${left}: 0;
  }
`;

// endregion 
