import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';
import Popover from '@/shared/components/Popover';
import { TooltipCardWrap } from './BasicElements';

const PopoverTop = ({ dir }) => {
  const { t } = useTranslation('common');

  return (
    <TooltipCardWrap sm={12} md={6} lg={6} xl={3}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.tooltips_popovers.popover_on_top')}</CardTitle>
            <CardSubhead>
              Use popover with placement <span className="red-text">top</span>
            </CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar centered>
            <Popover
              trigger="click"
              placement="top"
              header="Popover on Top"
              body="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem
                lacinia quam venenatis vestibulum."
              dir={dir}
            >
              <Button id="PopoverTop" variant="outline-secondary">
                Popover on Top
              </Button>
            </Popover>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </TooltipCardWrap>
  );
};

PopoverTop.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default PopoverTop;
