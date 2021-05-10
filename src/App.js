
import React, { useState } from 'react';
import './index.css'

import NavR from './NavR';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {


 return(
   <>
  
<BrowserRouter>
  <NavR/>
  </BrowserRouter>
   </>
 )
}

export default App;
