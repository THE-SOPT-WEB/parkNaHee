import { ImageType } from '../types';

interface coursesType {
  [key: string]: ImageType;
}

const courses: coursesType = {
  '1': {
    id: '1',
    image: '/assets/swDesign.png',
    alt: '소프트웨어창의융합설계',
  },
  '2': {
    id: '2',
    image: '/assets/database.png',
    alt: '데이터베이스',
  },
  '3': {
    id: '3',
    image: '/assets/operatingSystem.png',
    alt: '운영체제',
  },
  '4': {
    id: '4',
    image: '/assets/automata.png',
    alt: '오토마타 및 형식언어',
  },
  '5': {
    id: '5',
    image: '/assets/computernetwork.jpeg',
    alt: '정보통신공학',
  },
  '6': {
    id: '6',
    image: '/assets/opencv.png',
    alt: '오픈SW 프로젝트',
  },
  '7': {
    id: '7',
    image: '/assets/algorithm.png',
    alt: '컴퓨터 알고리즘',
  },
  '8': {
    id: '8',
    image: '/assets/ai.png',
    alt: '인공지능',
  },
};

export default courses;
