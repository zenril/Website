import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '@Containers/App';
import { GlobalStateProvider } from '@hooks/useGlobalState';


const state = { 
  theme : 'theme_main'
}
 
ReactDOM.render((
  <GlobalStateProvider initialState={state}>
    <App />
  </GlobalStateProvider>
), document.getElementById("container"));