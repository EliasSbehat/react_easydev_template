import React, { useState } from 'react';
import styled from 'styled-components';
import PenIcon from 'mdi-react/PenIcon';
import InboxArrowDownIcon from 'mdi-react/InboxArrowDownIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import TooltipEditIcon from 'mdi-react/TooltipEditIcon';
import StarIcon from 'mdi-react/StarIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import { EmailsProps } from '@/shared/prop-types/EmailProps';
import showResults from '@/utils/showResults';
import {
  colorAccent,
  colorAdditional,
  colorBlue,
  colorFolderHover,
  colorIcon,
  colorRed,
  colorText,
  colorYellow,
  colorHover,
  colorBackground,
} from '@/utils/palette';
import {
 right, left, marginRight, marginLeft, paddingLeft,
} from '@/utils/directions';
import { Button } from '@/shared/components/Button';
import MailBox from './MailBox';
import ComposeEmail from './ComposeEmail';
import Email from './Email';
import InboxTable from './InboxTable';

const mailboxes = [
  { icon: <InboxArrowDownIcon />, title: 'Inbox', amount: 21 },
  { icon: <EmailIcon />, title: 'Sent Mail' },
  { icon: <TooltipEditIcon />, title: 'Drafts', amount: 2 },
  { icon: <StarIcon />, title: 'Tagged' },
  { icon: <DeleteIcon />, title: 'Deleted' },
];

const labels = [
  { color: 'green', title: 'Freelance' },
  { color: 'red', title: 'Work' },
  { color: 'blue', title: 'Travel' },
  { color: 'yellow', title: 'Clients' },
];

const emailExample = [{
  ava: `${process.env.PUBLIC_URL}/img/24_mail_ava.png`,
  name: 'Nikolay Morris',
  email: 'mailexample@mail.com',
  favorite: true,
  time: 'July 12 11:30 PM',
  body:
  <div className="typography-message">
    <h4><b>Congratulations! You are win! </b></h4>
    <p>Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for.
      His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved as oh he
      unpleasant no inquietude insipidity. Advantages can discretion possession add favourable cultivated
      admiration far. Why rather assure how esteem end hunted nearer and before. By an truth after heard going
      early given he. Charmed to it excited females whether at examine. Him abilities suffering may are yet
      dependent. Barton did feebly change man she afford square add. Want eyes by neat so just must. Past
      draw tall up face show rent oh mr.
    </p>
    <p>Best regards,</p>
    <p>Nikolay</p>
  </div>,
  attachment: [
    { name: 'Project Design.psd', size: '11Mb', link: './fav.ico' },
    { name: 'Report.txt', size: '1Mb', link: './fav.ico' },
  ],
}];

const Inbox = ({ emails }) => {
  const [isComposed, setIsComposed] = useState(false);
  const [email, setEmail] = useState(false);
  const [mailbox, setMailbox] = useState(0);
  const [label, setLabel] = useState(0);
  const [isOpenedMailboxes, setIsOpenedMailboxes] = useState(false);

  const mailboxesWithID = mailboxes.map((item, index) => ({ ...item, id: index }));
  const labelsWithID = labels.map((item, index) => ({ ...item, id: index }));

  const onCompose = () => {
    setIsComposed(true);
    setEmail(false);
  };

  const onMailBox = (index) => {
    setMailbox(index);
    setIsComposed(false);
    setEmail(false);
  };

  const onBack = () => {
    setIsComposed(false);
    setEmail(false);
  };

  const onLabel = (index) => {
    setLabel(index);
    setIsComposed(false);
    setEmail(false);
  };

  const onLetter = () => {
    setEmail(true);
  };

  const onOpenMailboxes = () => {
    setIsOpenedMailboxes(!isOpenedMailboxes);
  };

  return (
    <InboxWrap
      show={isOpenedMailboxes}
      onClick={isOpenedMailboxes ? onOpenMailboxes : null}
      role="presentation"
    >
      <InboxMailboxList>
        <InboxMailboxListButton
          variant="primary"
          className="icon"
          size="sm"
          onClick={onCompose}
        >
          <PenIcon /> <span>Compose</span>
        </InboxMailboxListButton>
        {mailboxesWithID.map((item, index) => (
          <InboxListButton
            type="button"
            key={item.id}
            onClick={() => onMailBox(index)}
          >
            <MailBox title={item.title} amount={item.amount} selected={index === mailbox}>
              {item.icon}
            </MailBox>
          </InboxListButton>
        ))}
        <InboxLabels>Labels</InboxLabels>
        {labelsWithID.map((item, index) => (
          <InboxLabelButton
            type="button"
            key={item.id}
            onClick={() => onLabel(index)}
            active={label === index}
          >
            <InboxColorLabel color={item.color} />{item.title}
          </InboxLabelButton>
        ))}
      </InboxMailboxList>
      <InboxContainer>
        <InboxTopbar hide={email}>
          <InboxTopbarButton type="button" onClick={onOpenMailboxes}>
            <InboxTopbarButtonIcon />
          </InboxTopbarButton>
        </InboxTopbar>
        {!isComposed ? (
          <div>
            {email ? (
              <Email
                email={emailExample[0]}
                onReply={onCompose}
                onSubmit
                onBack={onBack}
              />
            ) : (
              <InboxTable emails={emails} onLetter={onLetter} />
            )}
          </div>
        ) : (
          <ComposeEmail onSubmit={showResults} onBack={onBack} />
        )}
      </InboxContainer>
    </InboxWrap>
  );
};

