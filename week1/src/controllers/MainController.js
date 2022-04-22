import Controller from './index';
import Model from '../models';
import MainView from '../view/MainView';
import { SIDEBAR_TEXT } from '../constants';
import MenuData from '../mock-data/mock-data.json';
import MenuView from '../view/MenuView';
import { store } from '../app';

// Main Component
export default class MainController extends Controller {
  constructor(target) {
    super(
      target,
      new Model({ ...SIDEBAR_TEXT, data: MenuData['macdonald'] }),
      new MainView(target),
    );
    this.init();
    this.addEvents();
  }
  onMenuClickHandler = ({ target }) => {
    const type = target.outerText;
    target.classList.add('active');
    switch (type) {
      case '맥도날드':
        this._model.setState({
          ...SIDEBAR_TEXT,
          currentType: 'macdonald',
          data: MenuData['macdonald'],
        });
        const burgerking = document.querySelector('.burgerking');
        burgerking.classList.remove('active');
        this.renderChildren(this._model.get());
        break;
      case '버거킹':
        this._model.setState({
          ...SIDEBAR_TEXT,
          currentType: 'burgerking',
          data: MenuData['burgerking'],
        });
        const macdonald = document.querySelector('.macdonald');
        macdonald.classList.remove('active');
        this.renderChildren(this._model.get());
        break;
    }
  };

  addEvents = () => {
    const sidebarBtnGroup = document.querySelectorAll('.sidebar__options');
    for (let item of sidebarBtnGroup) {
      item.addEventListener('click', this.onMenuClickHandler);
    }
  };

  renderChildren = (state) => {
    // const Sidebar = new Controller('.sidebar');
    // const MenuList = new Controller('.menu');
    const MenuList = new MenuView('.menu__list', state);
    MenuList.template(state.data);
    MenuList.render(state.data);
  };

  init = () => {
    this._model.setState({
      ...SIDEBAR_TEXT,
      currentType: 'macdonald',
      data: MenuData['macdonald'],
    });
    const state = this._model.get();
    console.log('>sidebar state', state);
    this._view.template(state);
    this._view.render(state);
    this.renderChildren(state);
    //
  };
}
