import Controller from './index';
import Model from '../models';
import MainView from '../view/MainView';
import { SIDEBAR_TEXT } from '../constants';
import MenuData from '../mock-data/mock-data.json';
import MenuView from '../view/MenuView';
import { store } from '../app';
import CartView from '../view/CartView';
import CartPriceView from '../view/CartPriceView';
import ModalView from '../view/ModalView';

// Main Component
export default class MainController extends Controller {
  _currentIdx;
  constructor(target) {
    super(
      target,
      new Model({ ...SIDEBAR_TEXT, data: MenuData['macdonald'], cart: { total: 0, data: {} } }),
      new MainView(target),
    );
    this.init();
    this.addEvents();
  }
  onShopClickHandler = ({ target }) => {
    const type = target.outerText;
    const state = this._model.get();
    target.classList.add('active');
    switch (type) {
      case '맥도날드':
        this._model.setState({
          ...state,
          currentType: 'macdonald',
          data: MenuData['macdonald'],
        });
        const burgerking = document.querySelector('.burgerking');
        burgerking.classList.remove('active');
        this.renderChildren(this._model.get());
        break;
      case '버거킹':
        this._model.setState({
          ...state,
          currentType: 'burgerking',
          data: MenuData['burgerking'],
        });
        const macdonald = document.querySelector('.macdonald');
        macdonald.classList.remove('active');
        this.renderChildren(this._model.get());
        break;
    }
  };

  onMenuClickHandler = ({ path }) => {
    const state = this._model.get();
    console.log('클릭 state', state);
    for (let item of path) {
      if (item.id) this._currentIdx = Number(item.id);
    }
    console.log(this._currentIdx);
    // 장바구니 추가
    if (!state.cart.data[this._currentIdx]) {
      const newItem = {
        idx: this._currentIdx,
        title: state.data[this._currentIdx].title,
        price: state.data[this._currentIdx].price,
        count: 1,
      };
      this._model.setState({
        ...state,
        cart: {
          total: state.cart.total + state.data[this._currentIdx].price,
          data: {
            ...state.cart.data,
            [this._currentIdx]: newItem,
          },
        },
      });
    } else {
      this._model.setState({
        ...state,
        cart: {
          total: state.cart.total + state.data[this._currentIdx].price,
          data: {
            ...state.cart.data,
            [this._currentIdx]: {
              ...state.cart.data[this._currentIdx],
              count: state.cart.data[this._currentIdx].count + 1,
              price:
                state.data[this._currentIdx].price * (state.cart.data[this._currentIdx].count + 1),
            },
          },
        },
      });
    }
    console.log(this._model.get());
    this.renderChildren(this._model.get());
  };

  itemDeleteHandler = ({ path }) => {
    const state = this._model.get();
    for (let item of path) {
      if (item.id) this._currentIdx = Number(item.id);
    }
    console.log('>>deleteIdx', this._currentIdx);
    if (state.cart.data[this._currentIdx].count <= 1) {
      delete state.cart.data[this._currentIdx];
      this._model.setState({
        ...state,
        cart: {
          total: state.cart.total - state.data[this._currentIdx].price,
          data: { ...this._model.get().cart.data },
        },
      });
    } else {
      // count 로직
      this._model.setState({
        ...state,
        cart: {
          total: state.cart.total - state.data[this._currentIdx].price,
          data: {
            ...state.cart.data,
            [this._currentIdx]: {
              ...state.cart.data[this._currentIdx],
              count: state.cart.data[this._currentIdx].count - 1,
              price:
                state.data[this._currentIdx].price * (state.cart.data[this._currentIdx].count - 1),
            },
          },
        },
      });
    }
    this.renderChildren(this._model.get());
  };

  allDeleteHandler = () => {
    const state = this._model.get();
    delete state.cart.data;
    this._model.setState({
      ...this._model.get(),
      cart: {
        total: 0,
        data: {},
      },
    });
    this.renderChildren(this._model.get());
  };

  orderHandler = () => {
    const modalEl = document.querySelector('.modal');
    modalEl.classList.remove('hide');
    console.log(modalEl.classList);
    const Modal = new ModalView('.modal');
    Modal.template();
    Modal.render();
  };

  addEvents = () => {
    const sidebarBtnGroup = document.querySelectorAll('.sidebar__options');
    for (let item of sidebarBtnGroup) {
      item.addEventListener('click', this.onShopClickHandler);
    }
    const menuBoxGroup = document.querySelectorAll('.menu__list');
    for (let item of menuBoxGroup) {
      item.addEventListener('click', this.onMenuClickHandler);
    }
    const deleteBtnGroup = document.querySelectorAll('.cart__item--delete');
    for (let item of deleteBtnGroup) {
      item.addEventListener('click', this.itemDeleteHandler);
    }
    const cancelBtn = document.querySelector('.cart__footer--cancel');
    cancelBtn.addEventListener('click', this.allDeleteHandler);

    const orderBtn = document.querySelector('.cart__footer--order');
    orderBtn.addEventListener('click', this.orderHandler);
  };

  renderChildren = (state) => {
    console.log('자식컴포넌트 렌더할 때', state);
    const MenuList = new MenuView('.menu__list', state);
    MenuList.template(state);
    MenuList.render(state);
    const Cart = new CartView('.cart__item-group', state);
    Cart.template(state.cart.data);
    Cart.render(state.cart.data);
    const CartPrice = new CartPriceView('.cart__price');
    CartPrice.template(state);
    CartPrice.render(state);
    // const modalEl = document.querySelector('.modal');
    // modalEl.add.remove('hide');
    this.addEvents();
  };

  init = () => {
    const state = this._model.get();
    this._model.setState({
      ...state,
      currentType: 'macdonald',
      data: MenuData['macdonald'],
    });
    this._view.template(state);
    this._view.render(state);
    this.renderChildren(state);
  };

  render = (state) => {
    this._view.template(state);
    this._view.render(state);
    this.renderChildren(state);
  };
}
