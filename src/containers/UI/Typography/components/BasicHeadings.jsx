import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { left } from '@/utils/directions';

const BasicHeadings = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.typography.basic_heading')}</CardTitle>
            <CardSubhead>
              Use tags <span className="red-text">h1 to h6</span> for get necessary heading.
            </CardSubhead>
          </CardTitleWrap>
          <TypographyCard>
            <h1>H1 Type something </h1>
            <h2>H2 Type something </h2>
            <h3>H3 Type something </h3>
            <h4>H4 Type something </h4>
            <h5>H5 Type something </h5>
            <h6>H6 Type something </h6>
          </TypographyCard>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicHeadings;

// region STYLES

const TypographyCard = styled.div`
  text-align: ${left};

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
`;

// endregion
