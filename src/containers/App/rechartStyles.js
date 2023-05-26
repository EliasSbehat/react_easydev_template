import { createGlobalStyle } from 'styled-components';
import {
 colorAdditional, colorBackground, colorBackgroundBody, colorText, 
} from '@/utils/palette';
import { direction } from '@/utils/directions';

const RechartStyles = createGlobalStyle`
  
  path.recharts-sector {
    stroke: ${colorBackground};
  }

  .recharts-legend-item-text {
    color: ${colorText};
  }

  .recharts-text {
    fill: ${colorText};
  }

  .recharts-cartesian-axis-line {
    opacity: 0;
  }

  .recharts-cartesian-grid-horizontal line, .recharts-cartesian-grid-vertical line {
    fill: ${colorAdditional};
    opacity: 0.2;
  }

  .recharts-brush-slide {
    fill: ${colorBackgroundBody};
    fill-opacity: 1;
  }

  .recharts-brush-traveller {
    transform: translateX(-8px);

    rect {
      fill: ${colorBackground};
      width: 12px;
      stroke: #dee3eb;
    }

    line {
      stroke: ${colorText};
      transform: translateX(4px);
    }

    &:first-of-type {
      transform: translateX(0);
    }
  }

  .recharts-tooltip-cursor {
    fill-opacity: 0.2;
  }
  
  .recharts-cartesian-axis-ticks {
    direction: ltr;
  }

  .recharts-default-legend {
    direction: ${direction};
  }

  .recharts-tooltip-wrapper {

   .recharts-default-tooltip {
    background: ${colorBackgroundBody} !important;
    border: 0 !important;
   }

  }
`;

export default RechartStyles;
