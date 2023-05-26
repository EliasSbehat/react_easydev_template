import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Badge, Col, Collapse,
} from 'react-bootstrap';
import CloseIcon from 'mdi-react/CloseIcon';
import MinusIcon from 'mdi-react/MinusIcon';
import AutorenewIcon from 'mdi-react/AutorenewIcon';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import SimpleLoader from '@/shared/components/SimpleLoader';
import {
  colorAccent,
  colorBlue,
  colorRed,
  colorYellow,
  colorBackground,
  colorText,
  colorWhite,
  colorAdditional,
} from '@/utils/palette';
import {
  left,
  right,
  marginLeft,
  marginRight,
  paddingLeft,
  paddingRight,
} from '@/utils/directions';

const Panel = ({
  md, lg, xl, sm, xs, color, divider, icon, title, label, subhead, before,
  className, children, isLoading, refreshRequest,
}) => {
  const [visible, setVisible] = useState(true);
  const [collapse, setCollapse] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const onDismiss = () => {
    setVisible(false);
  };

  const toggleCollapse = () => {
    setCollapse(prevState => !prevState);
  };

  const fakeRefresh = () => {
    setRefresh(true);
    setTimeout(() => setRefresh(false), 5000);
  };

  if (visible) {
    return (
      <Col md={md} lg={lg} xl={xl} sm={sm} xs={xs}>
        <PanelCard
          collapse={!collapse}
          color={color}
          divider={divider}
          className={className}
        >
          <PanelCardBody>
            {refresh || isLoading ? <PanelRefresh><SimpleLoader /></PanelRefresh> : ''}
            <PanelButtons>
              <PanelButton
                type="button"
                onClick={toggleCollapse}
              >
                <MinusIcon />
              </PanelButton>
              <PanelButton
                type="button"
                onClick={refreshRequest || fakeRefresh}
              >
                <AutorenewIcon />
              </PanelButton>
              <PanelButton
                type="button"
                onClick={onDismiss}
              >
                <CloseIcon />
              </PanelButton>
            </PanelButtons>
            <PanelCardTitleWrap>
              <PanelCardTitle>
                {icon ? <PanelIcon className={`lnr lnr-${icon}`} /> : ''}
                {title}
                <PanelLabel bg="custom">{label}</PanelLabel>
              </PanelCardTitle>
              <PanelCardSubhead>{subhead}</PanelCardSubhead>
            </PanelCardTitleWrap>
            <Collapse in={collapse}>
              <PanelContent>
                {children}
              </PanelContent>
            </Collapse>
          </PanelCardBody>
        </PanelCard>
        {before}
      </Col>
    );
  }

  return '';
};

Panel.propTypes = {
  divider: PropTypes.bool,
  color: PropTypes.string,
  title: PropTypes.string,
  subhead: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
  before: PropTypes.element,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  refreshRequest: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Panel.defaultProps = {
  divider: false,
  color: '',
  title: '',
  subhead: '',
  label: '',
  icon: '',
  md: 0,
  lg: 0,
  xl: 0,
  sm: 0,
  xs: 0,
  before: null,
  className: '',
  isLoading: false,
  refreshRequest: null,
};

export default Panel;

export const PanelTitle = ({ title }) => (
  <PanelCardTitleWrap>
    <PanelCardTitle>
      {title}
    </PanelCardTitle>
  </PanelCardTitleWrap>
);

PanelTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

// region STYLES

const PanelCardBody = styled(CardBody)`
  position: relative;
  ${paddingRight}: 35px;
  ${paddingLeft}: 30px;
  padding-top: 30px;
  padding-bottom: 50px;
  transition: height 0.3s;
`;

const PanelButtons = styled.div`
  position: absolute;
  top: 30px;
  ${right}: 10px;
  z-index: 1;
`;

const PanelButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  ${marginLeft}: 5px;

  svg {
    width: 14px;
    height: 14px;
    fill: ${colorAdditional};
  }

  &:focus {
    outline: none;
  }
  
  &:hover,
  &:focus,
  &:active {
    
    svg {
      fill: ${colorAccent};
    }
  }
`;

const PanelCardTitleWrap = styled(CardTitleWrap)`
  text-transform: uppercase;
  margin-bottom: 30px;
  transition: 0.3s;
  margin-top: 0 !important;
`;


const PanelCardTitle = styled(CardTitle)`
  font-size: 13px;
`;

const PanelCardSubhead = styled(CardSubhead)`
  text-align: ${left};
  text-transform: none;
  font-size: 12px;
  line-height: 18px;
  color: ${colorAdditional};
  opacity: 0.7;
  transition: 0.3s;
  margin: 0;
`;

const PanelRefresh = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  ${left}: 0;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    top: 0;
    ${left}: 0;
    border-radius: 5px;
    background-color: ${colorBackground};
    opacity: 0.8;
  }

  svg {
    position: absolute;
    top: calc(50% - 24px);
    ${left}: calc(50% - 24px);
  }
`;

const PanelLabel = styled(Badge)`
  background-color: ${colorAccent};
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 13px;
  padding: 3px 10px;
  ${left}: 100%;
  ${marginLeft}: 10px;
`;

const PanelIcon = styled.span`
  display: inline-block;
  ${marginRight}: 5px;
`;

const PanelContent = styled.div`

`;

const getColor = (color) => {
  switch (color) {
    case 'primary':
      return colorBlue;
    case 'success':
      return colorAccent;
    case 'warning':
      return colorYellow;
    case 'danger':
      return colorRed;
    default:
      return 'transparent';
  }
};

const PanelCard = styled(Card).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['collapse', 'divider'].includes(prop) && defaultValidatorFn(prop),
})`
  transition: 0.3s;

  ${props => props.collapse && `
    height: ${props.color ? 72 : 108}px;
    
    ${PanelCardTitleWrap} {
      margin-bottom: 0;
    }
        
    ${props.divider && `
      ${PanelCardSubhead} {
        opacity: 0;
      }
    `}

    ${PanelCardBody} {
      padding-top: 35px;
      padding-bottom: 35px;
    }
  `}

  ${props => props.divider && `

    ${PanelContent} {
      text-align: ${left(props)};
      padding-top: 0;
      padding-bottom: 40px;

      .tabs--bordered-bottom {
        
        .nav-item {
          border-bottom: 1px solid #dee2e6;
          
          .nav-link {
            background-color: ${colorBackground};
            color: ${colorText};
          }
        }
      }
    }
  `}

  ${props => props.color && `
    ${PanelCardBody} {
      padding: 0;
    }

    ${PanelCardTitleWrap} {
      ${paddingRight(props)}: 40px;
      ${paddingLeft(props)}: 30px;
      padding-top: 15px;
      padding-bottom: 15px;
      margin-bottom: 15px;

      h5 {
        color: white;
      }
    }

    ${PanelButtons} {
      top: 13px;

      svg {
        fill: ${colorWhite};
      }
      
      ${PanelButton} {
      
        &:hover,
        &:focus,
        &:active {
          fill: ${colorWhite};
        }
      }
    }

    ${PanelContent} {
      ${paddingRight(props)}: 35px;
      ${paddingLeft(props)}: 30px;
      padding-top: 0;
      padding-bottom: 40px;
    }
  `}

  ${PanelCardTitleWrap} {
    background-color: ${props => getColor(props.color)};
  }
`;

// endregion
