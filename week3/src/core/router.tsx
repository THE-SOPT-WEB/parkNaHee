import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Complete from '../page/Complete';
import Introduce from '../page/Introduce';
import Main from '../page/Main';
import NotFound from '../page/NotFound';
import { ImageType } from '../types';

function Router() {
  const [finalWinner, setFinerWinner] = useState<ImageType>({
    id: '1',
    image: '/assets/swDesign.png',
    alt: '소프트웨어창의융합설계',
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/worldcup" element={<Main setFinalWinner={setFinerWinner} />} />
        <Route path="/complete/*" element={<Complete finalWinner={finalWinner} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
