import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import {
  Card, CardBody,
} from '@/shared/components/Card';

const Grids = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.grids.title')}</h3>
          <h3 className="page-subhead subhead">Here is the examples of grids you can use in any component you need
          </h3>
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12}>
          <GridCard>
            <GridCardBody>
              <p>col-md-12</p>
            </GridCardBody>
          </GridCard>
        </Col>
      </Row>
      <Row>
        <Col md={11} sm={12}>
          <GridCard>
            <GridCardBody>
              <p>col-md-11</p>
            </GridCardBody>
          </GridCard>
        </Col>
        <Col md={1} sm={12}>
          <GridCard>
            <GridCardBody>
              <GridSmall>col-md-1</GridSmall>
            </GridCardBody>
          </GridCard>
        </Col>
      </Row>
      <Row>
        <Col md={10} sm={12}>
          <GridCard>
            <GridCardBody>
              <p>col-md-10</p>
            </GridCardBody>
          </GridCard>
        </Col>
        <Col md={2} sm={12}>
          <GridCard>
            <GridCardBody>
              <GridSmall>col-md-2</GridSmall>
            </GridCardBody>
          </GridCard>
        </Col>
      </Row>
      <Row>
        <Col md={9} sm={12}>
          <GridCard>
            <GridCardBody>
              <p>col-md-9</p>
            </GridCardBody>
          </GridCard>
        </Col>
        <Col md={3} sm={12}>
          <GridCard>
            <GridCardBody>
              <p>col-md-3</p>
            </GridCardBody>
          </GridCard>
        </Col>
      </Row>
      <Row>
        <Col md={8} sm={12}>
          <GridCard>
            <GridCardBody>
              <p>col-md-8</p>
            </GridCardBody>
          </GridCard>
        </Col>
        <Col md={4} sm={12}>
          <GridCard>
            <GridCardBody>
              <p>col-md-4</p>
            </GridCardBody>
          </GridCard>
        </Col>
      </Row>
      <Row>
        <Col md={7} sm={12}>
          <GridCard>
            <GridCardBody>
              <p>col-md-7</p>
            </GridCardBody>
          </GridCard>
        </Col>
        <Col md={5} sm={12}>
          <GridCard>
            <GridCardBody>
              <p>col-md-5</p>
            </GridCardBody>
          </GridCard>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12}>
          <GridCard>
            <GridCardBody>
              <p>col-md-6</p>
            </GridCardBody>
          </GridCard>
        </Col>
        <Col md={6} sm={12}>
          <GridCard>
            <GridCardBody>
              <p>col-md-6</p>
            </GridCardBody>
          </GridCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Grids;

// region STYLES

const GridCard = styled(Card)`
  padding-bottom: 20px;

  p {
    margin-bottom: 0;
    padding: 20px 15px;
  }
`;

const GridCardBody = styled(CardBody)`
  padding: 0;
  text-align: center;
  height: 62px;
`;

const GridSmall = styled.p`
  
  @media screen and (min-width: 768px) and (max-width: 1920px) {
    display: none;
  }
`;

// endregion
