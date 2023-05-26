import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import styled from 'styled-components';
import {
  left,
  marginRight,
} from '@/utils/directions';
import { colorAccent } from '@/utils/palette';

const SimpleIconsListGreen = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.typography.simple_green_icon_list')}</CardTitle>
          </CardTitleWrap>
          <List>
            <li><p><span className="lnr lnr-checkmark-circle" />Nulla tellus elit, varius non commodo eget</p></li>
            <li><p><span className="lnr lnr-checkmark-circle" />Cum sociis natoque penatibus</p></li>
            <li><p><span className="lnr lnr-checkmark-circle" />Curabitur bibendum ornare dolor</p></li>
          </List>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleIconsListGreen;

// region STYLES

const List = styled.ul`
  text-align: ${left};
  list-style: none;
  padding: 0;

  span {
    position: relative;
    bottom: -2px;
    ${marginRight}: 8px;
    float: ${left};
    color: ${colorAccent};
  }

  li {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// endregion
