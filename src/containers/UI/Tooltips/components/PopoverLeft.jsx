import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';
import Popover from '@/shared/components/Popover';
import { TooltipCardWrap } from './BasicElements';

const PopoverLeft = ({ dir }) => {
  const { t } = useTranslation('common');

  return (
    <TooltipCardWrap sm={12} md={6} lg={6} xl={3}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.tooltips_popovers.popover_on_left')}</CardTitle>
            <CardSubhead>
              Use popover with placement <span className="red-text">left</span>
            </CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar centered>
            <Popover
              trigger="click"
              placement="left"
              header="Popover on Left"
              body="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem
                lacinia quam venenatis vestibulum."
              dir={dir}
            >
              <Button id="PopoverLeft" variant="outline-secondary">
                Popover on Left
              </Button>
            </Popover>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </TooltipCardWrap>
  );
};

PopoverLeft.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default PopoverLeft;
