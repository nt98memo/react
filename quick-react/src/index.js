import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

const data = {'cc':'cc_val', 'dd':'dd_val'};

ReactDOM.render(
  <React.StrictMode>
    <App2  value={{'aa':'aa_val', 'bb':'bb_val'}} {...data}>
        <div>child1</div>
        <div>child2</div>
    </App2>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
