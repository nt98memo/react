import React, {Component} from 'react';
import { BrowserRouter as Router, Link, NavLink , Route, Switch } from 'react-router-dom';
import App from './App';
import Event from './Event';
import LifeCycle from './LifeCycle';
import './App.css';

class Routing extends Component {
    constructor(props){
        super(props);
        this.refObj1 = React.createRef();
        this.state = {
            key1 : props.defaultKey1,
            key2 : props.defaultKey2,
            key3 : props.defaultKey3
        };
    }
    func1(arg1, e) {
        this.setState({key1: e.target.value + arg1});
        this.refObj1.current.textContent = e.target.value + ' ref';
    }
    render() {
      return (
         <Router>
            <div>-----------------Routing----------------------</div>
            <ul>
              <li><Link to="/">top</Link></li>
              <li><Link to={"/a/" + this.state.key2 + "/" + this.state.key3}>Event</Link></li>
              <li><Link to="/b">LifeCycle</Link></li>
            </ul>
            <ul>
              <li><NavLink exact to="/" activeStyle={{color:"red"}}>top</NavLink></li>
              <li><NavLink to={"/a/" + this.state.key2 + "/" + this.state.key3} activeStyle={{color:"red"}}>Event</NavLink></li>
              <li><NavLink to="/b" activeStyle={{color:"red"}}>LifeCycle</NavLink></li>
            </ul>
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/a/:id/:var1" component={Event} />
              <Route path="/b" component={LifeCycle} />
            </Switch>
            <div>-----------------Routing----------------------</div>
         </Router>
      );
  }
}

export default Routing;
