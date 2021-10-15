import React from 'react';
import ReactDOM from 'react-dom';
import {FooterMenu, HeaderMenu} from './Component/Header_Footer';
import './index.css';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <HeaderMenu/>
  </React.StrictMode>,
  document.getElementById("Head_Menu"),
   reportWebVitals(console.log)
);
ReactDOM.render(
  <React.StrictMode>
    <FooterMenu/>
  </React.StrictMode>,
  document.getElementById("Footer_Menu"),
   reportWebVitals(console.log)

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
