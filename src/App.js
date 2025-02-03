import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
          <Header/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
    </>
  );
}

export default App;
