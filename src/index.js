import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Specials from './components/Specials';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BackStory from './components/BackStory';
import Menu from './components/Menu';
import Home from './components/Home';
import BookingMain from './components/booking/BookingMain';


      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route element={<App/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<BackStory/>}/>
              <Route path="specials" element={<Specials/>}/>
              <Route path="menu" element={<Menu/>}/>
              <Route path="bookings" element={<BookingMain/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );

