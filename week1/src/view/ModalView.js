/* modalView */
import View from './index';

export default class ModalView extends View {
  constructor(target) {
    super(target);
  }

  // override template()
  template = () => {
    return `
    <dialog class="modal__content">
     <h1>진짜 주문하실랑가?</h1>
     <a href="/">주문 갈기기</a>
    </dialog>
		`;
  };
}
