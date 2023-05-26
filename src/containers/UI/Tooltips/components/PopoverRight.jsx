import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';
import Popover from '@/shared/components/Popover';
import { TooltipCardWrap } from './BasicElements';

const PopoverRight = ({ dir }) => {
  const { t } = useTranslation('common');

  return (
    <TooltipCardWrap sm={12} md={6} lg={6} xl={3}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.tooltips_popovers.popover_on_right')}</CardTitle>
            <CardSubhead>
              Use popover with placement <span className="red-text">right</span>
            </CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar centered>
            <Popover
              trigger="click"
              placement="right"
              header="Popover on Right"
              body="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem
                lacinia quam venenatis vestibulum."
              dir={dir}
            >
              <Button id="PopoverRight" variant="outline-secondary">
                Popover on Right
              </Button>
            </Popover>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </TooltipCardWrap>
  );
};

PopoverRight.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default PopoverRight;
