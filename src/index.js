
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state'

import React from 'react';
import ReactDOM from 'react-dom';

import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';


 let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('LeonidApp')
  );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);

reportWebVitals();
