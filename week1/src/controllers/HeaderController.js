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
    // console.log('>>_headerView', this._view);
    this._view.template(HEADER_TEXT);
    this._view.render(HEADER_TEXT);
  };
}
