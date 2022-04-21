/* HeaderView.js */
import View from './index';

export default class SidebarView extends View {
  constructor(target) {
    super(target);
  }

  // override template()
  template = (state) => {
    return `
      <h2 class="sidebar__title">${state?.title}</h2>
      <ul class="sidebar__options-wrapper">
        <li class="sidebar__options"><button class='active macdonald'>${state?.category['macdonald']}</button></li>
        <li class="sidebar__options"><button class='burgerking'>${state?.category['burgerking']}</button></li>
      </ul>
		`;
  };
}
