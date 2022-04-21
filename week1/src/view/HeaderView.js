/* HeaderView.js */
import View from './index';

export default class HeaderView extends View {
  constructor(target) {
    super(target);
  }

  // override template()
  template = (state) => {
    console.log('>>state', state);
    return `
            <h1 class="header__title">${state?.text}</h1>
		`;
  };
}
