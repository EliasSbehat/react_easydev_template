import styled from 'styled-components';
import { lighten } from 'polished';
import { colorAccent, colorAdditional, colorText } from '@/utils/palette';

export const SliderWrap = styled.div`
  position: relative;

  .rc-slider {
    margin-top: 45px;

    .rc-slider-dot {
      opacity: 0;
    }

    .rc-slider-rail, .rc-slider-track {
      height: 8px;
    }

    .rc-slider-track {
      background: ${lighten(0.25, colorAccent)};
    }

    .rc-slider-handle {
      border: none;
      box-shadow: none;
      opacity: 1;
      background: ${colorAccent};
      width: 18px;
      height: 18px;
    }

    .rc-slider-mark {
      top: 14px;

      .rc-slider-mark-text-active, .rc-slider-mark-text {
        font-size: 10px;
        color: ${colorText};
      }
    }
  }
`;

export const SliderMin = styled.div`
  color: ${colorAdditional};
  font-size: 12px;
  position: absolute;
  top: -16px;
`;

export const SliderMax = styled(SliderMin)`
  right: 0;
`;
