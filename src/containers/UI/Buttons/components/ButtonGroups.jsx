import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Button, ButtonToolbar, ButtonGroup } from '@/shared/components/Button';

const ButtonGroups = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.buttons.button_group')}</CardTitle>
          </CardTitleWrap>
          <h5><b>Icon group</b></h5>
          <CardTitleWrap>
            <CardSubhead>Use default button group with
              <span className="red-text"> icons</span>
            </CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <ButtonGroup icons dir="ltr">
              <Button variant="outline-secondary"><span className="lnr lnr-pushpin" /></Button>
              <Button variant="outline-secondary"><span className="lnr lnr-heart-pulse" /></Button>
              <Button variant="outline-secondary"><span className="lnr lnr-cog" /></Button>
              <Button variant="outline-secondary"><span className="lnr lnr-magic-wand" /></Button>
            </ButtonGroup>
          </ButtonToolbar>
          <h5><b>Large buttons</b></h5>
          <CardTitleWrap>
            <CardSubhead>Use default button group</CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <ButtonGroup dir="ltr">
              <Button variant="outline-secondary">Left</Button>
              <Button variant="outline-secondary">Middle</Button>
              <Button variant="outline-secondary">Right</Button>
            </ButtonGroup>
          </ButtonToolbar>
          <h5><b>Justify buttons</b></h5>
          <CardTitleWrap>
            <CardSubhead>
              Use default button group with a prop
              <span className="red-text"> justified</span>
            </CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <ButtonGroup justified dir="ltr">
              <Button variant="primary">Left</Button>
              <Button variant="primary">Middle</Button>
              <Button variant="primary">Right</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonGroups;
