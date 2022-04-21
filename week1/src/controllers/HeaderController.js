import Controller from './index';
import Model from '../models';
import HeaderView from '../view/HeaderView';
import { HEADER_TEXT } from '../constants';

// Header Component
export default class HeaderController extends Controller {
  constructor(target) {
    super(target, new Model(HEADER_TEXT), new HeaderView(target));
    this.init();
  }

  init = () => {
    const state = this._model.get();
    console.log('>>header state', state);
    this._view.template(state);
    this._view.render(state);
  };
}
