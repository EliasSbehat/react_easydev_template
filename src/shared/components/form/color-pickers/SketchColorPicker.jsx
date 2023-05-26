import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';
import {
 ColorPickerButton, ColorPickerColor, ColorPickerColorView, ColorPickerPopover, 
} from './ColorPickerElements';

const SketchColorPickerField = ({ onChange, name }) => {
  const [colorValue, setColorValue] = useState({
    color: '#ff4861',
    rgb: {
      r: 246, g: 129, b: 110, a: 1,
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
      <SketchPicker
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

SketchColorPickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default renderComponentField(SketchColorPickerField);
