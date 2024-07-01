import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { NextUIProvider } from '@nextui-org/system';
import NavBar from './components/NavBar';

const App = () => {
  const navigate = useNavigate();
  return (
    <>

  <NextUIProvider navigate={navigate}>
    <NavBar/>
    <div className='h-screen'>
      <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/cart' element= {<Cart/>} />
      </Routes>
    </div>
  </NextUIProvider>
  </>
  );
};

export default App;
