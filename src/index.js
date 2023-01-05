import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './assets/scss/style.scss'



import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  BrowserRouter,
  
  
} from "react-router-dom";



import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          
          
        </Route>
                    {/* User Routes */}
        {/* <Route path="user" element={<UserTemplate />}>
          <Route index element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="*" element={<Navigate to={""} />}></Route>
        </Route> */}
      </Routes>
  </BrowserRouter>
  
);

