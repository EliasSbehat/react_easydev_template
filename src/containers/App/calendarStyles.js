import { createGlobalStyle } from 'styled-components';
import { colorBackground, colorText } from '@/utils/palette';

const CalendarStyles = createGlobalStyle`
  
  .rbc-overlay {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    color: ${colorText};
    background-color: ${colorBackground};
    z-index: 100;
  }
`;

export default CalendarStyles;
