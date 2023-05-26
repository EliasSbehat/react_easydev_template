import theme from 'styled-theming';

export const direction = theme('direction', {
  ltr: 'ltr',
  rtl: 'rtl',
});

export const right = theme('direction', {
  ltr: 'right',
  rtl: 'left',
});

export const left = theme('direction', {
  ltr: 'left',
  rtl: 'right',
});

export const marginRight = theme('direction', {
  ltr: 'margin-right',
  rtl: 'margin-left',
});

export const marginLeft = theme('direction', {
  ltr: 'margin-left',
  rtl: 'margin-right',
});

export const paddingLeft = theme('direction', {
  ltr: 'padding-left',
  rtl: 'padding-right',
});

export const paddingRight = theme('direction', {
  ltr: 'padding-right',
  rtl: 'padding-left',
});

export const borderTopLeftRadius = theme('direction', {
  ltr: 'border-top-left-radius',
  rtl: 'border-top-right-radius',
});

export const borderBottomLeftRadius = theme('direction', {
  ltr: 'border-bottom-left-radius',
  rtl: 'border-bottom-right-radius',
});

export const borderTopRightRadius = theme('direction', {
  ltr: 'border-top-right-radius',
  rtl: 'border-top-left-radius\'',
});

export const borderBottomRightRadius = theme('direction', {
  ltr: 'border-bottom-right-radius',
  rtl: 'border-bottom-left-radius',
});

export const borderLeft = theme('direction', {
  ltr: 'border-left',
  rtl: 'border-right',
});

export const borderRight = theme('direction', {
  ltr: 'border-right',
  rtl: 'border-left',
});

export const translate = theme('direction', {
  ltr: 'translate(-50%, -50%);',
  rtl: 'translate(50%, -50%);',
});

export const mirrorY = theme('direction', {
  ltr: 'scale(1, 1)',
  rtl: 'scale(1, -1)',
});

export const borderRightColor = theme('direction', {
  ltr: 'border-right-color',
  rtl: 'border-left-color',
});

export const flexFlow = theme('direction', {
  ltr: 'row nowrap',
  rtl: 'row-reverse nowrap',
});

export const row = theme('direction', {
  ltr: 'row',
  rtl: 'row-reverse',
});

export const sidebarClose = theme('direction', {
  ltr: 'translateX(0)',
  rtl: 'translateX(0)',
});

export const sidebarNoDesktop = theme('direction', {
  ltr: 'translateX(calc(0%))',
  rtl: 'translateX(calc(100%))',
});

export const borderRadius = theme('border', {
  on: '15px',
  off: '5px',
});

export const shadow = theme('shadow', {
  on: '0 10px 30px 1px rgba(0, 0, 0, 0.06)',
  off: 'none',
});
