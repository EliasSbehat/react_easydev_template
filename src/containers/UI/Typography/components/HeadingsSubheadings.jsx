import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { left, marginRight } from '@/utils/directions';

const HeadingsSubheadings = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.typography.heading_with_subheading')}</CardTitle>
            <CardSubhead>Use tags <span className="red-text">h1 to h6</span> with class
              <span className="red-text"> subhead</span>
            </CardSubhead>
          </CardTitleWrap>
          <TypographyCard>
            <div className="typography--inline">
              <h1>H1 Type something </h1>
              <h1 className="subhead">Subheading</h1>
            </div>
            <div className="typography--inline">
              <h2>H2 Type something </h2>
              <h2 className="subhead">Subheading</h2>
            </div>
            <div className="typography--inline">
              <h3>H3 Type something </h3>
              <h3 className="subhead">Subheading</h3>
            </div>
            <div className="typography--inline">
              <h4>H4 Type something </h4>
              <h4 className="subhead">Subheading</h4>
            </div>
            <div className="typography--inline">
              <h5>H5 Type something </h5>
              <h5 className="subhead">Subheading</h5>
            </div>
            <div className="typography--inline">
              <h6>H6 Type something </h6>
              <h6 className="subhead">Subheading</h6>
            </div>
          </TypographyCard>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeadingsSubheadings;

// region STYLES

const TypographyCard = styled.div`
  text-align: ${left};

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
  
  & > div {
    display: flex;
    flex-wrap: wrap;

    * {
      margin-top: auto;
      ${marginRight}: 15px;
    }
  }
`;

// endregion
