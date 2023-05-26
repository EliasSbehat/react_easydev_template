import theme from 'styled-theming';

export const shadow = theme('shadow', {
  on: '0 10px 30px 1px rgba(0, 0, 0, 0.06)',
  off: 'none',
});

export const borderRadius = theme('border', {
  on: '15px',
  off: '5px',
});
