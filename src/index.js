
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store-redux'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';



 let rerenderEntireTree = (state) => {
  ReactDOM.render(

    // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App //state={state}

       />
       </Provider>
       </BrowserRouter>,
    // /* </React.StrictMode>, */
    document.getElementById('root')
  );
}




rerenderEntireTree();
// rerenderEntireTree(store.getState());
 store.subscribe(()=>{
   
   rerenderEntireTree();
 });


reportWebVitals();
