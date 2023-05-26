import React from 'react';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import Gallery from './Gallery';
import Items from './imgs';

const tags = [
  { tag: 'sneakers', title: 'sneakers' },
  { tag: 'cap', title: 'cap' },
  { tag: 'watch', title: 'watch' },
  { tag: 'glasses', title: 'glasses' },
];

const FilterGallery = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <CardTitleWrap>
          <CardTitle>Filter Gallery</CardTitle>
        </CardTitleWrap>
        <Gallery images={Items} tags={tags} />
      </CardBody>
    </Card>
  </Col>
);

export default FilterGallery;
