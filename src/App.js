import React  from 'react';

import Box from '@material-ui/core/Box';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

import './App.css';

const App = () => {
   
  // ------------ RENDER ------------------------------
  return (

    <Box component="span" m={1} className="appContainer">
    <Header/>
    <Body />
    <Footer/>
    </Box>
    
  );
}

export default App;