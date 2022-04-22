import Header from './controllers/HeaderController';
import Main from './controllers/MainController';

export let store;
const initApp = () => {
  const $header = new Header('.header');
  const $main = new Main('.main');
};

window.addEventListener('DOMContentLoaded', initApp);
