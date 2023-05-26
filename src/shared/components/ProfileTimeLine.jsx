import React from 'react';
import TimeLineItem from '@/shared/components/TimeLineItem';
import styled from 'styled-components';
import { colorDustyWhite, colorText } from '@/utils/palette';
import { left } from '@/utils/directions';

const Ava1 = `${process.env.PUBLIC_URL}/img/14.png`;
const Ava2 = `${process.env.PUBLIC_URL}/img/15.png`;

const data = [
  {
    id: 1,
    type: 'work',
    title: 'Business meetup',
    date: '3 hours ago',
    text: `Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
    sometimes additions recommend fat our.`,
    img: '',
  },
  {
    id: 2,
    type: 'video',
    title: 'Video conference with client',
    date: '5 hours ago',
    text: `Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
    sometimes additions recommend fat our.`,
    img: '',
  },
  {
    id: 3,
    type: '',
    title: 'Call to Jovanna',
    date: '8 hours ago',
    text: `Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
    sometimes additions recommend fat our.`,
    img: Ava1,
  },
  {
    id: 4,
    type: 'file',
    title: 'Create offer. Prepare document',
    date: 'Yesterday at 18:30',
    text: `Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
    sometimes additions recommend fat our.`,
    img: '',
  },
  {
    id: 5,
    type: '',
    title: 'Conversation with Philip',
    date: '21.03.2017',
    text: `Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
    sometimes additions recommend fat our.`,
    img: Ava2,
  },
];

const TimelineHistory = () => (
  <TimeLineWrap>
    {data.map(({ id, text, ...props }) => (
      <TimeLineItem key={id} {...props}>
        <p>{text}</p>
      </TimeLineItem>
    ))}
  </TimeLineWrap>
);

export default TimelineHistory;

// region STYLES

const TimeLineWrap = styled.div`
    position: relative;
    color: ${colorText};

    &:before {
      content: "";
      background-color: ${colorDustyWhite};
      width: 1px;
      height: 100%;
      position: absolute;
      ${left}: 50%;
    }

    p {
      margin-top: 5px;
    }

  @media screen and (max-width: 991px) {

    &:before {
      ${left}: 25px;
    }
  }
`;

// endregion
