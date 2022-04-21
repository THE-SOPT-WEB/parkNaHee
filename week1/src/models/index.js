// 렌더링에 영향 주는 변수 관리, 데이터 가공
export default class Model {
  _state;

  constructor(state) {
    this._state = state;
  }
  // 새로운 state를 받아 기존의 state 덮어 씌우거나 새롭게 정의
  setState = (newState) => {
    this._state = { ...this._state, ...newState };
  };
  // Controller에서 모델에 정의된 상태를 받아서 사용할 수 있도록 인자로 key를 받아 key에 해당하는 값을 리턴
  getState = (key) => this._state[key];
  // state를 전부 가져옴
  get = () => this._state;
}
