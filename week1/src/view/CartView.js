/* CartView.js */
import View from './index';

export default class CartView extends View {
  constructor(target) {
    super(target);
  }

  // override template()
  template = (state) => {
    const htmlArr = Object.values(state).map(
      (item, idx) => `
    <li class="cart__item" id="${item.idx}">
      <p>${item.title}</p>
      <input value=${item.count} readonly></input>
      <p>${item.price}</p>
      <button class="cart__item--delete">X</button>
    </li>
    `,
    );
    const returnTemplate = htmlArr.join('');
    return `
  ${returnTemplate}
		`;
  };
}
