/* CartPrice.js */
import View from './index';

export default class CartPriceView extends View {
  constructor(target) {
    super(target);
  }

  // override template()
  template = (state) => {
    return `
    <p class="cart__price--title">누적 금액</p>
    <p class="cart__price--content">${state?.cart?.total}</p>
		`;
  };
}
