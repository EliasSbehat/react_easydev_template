import { Scrollbar } from 'smooth-scrollbar-react';
import styled from 'styled-components';
import { colorScrollbar } from '@/utils/palette';
import { marginRight } from '@/utils/directions';

export default styled(Scrollbar)`
  .scrollbar-track {
    background: transparent;

    &.scrollbar-track-y {
      width: 4px;
      ${marginRight}: 5px;
    }
  }

  .scrollbar-thumb {
    opacity: 0.5;
    transition: height 0.3s;
    cursor: pointer;
    background: ${colorScrollbar};
  }
`;
