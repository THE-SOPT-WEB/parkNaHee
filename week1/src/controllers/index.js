// 비즈니스 로직, 이벤트 핸들링을 담당하는 뼈대 Component
// target이 되는 돔, model, view를 받는다

export default class Controller {
  _target;
  _model;
  _view;

  constructor(target, model, view) {
    this._target = target;
    this._model = model;
    this._view = view;

    this.init();
    this.render();
    this.addEvents();
    this.initChildren();
  }

  setState = (newState) => {
    this._model.setState(newState);
    this.render(this._model.get());
  };

  render = (state) => {
    this._view.render(state);
  };

  // component 렌더링 직전 처리할 비즈니스 로직 -> 초기값 설정 등 ?
  init = () => {};

  mount = () => {};

  // 이벤트 핸들러 부착
  addEvents = () => {};

  // 자식 컴포넌트 생성
  initChildren = () => {};
}
