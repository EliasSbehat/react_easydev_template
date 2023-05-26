import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';
import StarIcon from 'mdi-react/StarIcon';
import ReplyIcon from 'mdi-react/ReplyIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import PrinterIcon from 'mdi-react/PrinterIcon';
import PaperclipIcon from 'mdi-react/PaperclipIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import { EmailBodyProps } from '@/shared/prop-types/EmailProps';
import {
  colorAccent,
  colorAdditional,
  colorBlue,
  colorBlueHover,
  colorBorder,
  colorFieldsBorder,
  colorText,
  colorYellow,
  inboxButtonBackground,
  inboxButtonBackgroundHover,
} from '@/utils/palette';
import {
  marginLeft,
  marginRight,
  paddingLeft,
  left,
  right,
  paddingRight,
} from '@/utils/directions';

const Email = ({ email, onReply, onBack }) => {
  const [isQuickReplied, setIsQuickReplied] = useState(false);

  const onQuickReply = () => {
    setIsQuickReplied(true);
  };

  const onQuickReplyClose = () => {
    setIsQuickReplied(false);
  };

  return (
    <div>
      <InboxEmailHeader>
        <InboxEmailLeft>
          <InboxEmailBack
            type="button"
            aria-label="email back button"
            onClick={onBack}
          >
            <ArrowLeftIcon />
          </InboxEmailBack>
          <InboxEmailAvaWrap>
            <img src={email.ava} alt="" />
          </InboxEmailAvaWrap>
          <InboxEmailInfo>
            <InboxEmailName>
              {email.name}
              <InboxFavoriteIcon active={email.favorite} />
            </InboxEmailName>
            <InboxEmail>{email.email}</InboxEmail>
          </InboxEmailInfo>
        </InboxEmailLeft>
        <InboxEmailRight>
          <InboxEmailTime>{email.time}</InboxEmailTime>
          <InboxEmailButton
            type="button"
            aria-label="email reply button"
            onClick={onReply}
          >
            <ReplyIcon />
          </InboxEmailButton>
          <InboxEmailButton
            type="button"
            aria-label="email delete button"
          >
            <DeleteIcon />
          </InboxEmailButton>
          <InboxEmailButton
            type="button"
            aria-label="email printer button"
          >
            <PrinterIcon />
          </InboxEmailButton>
        </InboxEmailRight>
      </InboxEmailHeader>
      <InboxEmailBody>
        {email.body}
      </InboxEmailBody>
      {email.attachment ? (
        <InboxEmailAttachment>
          <InboxEmailAttachmentTitle dir="ltr">
            Attachment (2 file 12Mb):
          </InboxEmailAttachmentTitle>
          {email.attachment.map(item => (
            <InboxEmailAttachmentLink key={`index_${item.name}_${item.time}`}>
              <PaperclipIcon /><a href={item.link} download dir="ltr">{item.name} ({item.size})</a>
            </InboxEmailAttachmentLink>
          ))}
        </InboxEmailAttachment>
      ) : ''}
      <InboxEmailReply>
        <InboxEmailReplyTextarea onFocus={onQuickReply} />
        {!isQuickReplied ? (
          <InboxEmailReplyPlaceholder>
            Click here to <span>reply</span>
          </InboxEmailReplyPlaceholder>
        ) : (
          <div>
            <InboxReplyCloseButton type="button" onClick={onQuickReplyClose}>
              <CloseIcon />
            </InboxReplyCloseButton>
            <InboxReplyButtons>
              <Button size="sm" variant="primary">Send</Button>
              <InboxReplyButtonFull type="button" onClick={onReply}>
                Go to full answer form
              </InboxReplyButtonFull>
            </InboxReplyButtons>
          </div>
        )}
      </InboxEmailReply>
    </div>
  );
};

