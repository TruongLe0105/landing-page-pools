import React, { useState } from 'react'
import Router from './routes';
import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import Scroll from 'react-scroll';

import "./app/dist/app.css";
import "./index.css";
import 'aos/dist/aos.css';

import AppContext from './appContext.js';

const App = () => {
  AOS.init();

  const Link = Scroll.Link;
  const Element = Scroll.Element;

  return (
    <AppContext.Provider
      value={{
        Link,
        Element,
      }}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;