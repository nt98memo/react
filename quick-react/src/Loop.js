import React, {Component} from 'react';
import './App.css';

class Loop extends Component {
    render() {
      return (
         <div>
            <div>-----------------Loop----------------------</div>
            <div className="App">
              {this.props.key1}
            </div>
            <div className="App">
              {this.props.key2}
            </div>
            <div>-----------------Loop----------------------</div>
         </div>
      );
  }
}

export default Loop;
