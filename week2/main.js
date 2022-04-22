import pic1 from './assets/김규민.jpeg';
import pic2 from './assets/전희선.jpeg';
import pic3 from './assets/서혜은.jpg';
import pic4 from './assets/황주희.jpeg';
import pic5 from './assets/백지연.png';
import RenderManager from './renderManager';

const $ = (selector) => document.querySelector(selector);
// 동적으로 상호작용하는 elem들만 여기서 제어
const answerList = $('.answer__list');
const retryBtn = $('.buttonList__shuffle');

const quizList = [
  {
    src: pic1,
    answer: '김규민',
  },
  {
    src: pic2,
    answer: '전희선',
  },
  {
    src: pic3,
    answer: '서혜은',
  },
  {
    src: pic4,
    answer: '황주희',
  },
  {
    src: pic5,
    answer: '백지연',
  },
];

const attachEvent = (renderManager) => {
  answerList.addEventListener('click', renderManager._gradeAnswer);
  retryBtn.addEventListener('click', renderManager._init);
};
const init = (quizList) => {
  const renderManager = new RenderManager(quizList);
  renderManager.render();
  attachEvent(renderManager);
};

window.onload = () => {
  init(quizList);
};
