// 모델에서 가져온 상태를 토대로 화면을 구성
export default class View {
  _target;
  constructor(target) {
    this._target = () => document.querySelector(target);
    this.template();
    this.render();
  }

  template = (state) => {
    return `<div>${state}</div>`;
  };

  render = (state) => {
    this._target().innerHTML = this.template(state);
  };
}
