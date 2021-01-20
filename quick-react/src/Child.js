import React, {Component} from 'react';
import './App.css';

class Child extends Component {
    render() {
      return (
         <div>
            <div>-----------------Child----------------------</div>
            <div className="App">
              {this.props.ee}
            </div>
            <div className="App">
              {this.props.ff}
            </div>
            <div className="App">
              {this.props.children}
            </div>
            <div>-----------------Child----------------------</div>
         </div>
      );
  }
}

export default Child;
