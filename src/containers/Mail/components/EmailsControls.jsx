import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuDownIcon from 'mdi-react/MenuDownIcon';
import ReloadIcon from 'mdi-react/ReloadIcon';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import { Button } from '@/shared/components/Button';
import { EmailsProps } from '@/shared/prop-types/EmailProps';
import {
  colorAccent,
  colorBorder, 
  colorFieldsBorder,
  colorHover,
  colorIcon,
  colorText,
} from '@/utils/palette';
import {
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  paddingLeft,
  paddingRight,
  marginRight,
  right,
  marginLeft,
} from '@/utils/directions';
import { DropdownMenu, Dropdown, DropdownItem } from '@/shared/components/Dropdown';
import { CheckBoxField } from '@/shared/components/form/CheckBox';
import Pagination from './Pagination';


const EmailsControls = ({
 emails, onChangePage, onChangeSelectAll, isSelectedAll,
}) => (
  <InboxEmailControlsWrap>
    <InboxEmailControls>
      <CheckBoxField
        onChange={event => onChangeSelectAll(event.target.checked)}
        styleType="colored-click"
        checked={isSelectedAll}
        name="all"
      />
      <InboxEmailControlFilter>
        <Button
          as={Dropdown.Toggle}
          variant="outline-secondary"
          size="sm"
        >
          <span>Filter By <MenuDownIcon /></span>
        </Button>
        <DropdownMenu>
          <DropdownItem>Name</DropdownItem>
          <DropdownItem>Date</DropdownItem>
          <DropdownItem>Favorite</DropdownItem>
        </DropdownMenu>
      </InboxEmailControlFilter>
      <InboxEmailControlReload
        variant="outline-secondary"
        size="sm"
        onClick={e => e.preventDefault()}
      >
        <ReloadIcon />
      </InboxEmailControlReload>
    </InboxEmailControls>
    <InboxEmailControlsRight>
      <InboxControlSearch>
        <input placeholder="Search" />
        <InboxSontrolSearchIconWrap>
          <MagnifyIcon />
        </InboxSontrolSearchIconWrap>
      </InboxControlSearch>
      <Pagination items={emails} onChangePage={onChangePage} initialPage={1} />
    </InboxEmailControlsRight>
  </InboxEmailControlsWrap>
);

EmailsControls.propTypes = {
  emails: EmailsProps.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeSelectAll: PropTypes.func.isRequired,
  isSelectedAll: PropTypes.bool.isRequired,
};

export default EmailsControls;

// region STYLES

const InboxEmailControlsWrap = styled.div`
  position: relative;
`;

const InboxEmailControls = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  border-bottom: 1px solid ${colorBorder};
  align-items: center;
  padding-bottom: 20px;

  button {
    padding-top: 2px;
    padding-bottom: 2px;
    height: 30px;
    ${paddingRight}: 20px;
    ${paddingLeft}: 25px;
    margin-bottom: 0;
  }
  
  label {
    display: block;
    margin: 0;
  }
`;

const InboxEmailControlFilter = styled(Dropdown)`
  ${marginRight}: 15px;
  ${marginLeft}: 16px;
  
  & > .btn {
    margin-left: 0;
    margin-right: 0;
  }
`;

const InboxEmailControlReload = styled(Button)`
  padding: 4px 8px;

  svg {
    margin-top: -3px;
  }

  @media screen and (max-width: 480px) {
    ${marginRight}: 0;
  }

`;

const InboxEmailControlsRight = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  ${right}: 0;

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: -50px;
    ${right}: 0;
  }
`;

const InboxSontrolSearchIconWrap = styled.div`
  width: 28px;
  padding: 5px;
  height: 28px;
  transition: 0.3s;
  ${borderTopRightRadius}: 14px;
  ${borderBottomRightRadius}: 14px;
  background: ${colorFieldsBorder};

  svg {
    height: 16px;
    width: 16px;
    margin-top: -3px;
    transition: 0.3s;
    fill: ${colorIcon};
  }
`;

const InboxControlSearch = styled.div`
  display: flex;
  ${marginRight}: 16px;

  input {
    height: 28px;
    transition: all 0.3s;
    border: 1px solid transparent;
    width: 120px;
    ${paddingLeft}: 10px;
    ${borderTopLeftRadius}: 14px;
    ${borderBottomLeftRadius}: 14px;
    color: ${colorText};
    background: ${colorHover};

    &:focus {
      border-color: ${colorAccent};
      outline: none;

      & + ${InboxSontrolSearchIconWrap} {
        background-color: ${colorAccent};

        svg {
          fill: white;
        }
      }
    }

    &::-webkit-input-placeholder {
      color: ${colorIcon};
    }
    &::-moz-placeholder {
      color: ${colorIcon};
    }
    /* Firefox 19+ */
    &:-moz-placeholder {
      color: ${colorIcon};
    }
    /* Firefox 18- */
    &:-ms-input-placeholder {
      color: ${colorIcon};
    }
  }


  @media screen and (max-width: 620px) {
    ${marginRight}: 8px;

    input {
      width: 90px;
    }
  }
`;

// endregion
