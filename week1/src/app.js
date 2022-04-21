import Header from './controllers/HeaderController';

const initApp = () => {
  const $header = new Header('.header');
  console.log('>>>>$header', $header);
};

window.addEventListener('DOMContentLoaded', initApp);
