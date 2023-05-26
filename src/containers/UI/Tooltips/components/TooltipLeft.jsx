import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button, ButtonToolbar } from '@/shared/components/Button';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import Tooltip from '@/shared/components/Tooltip';
import { TooltipCardWrap } from './BasicElements';

const TooltipLeft = ({ dir }) => {
  const { t } = useTranslation('common');

  return (
    <TooltipCardWrap sm={12} md={6} lg={6} xl={3}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.tooltips_popovers.tooltip_on_left')}</CardTitle>
            <CardSubhead>Use default tooltip with placement <span className="red-text">left</span></CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar centered>
            <Tooltip text="Do you like dragons?" dir={dir} placement="left">
              <Button id="TooltipLeft" variant="outline-secondary">
                Tooltip on Left
              </Button>
            </Tooltip>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </TooltipCardWrap>
  );
};

TooltipLeft.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default TooltipLeft;
