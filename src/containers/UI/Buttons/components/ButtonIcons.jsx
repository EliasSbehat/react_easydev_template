import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';
import SettingsIcon from 'mdi-react/SettingsIcon';
import SendIcon from 'mdi-react/SendIcon';
import CommentAlertOutlineIcon from 'mdi-react/CommentAlertOutlineIcon';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';
import ThumbUpOutlineIcon from 'mdi-react/ThumbUpOutlineIcon';
import Expand from '@/shared/components/Expand';

const ButtonIcons = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.buttons.buttons_icons_and_expand')}</CardTitle>
          </CardTitleWrap>
          <h5><b>Icon buttons</b></h5>
          <ButtonToolbar>
            <Button variant="outline-secondary"><SettingsIcon /><span>Settings</span></Button>
            <Button disabled><SettingsIcon /><span>Disabled</span></Button>
            <Button variant="outline-primary"><span>Settings</span><SendIcon /></Button>
            <Button variant="primary"><SettingsIcon /><span>Settings</span></Button>
            <Button variant="success"><ThumbUpOutlineIcon /><span>Success</span></Button>
            <Button variant="warning"><CommentAlertOutlineIcon /><span>Danger</span></Button>
            <Button variant="danger"><CloseCircleOutlineIcon /><span>Warning</span></Button>
          </ButtonToolbar>

          <h5><b>Expand</b></h5>
          <ButtonToolbar>
            <Expand title="Expand" variant="outline-secondary" />
            <Expand variant="primary" title="Settings" />
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonIcons;