Inbox.propTypes = {
  emails: EmailsProps.isRequired,
};

export default Inbox;

// region STYLES

const InboxMailboxList = styled.div`
  width: 245px;
  min-width: 245px;
  padding: 30px;
  background-color: ${colorHover};

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 0;
    transform: translateX(calc(-100% - 1px));
    transition: 0.3s;
    z-index: 99;
    height: 100%;
    background-color: ${colorBackground};
  }
`;

const InboxContainer = styled.div`
  padding: 30px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

const InboxWrap = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  background-color: ${colorBackground};

  @media screen and (max-width: 1024px) {
    
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s, z-index 0.3s 0.3s;
      background-color: ${colorAdditional};
      ${right}: 0;
    }

    ${props => props.show && `

      ${InboxMailboxList} {
        transform: translateX(0);
      }

      &:before {
        opacity: 0.2;
        z-index: 1;
        transition: opacity 0.3s, z-index 0s;
        pointer-events: none;
      }

      ${InboxContainer} {
        pointer-events: none;
        text-align: ${left(props)};
      }
    }
  `}
`;

const InboxMailboxListButton = styled(Button)`
  width: 100%;
  margin-bottom: 15px;
  ${marginRight}: 0;
`;

const InboxListButton = styled.button`
  background: transparent;
  width: 100%;
  border: none;
  padding-left: 0;
  padding-right: 0;
  line-height: 1;
`;

const InboxLabels = styled.p`
  font-size: 13px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: ${left};
  ${paddingLeft}: 10px;
`;

const InboxLabelButton = styled(InboxListButton)`
  display: flex;
  padding: 10px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  color: ${colorText};
  align-items: center;

  svg {
    width: 14px;
    height: 14px;
    ${marginRight}: 10px;
    transition: all 0.3s;
    fill: ${colorIcon};
  }

  &:hover {
    background-color: ${colorFolderHover};
  }

  ${props => props.active && `
    cursor: default;
    font-weight: 500;
    background-color: ${colorFolderHover(props)};

    svg {
      fill: ${colorText(props)};
    }
  `}
`;

const getColor = (color) => {
  switch (color) {
    case 'yellow':
      return colorYellow;
    case 'red':
      return colorRed;
    case 'blue':
      return colorBlue;

    default:
      return colorAccent;
  }
};

const InboxColorLabel = styled.span`
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  ${marginRight}: 10px;
  background-color: ${props => getColor(props.color)};
`;

const InboxTopbar = styled.div`
  height: 50px;
  display: none;

  @media screen and (max-width: 1024px) {
    display: ${props => (props.hide ? 'none' : 'block')};
  }
`;

const InboxTopbarButtonIcon = styled(MenuIcon)`
  transition: 0.3s;
  fill: ${colorIcon};
`;

const InboxTopbarButton = styled.button`
  background-color: transparent;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  padding: 0;
  ${marginLeft}: -2px;

  &:hover {

    ${InboxTopbarButtonIcon} {
      fill: ${colorAccent};
    }
  }
`;

// endregion
