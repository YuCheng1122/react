import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App2 from './Ch2-1/App2';

import App from './Ch5/Ch5-2';


setInterval(() =>{


  ReactDOM.render(   //render function to deal with the HTML
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);

},1000)