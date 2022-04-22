/* MenuView.js */
import View from './index';

export default class MenuView extends View {
  constructor(target) {
    super(target);
  }

  // override template()
  template = (state) => {
    const htmlArr = state.map(
      (item, idx) => `
    <li class="menu__box" id="${idx}">
      <img src=${item.src} alt=${item.alt} class="menu__box__img" />
      <div class="menu__box__text-wrapper">
        <strong class="menu__box__title">${item.title}</strong>
        <p class="menu__box__price">${item.price}원</p>
        <p class="menu__box__description">${item.description}</p>
      </div>
    </li>
    `,
    );
    const returnTemplate = htmlArr.join('');
    return `
  ${returnTemplate}
		`;
  };
}
