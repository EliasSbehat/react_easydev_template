/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot';
import styled from 'styled-components';
import PaperclipIcon from 'mdi-react/PaperclipIcon';
import StarIcon from 'mdi-react/StarIcon';
import { EmailProps } from '@/shared/prop-types/EmailProps';
import { colorHover, colorIcon, colorYellow } from '@/utils/palette';
import { left } from '@/utils/directions';
import { CheckBoxField } from '@/shared/components/form/CheckBox';

const EmailListItem = ({
  email, onLetter, itemId, isSelected, onChangeSelect,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <InboxEmailListItem unread={email.unread}>
      <CheckboxCell>
        <CheckBoxField
          checked={isSelected}
          name={itemId}
          onChange={event => onChangeSelect(event.target.checked, itemId)}
          styleType="colored-click"
        />
      </CheckboxCell>
      <td onClick={onFavorite}>
        <FavoriteIcon active={isFavorite} />
      </td>
      <InboxEmailName onClick={onLetter}>{email.name}</InboxEmailName>
      <InboxEmailPreview onClick={onLetter}>
        <Dotdotdot clamp={1}><b>{email.subject}</b> {email.preview}</Dotdotdot>
      </InboxEmailPreview>
      <td onClick={onLetter}>{email.attach ? <PaperclipIcon /> : ''}</td>
      <InboxEmailDate onClick={onLetter}>{email.time}</InboxEmailDate>
    </InboxEmailListItem>
  );
};

EmailListItem.propTypes = {
  email: EmailProps.isRequired,
  onLetter: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default EmailListItem;

// region STYLES

const CheckboxCell = styled.td`
  
  label {
    display: block;
    margin: 0;
    
    span {
      padding: 0;
    }
  }
`;

const InboxEmailName = styled.td`
  white-space: nowrap;
  text-align: ${left};
`;

const InboxEmailDate = styled.td`
  white-space: nowrap;
  text-align: ${left};
`;

const InboxEmailListItem = styled.tr`
  cursor: pointer;
  transition: background-color 0.3s;
  
  svg {
    width: 14px;
    height: 14px;
    fill: ${colorIcon};
  }
  
  &:hover {
    background-color: ${colorHover};
  }
  
  td:first-child {
    min-width: 32px;
  }
  
  td {
    vertical-align: middle;
  }
  
  ${props => props.unread && `
  
    ${InboxEmailName}, ${InboxEmailDate} {
      font-weight: bold;
    }
  `}
`;

const InboxEmailPreview = styled.td`
  min-width: 200px;
  text-align: ${left};
`;

const FavoriteIcon = styled(StarIcon).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['active'].includes(prop) && defaultValidatorFn(prop),
})`
  transition: all 0.3s;

  ${props => props.active && `
    fill: ${colorYellow} !important;
  `}
`;

// endregion
