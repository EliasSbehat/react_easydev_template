import { createGlobalStyle } from 'styled-components';
import {
  colorText,
} from '@/utils/palette';
import {
  left,
  right,
} from '@/utils/directions';

const NotificationStyles = createGlobalStyle`
  .rc-notification {
    position: fixed;
    z-index: 101;
  }
  
  .rc-notification-notice {
    display: block;
    width: auto;
    line-height: 1.5;
    vertical-align: middle;
    position: relative;
  }
  
  .rc-notification-notice-close {
    position: absolute;
    cursor: pointer;
    outline: none;
    font-weight: 700;
    line-height: 1;
    opacity: .2;
    text-decoration: none;
  }
  
  .rc-notification-notice-close-x:after {
    content: '×';
  }
  
  .rc-notification-fade-enter {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused;
  }
  
  .rc-notification-fade-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused;
  }
  
  .rc-notification-fade-enter.rc-notification-fade-enter-active {
    animation-name: rcNotificationFadeIn;
    animation-play-state: running;
  
    &.right-up {
      animation-name: rcNotificationRightFadeIn;
    }
  
    &.left-up {
      animation-name: rcNotificationLeftFadeIn;
    }
  }
  
  .rc-notification-fade-leave.rc-notification-fade-leave-active {
    animation-name: rcDialogFadeOut;
    animation-play-state: running;
  }
  
  @keyframes rcNotificationFadeIn {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes rcNotificationLeftFadeIn {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes rcNotificationRightFadeIn {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes rcDialogFadeOut {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
  
  .rc-notification {
    ${left}: auto !important;
    top: 60px !important;
    height: 0;
  
    & > span {
      height: 0;
      display: block;
    }
  }
  
  .rc-notification-notice-close {
    ${right}: 45px;
    top: 15px;
    font-size: 26px;
    line-height: 1;
    font-weight: 300;
    color: ${colorText};
    text-shadow: none;
    opacity: 0.2;
  
    &:hover {
      opacity: 0.5;
      color: ${colorText};
    }
  }
`;

export default NotificationStyles;
