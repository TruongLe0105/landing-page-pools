import React from 'react'
import Router from './routes';
import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';

import "./app/dist/app.css";
import "./index.css";
import 'aos/dist/aos.css';

const App = () => {
  AOS.init();

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App;