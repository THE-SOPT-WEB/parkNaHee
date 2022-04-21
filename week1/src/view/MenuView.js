/* MenuView.js */
import View from './View';

export default class AppView extends View {
  constructor(target) {
    super(target);
  }

  // override template()
  template = (state) => {
    const { text } = state;
    return `
			<div class="header">${text}</div>
			<div class="container">this is container</div>
		`;
  };
}
