import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import {
  DropdownMenu, Dropdown, DropdownItem, DropdownDivider, DropdownToggle,
} from '@/shared/components/Dropdown';

const ButtonDropdown = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.buttons.button_dropdown')}</CardTitle>
          </CardTitleWrap>
          <h5><b>Basic buttons with dropdown</b></h5>
          <CardTitleWrap>
            <CardSubhead>Use default dropdown toggle</CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <Dropdown>
              <DropdownToggle variant="outline-secondary">
                <span>Dropdown <ChevronDownIcon /></span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownToggle variant="secondary">
                <span>Dropdown <ChevronDownIcon /></span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownToggle variant="outline-primary">
                <span>Dropdown <ChevronDownIcon /></span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ButtonToolbar>
          <h5><b>Buttons with divided dropdown</b></h5>
          <CardTitleWrap>
            <CardSubhead>Use default dropdown toggle with <span className="red-text">button</span></CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <Dropdown className="btn-group" dir="ltr">
              <Button variant="outline-secondary">Dropdown</Button>
              <DropdownToggle split variant="outline-secondary">
                <ChevronDownIcon />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="btn-group" dir="ltr">
              <Button variant="outline-primary">Dropdown</Button>
              <DropdownToggle variant="outline-primary">
                <ChevronDownIcon />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="btn-group" dir="ltr">
              <Button variant="outline-primary">Dropdown</Button>
              <DropdownToggle variant="primary">
                <ChevronDownIcon />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="btn-group" dir="ltr">
              <Button variant="primary">Dropdown</Button>
              <DropdownToggle variant="primary">
                <ChevronDownIcon />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="btn-group" dir="ltr">
              <Button variant="primary" disabled>Dropdown</Button>
              <DropdownToggle disabled variant="primary">
                <ChevronDownIcon />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonDropdown;
