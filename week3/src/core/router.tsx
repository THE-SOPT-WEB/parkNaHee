import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Complete from '../page/Complete';
import Introduce from '../page/Introduce';
import Main from '../page/Main';
import NotFound from '../page/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/worldcup" element={<Main />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
