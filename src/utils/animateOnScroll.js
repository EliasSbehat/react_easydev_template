import SplitType from 'split-type';

export const splitText = () => {
  const scrollElements = document.querySelectorAll('.animate-on-scroll');
  scrollElements.forEach(el => new SplitType(el, {
      split: 'words, lines',
    }));
};

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop
    <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

export default () => {
  const scrollElements = document.querySelectorAll('.animate-on-scroll');
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};

