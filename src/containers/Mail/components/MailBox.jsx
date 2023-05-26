import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import styled from 'styled-components';
import {
  colorAccent,
  colorAdditional,
  colorBackgroundBody,
  colorFolderHover,
  colorIcon,
  colorText,
  colorWhite,
} from '@/utils/palette';
import { marginRight, right } from '@/utils/directions';

const MailBox = ({
  title, amount, selected, children,
}) => (
  <InboxMailbox active={selected}>
    {children}
    <InboxMailboxTitle>{title}</InboxMailboxTitle>
    {amount ? <InboxMailboxLabel bg="custom">{amount}</InboxMailboxLabel> : ''}
  </InboxMailbox>
);

MailBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  amount: PropTypes.number,
  selected: PropTypes.bool,
};

MailBox.defaultProps = {
  amount: 0,
  selected: false,
};

export default MailBox;

// region STYLES

const InboxMailboxTitle = styled.p`
  line-height: 14px;
  margin: 0;
  transition: all 0.3s;
`;

const InboxMailboxLabel = styled(Badge)`
  position: absolute;
  color: ${colorAdditional};
  transition: 0.3s;
  ${right}: 10px;
  background-color: ${colorBackgroundBody};
`;

const InboxMailbox = styled.div`
  display: flex;
  padding: 10px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  color: ${colorText};

  svg {
    width: 14px;
    height: 14px;
    ${marginRight}: 10px;
    transition: all 0.3s;
    fill: ${colorIcon};
  }

  ${props => props.active && `
    cursor: default;
    font-weight: 500;
    background-color: ${colorFolderHover(props)};

    svg {
      fill: ${colorText(props)};
    }

    ${InboxMailboxTitle} {
      font-weight: 500;
    }

    ${InboxMailboxLabel} {
      background-color: ${colorAccent};
      color: ${colorWhite};
    }
  `}

  &:hover {
    background-color: ${colorFolderHover};
  }
`;

// endregion
