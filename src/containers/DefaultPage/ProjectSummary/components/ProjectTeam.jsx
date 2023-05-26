import React from 'react';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import ProjectMember from './ProjectMember';

const Ava1 = `${process.env.PUBLIC_URL}/img/11.png`;
const Ava2 = `${process.env.PUBLIC_URL}/img/12.png`;
const Ava3 = `${process.env.PUBLIC_URL}/img/14.png`;
const Ava4 = `${process.env.PUBLIC_URL}/img/15.png`;
const Ava5 = `${process.env.PUBLIC_URL}/img/photo_notification.png`;

const data = [
  {
    id: 1,
    avatar: Ava1,
    name: 'Peter Jackson',
    post: 'IOS Developer',
  },
  {
    id: 2,
    avatar: Ava2,
    name: 'Lora Melbourn',
    post: 'Android Developer',
  },
  {
    id: 3,
    avatar: Ava3,
    name: 'Cat Mew',
    post: 'Project Manager',
  },
  {
    id: 4,
    avatar: Ava4,
    name: 'Liza Orly',
    post: 'Developer',
  },
  {
    id: 5,
    avatar: Ava5,
    name: 'Michael Bro',
    post: 'Designer',
  },
];

const Summary = () => (
  <Col md={12} lg={4} xl={4}>
    <Card height="auto">
      <CardBody>
        <CardTitleWrap>
          <CardTitle>Project team</CardTitle>
        </CardTitleWrap>
        {data.map(({
          id,
          avatar,
          name,
          post,
        }) => (
          <ProjectMember key={id} img={avatar} name={name} link="/chat" post={post} />
        ))}
      </CardBody>
    </Card>
  </Col>
);

export default Summary;
