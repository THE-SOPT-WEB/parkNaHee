import Controller from './index';
import Model from '../models';
import SidebarView from '../view/SidebarView';
import { SIDEBAR_TEXT } from '../constants';

// Sidebar Component
export default class SidebarController extends Controller {
  constructor(target) {
    super(target, new Model(SIDEBAR_TEXT), new SidebarView(target));
    this.init();
    this.addEvents();
  }
  onClickHandler = ({ target }) => {
    const type = target.outerText;
    target.classList.add('active');
    // currentType에 따라 데이터 따로 불러오기 위해 상태 저장
    switch (type) {
      case '맥도날드':
        this._model.setState({ currentType: 'macdonald' });
        const burgerking = document.querySelector('.burgerking');
        burgerking.classList.remove('active');
        break;
      case '버거킹':
        this._model.setState({ currentType: 'burgerking' });
        const macdonald = document.querySelector('.macdonald');
        macdonald.classList.remove('active');
        break;
    }
  };

  addEvents = () => {
    const sidebarBtnGroup = document.querySelectorAll('.sidebar__options');
    for (let item of sidebarBtnGroup) {
      item.addEventListener('click', this.onClickHandler);
    }
  };

  init = () => {
    this._model.setState({ currentType: 'macdonald' });
    const state = this._model.get();
    console.log('>sidebar state', state);
    this._view.template(state);
    this._view.render(state);
  };
}
