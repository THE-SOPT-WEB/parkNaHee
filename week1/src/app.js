import Header from './controllers/HeaderController';
import Sidebar from './controllers/SidebarController';

const initApp = () => {
  const $header = new Header('.header');
  const $sidebar = new Sidebar('.sidebar');
  // console.log('>>>>$header', $header);
};

window.addEventListener('DOMContentLoaded', initApp);
