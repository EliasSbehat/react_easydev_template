import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { left } from '@/utils/directions';

const BoldHeadings = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.typography.bold_heading')}</CardTitle>
          </CardTitleWrap>
          <TypographyCard>
            <h1><b>H1 Type something</b></h1>
            <h2><b>H2 Type something</b></h2>
            <h3><b>H3 Type something</b></h3>
            <h4><b>H4 Type something</b></h4>
            <h5><b>H5 Type something</b></h5>
            <h6><b>H6 Type something</b></h6>
          </TypographyCard>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BoldHeadings;

// region STYLES

const TypographyCard = styled.div`
  text-align: ${left};

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
`;

// endregion
