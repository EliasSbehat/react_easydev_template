import React, { useState } from 'react';
import { BlockPicker } from 'react-color';
import { OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';
import {
 ColorPickerButton, ColorPickerColor, ColorPickerColorView, ColorPickerPopover, 
} from './ColorPickerElements';

const BlockColorPickerField = ({ name, onChange }) => {
  const [colorValue, setColorValue] = useState({
    color: '#4ce1b6',
    rgb: {
      r: 76, g: 225, b: 182, a: 1,
    },
  });
  const { color, rgb } = colorValue;
  const [active, setActive] = useState(false);
  const handleChange = (changeColor) => {
    setColorValue({ color: changeColor.hex, rgb: changeColor.rgb });
    onChange(changeColor);
  };

  const popover = (
    <ColorPickerPopover>
      <BlockPicker
        color={rgb}
        onChange={handleChange}
      />
    </ColorPickerPopover>
  );
  
  return (
    <div>
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={popover}
        show={active}
        onToggle={() => setActive(prev => !prev)}
      >
        <ColorPickerButton
          type="button"
          active={active}
          id={name}
        >
          <ColorPickerColor>{color}</ColorPickerColor>
          <ColorPickerColorView style={{ backgroundColor: color }} />
        </ColorPickerButton>
      </OverlayTrigger>
    </div>
  );
};

BlockColorPickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default renderComponentField(BlockColorPickerField);
