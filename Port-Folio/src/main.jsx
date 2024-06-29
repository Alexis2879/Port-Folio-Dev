/*import React from 'react'*/
import {createRoot} from 'react-dom/client';
/*import ReactDOM from 'react-dom/client'*/
import App from './App.jsx'


const container = document.getElementById("root");
const root = createRoot(container);
/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/


root.render(<App />)
/* main.jsx es igual a index.js*/