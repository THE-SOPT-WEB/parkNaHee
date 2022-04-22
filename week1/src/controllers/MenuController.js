import Controller from './index';
import Model from '../models';
import MenuView from '../view/MenuView';
import MenuData from '../mock-data/mock-data.json';

// Menu Component
export default class MenuController extends Controller {
  constructor(target) {
    super(target, new Model(MenuData), new MenuView(target));
    this.init();
    this.addEvents();
  }
  onClickHandler = () => {};

  addEvents = () => {};

  init = () => {
    // this._model.setState({ currentType: 'macdonald' });
    const state = this._model.get();
    console.log('>메뉴 state', state);
    this._view.template(state);
    this._view.render(state);
  };
}
