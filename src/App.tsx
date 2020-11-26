import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer} from 'react-toastify';

import Routes from './routes';

import GlobalStyle from './styles/global';

import Navbar from './components/Navbar';

const App: React.FC = () => {
  return <>
    <GlobalStyle />
    <Router>
      <Navbar />
      <Routes />
    </Router>
    <ToastContainer autoClose={3000}/>
  </>
}

export default App;