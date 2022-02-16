import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import ReactDOM from 'react-dom';
import './index.css';
import ChatApp from './App'

ReactDOM.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>,
  document.getElementById('root')
);
