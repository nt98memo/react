import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parent from './Parent';
import Loop from './Loop';
import MethodAndIf from './MethodAndIf';
import Event from './Event';
import LifeCycle from './LifeCycle';
import Routing from './Routing';
import reportWebVitals from './reportWebVitals';

const data = {'cc':'cc_val', 'dd':'dd_val', 'defaultKey1':'childToParentValue'};
const data2 = [{'key1':'1val1', 'key2':'1val2'},{'key1':'2val1', 'key2':'2val2'},{'key1':'3val1', 'key2':'3val2'}];

ReactDOM.render(
  <React.StrictMode>
    <Parent  value={{'aa':'aa_val', 'bb':'bb_val'}} {...data}>
        <div>child1</div>
        <div>child2</div>
    </Parent>
    {data2.map((obj, index) => {return <Loop key={obj.key1} {...obj} />})}
    <MethodAndIf aa="aa_val" bb="bb_val" cc="cc_val12"/>
    <MethodAndIf />
    <Event defaultKey1="event初期値" defaultKey2="eventbb" defaultKey3="eventcc"/>
    <LifeCycle defaultKey1="LifeCycleaa" defaultKey2="LifeCyclebb" defaultKey3="LifeCyclecc" />
    <Routing defaultKey1="Routingaa" defaultKey2="Routingbb" defaultKey3="Routingcc"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
