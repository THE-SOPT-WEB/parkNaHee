export default class RenderManager {
  _currentIdx = this._firstIdx;
  _currentScore = this._firstScore;
  _currentAnswer;
  _isAnswerCorrect = 'idle';

  constructor(items) {
    this.items = items;
    this._setImgItem(this._currentIdx);
  }

  get _firstIdx() {
    return 0;
  }

  get _firstScore() {
    return 0;
  }

  get _lastIdx() {
    return this.items.length - 1;
  }

  get _nextIdx() {
    return this._currentIdx + 1;
  }

  get _currentItemEl() {
    const currentItemId = this._getItemId(this._currentIdx);
    return document.getElementById(currentItemId);
  }

  get _itemWrapper() {
    return document.querySelector('.item');
  }

  get _modalEl() {
    return document.querySelector('.modal');
  }

  get _modalBody() {
    return document.querySelector('.modal__body');
  }

  get _scoreEl() {
    return document.querySelector('.scoreBoard__score');
  }

  _getItemId = (idx) => `item${idx}`;

  _setImgItem = (idx) => {
    const imgEl = document.querySelector('.imageBoard > img');
    imgEl.setAttribute('src', this.items[idx].src);
    imgEl.setAttribute('id', this._getItemId(idx));
    return imgEl;
  };

  _updateScore = () => {
    const scoreEl = this._scoreEl;
    scoreEl.innerHTML = this._currentScore;
  };

  _renderModal = (modalContent) => {
    this._modalEl.classList.remove('hide');
    this._modalBody.innerHTML = modalContent;
  };

  _renderWrongAnswer = () => {
    this._renderModal('킹받아 날 몰라? ㅠ');
    const modalEl = this._modalEl;
    setTimeout(() => {
      modalEl.classList.add('hide');
    }, 500);
  };

  _renderNextItem = () => {
    this._currentScore += 1;
    this._updateScore();
    if (this._nextIdx > this._lastIdx) {
      this._renderModal(`<a href="/">다시 갈기실? 🔁</a>`);
    } else {
      this._setImgItem(this._nextIdx);
      this._currentIdx = this._nextIdx;
    }
  };

  render = () => {
    if (this._isAnswerCorrect === true) this._renderNextItem();
    else if (this._isAnswerCorrect === false) {
      this._renderWrongAnswer();
    } else {
      this._setImgItem(this._currentIdx);
      this._updateScore();
    }
  };

  checkAnswer = (e) => {
    const currentAnswer = String(e?.target.innerText).trim();
    if (currentAnswer && this.items[this._currentIdx].answer !== currentAnswer) {
      this._isAnswerCorrect = false;
    } else {
      this._isAnswerCorrect = true;
    }
    this.render();
  };

  init = () => {
    this._currentIdx = this._firstIdx;
    this._currentScore = this._firstScore;
    this._isAnswerCorrect = 'idle';
    this.render();
  };
}
