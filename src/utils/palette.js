import theme from 'styled-theming';
import { darken, lighten } from 'polished';

export const colorBackground = theme('mode', {
  light: 'white',
  dark: '#232329',
});

export const colorBackgroundBody = theme('mode', {
  light: '#f2f4f7',
  dark: '#2a2a31',
});

export const inboxButtonBackground = theme('mode', {
  light: '#f2f4f7',
  dark: '#2a2a31',
});

export const inboxButtonBackgroundHover = theme('mode', {
  light: darken(0.05, '#f2f4f7'),
  dark: lighten(0.05, '#2a2a31'),
});

export const colorHeaderDataPicker = theme('mode', {
  light: '#6db0ff',
  dark: '#063263',
});

export const colorText = theme('mode', {
  light: '#646777',
  dark: '#dddddd',
});

export const colorDarkText = theme('mode', {
  light: '#555555',
  dark: '#dddddd',
});

export const colorTextAdditional = theme('mode', {
  light: '#646777',
  dark: '#999999',
});

export const logoImg = theme('mode', {
  light: `url(${process.env.PUBLIC_URL}/img/logo/logo_light.svg)`,
  dark: `url(${process.env.PUBLIC_URL}/img/logo/logo_dark.svg)`,
});

export const colorHover = theme('mode', {
  light: '#fafbfe',
  dark: '#38373f',
});

export const colorFolderHover = theme('mode', {
  light: '#f0eeee',
  dark: '#ffffff1A',
});

export const colorBorder = theme('mode', {
  light: '#eff1f5',
  dark: '#333246',
});

export const colorIcon = theme('mode', {
  light: '#dddddd',
  dark: '#605f7b',
});

export const imgInvert = theme('mode', {
  light: 'invert(0%)',
  dark: 'invert(100%)',
});

export const colorFieldsBorder = theme('mode', {
  light: '#f2f4f7',
  dark: '#33333a',
});

export const colorBubble = theme('mode', {
  light: 'rgba(242, 244, 247, 0.65)',
  dark: 'rgba(68, 79, 97, 0.65)',
});

export const colorBubbleActive = theme('mode', {
  light: 'rgba(234, 238, 255, 0.6)',
  dark: 'rgba(92, 104, 156, 0.6)',
});

export const colorScrollbar = theme('mode', {
  light: '#B4BFD0',
  dark: '#606071',
});

export const colorFitness = theme('mode', {
  light: '#646777',
  dark: '#ffffff',
});

export const colorEmoji = theme('mode', {
  light: '#232329',
  dark: '#ffffff',
});

export const sidebarColor = theme('mode', {
  light: 'aliceblue',
  dark: '#232329',
});


export const colorAccent = '#4ce1b6';
export const colorLightAccent = '#55e5bb';
export const colorAccentHover = darken(0.1, colorAccent);
export const colorAdditional = '#999999';
export const colorAdditionalHover = darken(0.1, colorAdditional);

export const colorYellow = '#f6da6e';
export const colorLightYellow = '#f4dd87';
export const colorYellowHover = darken(0.1, colorYellow);

export const colorViolet = '#c88ffa';

export const colorRed = '#ff4861';
export const colorDarkRed = '#721c24';
export const colorLightRed = '#f88e7d';
export const colorVeryLightRed = '#f8d7da';
export const colorRedHover = darken(0.1, colorRed);

export const colorBlue = '#70bbfd';
export const colorLightBlue = '#87c3f7';
export const colorBlueHover = darken(0.1, colorBlue);

export const colorBlack = '#000000';
export const colorGray = '#787985';
export const colorLightGray = '#d8dfe9';
export const colorDustyWhite = '#dddddd';
export const colorWhite = '#ffffff';

export const colorGreen = '#b8e986';
export const colorGreenHover = darken(0.1, colorGreen);

export const colorDarkFieldsBorder = '#33333a';
export const colorBlackBackground = theme('mode', {
  light: '#232329',
  dark: '#16161C',
});
// export const colorBackgroundBody= '#f2f4f7';
export const colorLightText = '#646777';
// export const colorHover = '#fafbfe';

export const landingLightTextColor = '#DDDDDD';
export const landingDarkTextColor = '#C7CCCF';
export const landingGreenColor = '#53C8B7';
export const landingBackground = '#16161C';
export const landingAccentColor = '#244153';
export const landingButtonColor = '#2C86A2';
export const landingSaffronColor = '#ffde2c';
export const landingGradient = 'linear-gradient(228deg, rgba(127, 244, 222, 0.95), rgba(56, 199, 225, 1))';
// eslint-disable-next-line max-len
export const landingGradientColor = 'linear-gradient(228deg, darken(rgba(127, 244, 222, 0.95), 5%), darken(rgba(56, 199, 225, 1), 5%))';
export const landingGradientBtn = 'linear-gradient(139.48deg, #FEA63E 6.99%, #F03131 53.88%, #ED05AC 99.96%)';
// eslint-disable-next-line max-len
export const landingGradientBtnHover = 'linear-gradient(228deg, darken(rgb(127, 244, 222), 5%), darken(rgb(62, 59, 224), 5%))';

export const scrollbarStyles = props => `
  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    opacity: 0.3;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 1px solid transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${colorScrollbar(props)};
  }   
`;
