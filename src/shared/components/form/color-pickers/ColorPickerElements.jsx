import styled from 'styled-components';
import { Popover } from 'react-bootstrap';
import { colorAccent, colorFieldsBorder } from '@/utils/palette';
import { marginRight, marginLeft, paddingLeft } from '@/utils/directions';

export const ColorPickerColor = styled.p`
  ${marginRight}: auto;
  ${marginLeft}: 0;
  margin-top: auto;
  margin-bottom: auto;
  direction: ltr;
  ${paddingLeft}: 10px;
`;

export const ColorPickerButton = styled.button`
  height: 32px;
  width: 160px;
  display: flex;
  cursor: pointer;
  transition: all 0.3s;
  background: transparent;
  padding: 0;
  border: 1px solid ${props => (props.active ? colorAccent : colorFieldsBorder)};
`;

export const ColorPickerColorView = styled.div`
  height: 30px;
  width: 50px;
`;

export const ColorPickerPopover = styled(Popover)`
  width: auto;

  .block-picker {

    & > div:first-child {
      display: none;
    }
  }

  .block-picker, .chrome-picker, .sketch-picker {
    box-shadow: none !important;
  }
`;

