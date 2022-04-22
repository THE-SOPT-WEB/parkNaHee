/* HeaderView.js */
import View from './index';

export default class MainView extends View {
  constructor(target) {
    super(target);
  }

  // override template()
  template = (state) => {
    console.log('템플릿 안의 state', state);
    return `
    <aside class="sidebar">
      <h2 class="sidebar__title">${state?.title}</h2>
      <ul class="sidebar__options-wrapper">
        <li class="sidebar__options"><button class='active macdonald'>${state?.category['macdonald']}</button></li>
        <li class="sidebar__options"><button class='burgerking'>${state?.category['burgerking']}</button></li>
      </ul>
    </aside>
    <section class="menu">
      <ul class="menu__list">
      </ul>
    </section>
    <section class="cart">
    <h2 class="cart__title">장바구니</h2>
    <div class="cart__item">
    </div>
    <div class="cart__price">
      <p class="cart__price--title">누적 금액</p>
      <p class="cart__price--content"></p>
    </div>
    <div class="cart__footer">
      <button class="cart__footer--order cart__footer--button">주문하기</button>
      <button class="cart__footer--cancel cart__footer--button">취소하기</button>
    </div>
    </section>
		`;
  };

  render = (state) => {
    this._target().innerHTML = this.template(state);
  };
}