Email.propTypes = {
  email: EmailBodyProps.isRequired,
  onReply: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Email;

// region STYLES

const InboxEmailHeader = styled.div`
  display: flex;
  padding-bottom: 12px;
  flex-wrap: wrap;
  border-bottom: 1px solid ${colorBorder};
  align-items: center;
`;

const InboxEmailLeft = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const InboxEmailBack = styled.button`
  border: none;
  background: none;
  height: 35px;
  padding-top: 10px;
  width: 30px;
  cursor: pointer;
  ${paddingLeft}: 0;

  svg {
    height: 18px;
    width: 18px;
    transition: all 0.3s;
    fill: ${colorText};
  }

  &:hover {

    svg {
      fill: ${colorAccent};
    }
  }
`;

const InboxEmailAvaWrap = styled.div`
  height: 35px;
  width: 35px;
  overflow: hidden;
`;

const InboxEmailInfo = styled.div`
  ${paddingLeft}: 10px;
`;

const InboxEmailName = styled.h5`
  font-weight: 500;
  line-height: 20px;

  svg {
    height: 14px;
    width: 14px;
    ${marginLeft}: 20px;
    fill: ${colorText};
  }
`;

const InboxEmail = styled.p`
  margin: 0;
  font-size: 10px;
  line-height: 13px;
  color: ${colorAdditional};
  text-align: ${left};
`;

const InboxEmailRight = styled.div`
  display: flex;
  ${marginLeft}: auto;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 15px;
  }
`;

const InboxEmailBody = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
`;

const InboxEmailAttachment = styled.div`
  padding-top: 15px;
  margin-bottom: 15px;
  border-top: 1px solid ${colorBorder};
`;

const InboxEmailAttachmentTitle = styled.h5`
  font-size: 12px;
  text-align: ${left};
`;

const InboxEmailAttachmentLink = styled.div`
  font-size: 10px;
  margin-top: 10px;
  display: flex;

  svg {
    fill: ${colorAdditional};
    height: 14px;
    width: 14px;
    ${marginRight}: 5px;
  }
`;

const InboxEmailButton = styled.button`
  border: none;
  height: 32px;
  width: 32px;
  cursor: pointer;
  ${marginRight}: 5px;
  background: ${inboxButtonBackground};

  &:hover {
    background: ${inboxButtonBackgroundHover};
  }

  &:last-child {
    ${marginRight}: 0;
  }

  svg {
    height: 14px;
    width: 14px;
    fill: ${colorAdditional}
  }
`;

const InboxEmailTime = styled.p`
  margin-top: auto;
  margin-bottom: auto;
  ${marginRight}: 30px;
  ${marginLeft}: 0 !important;

  @media screen and (max-width: 1200px) {
    margin-top: auto;
    margin-bottom: auto;
    ${marginRight}: 20px;
    ${marginLeft}: 0;
  }

  @media screen and (max-width: 1024px) {
    margin-top: auto;
    margin-bottom: auto;
    ${marginRight}: 10px;
    ${marginLeft}: 0;
  }


  @media screen and (max-width: 767px) {
    ${marginRight}: auto;
  }
`;

const InboxFavoriteIcon = styled(StarIcon).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['active'].includes(prop) && defaultValidatorFn(prop),
})`
  transition: all 0.3s;

  ${props => props.active && `
    fill: ${colorYellow} !important;
  `}
`;

const InboxEmailReply = styled.div`
  padding-top: 15px;
  position: relative;
`;

const InboxEmailReplyTextarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-height: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  background: transparent;
  ${paddingRight}: 35px;
  ${paddingLeft}: 15px;
  border: 1px solid ${colorFieldsBorder};
  color: ${colorText};

  &:focus, &:active {
    outline: none;
    border-color: ${colorAccent};
  }
`;

const InboxEmailReplyPlaceholder = styled.p`
  pointer-events: none;
  position: absolute;
  top: 15px;
  color: ${colorAdditional};
  ${left}: 15px;

  span {
    color: ${colorBlue};
  }
`;

const InboxReplyCloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 28px;
  height: 20px;
  width: 20px;
  padding: 0;
  cursor: pointer;
  ${right}: 10px;

  svg {
    height: 15px;
    width: 15px;
    fill: ${colorAdditional};
    transition: all 0.3s;
  }

  &:hover {

    svg {
      fill: ${colorAccent};
    }
  }
`;

const InboxReplyButtons = styled.div`
  margin-top: 10px;

  button {
    margin-bottom: 0;
  }
`;

const InboxReplyButtonFull = styled.button`
  border: none;
  background: transparent;
  color: ${colorBlue};
  transition: all 0.3s;
  cursor: pointer;
  min-height: 32px;

  &:hover {
    color: ${colorBlueHover};
  }
`;

// endregion
