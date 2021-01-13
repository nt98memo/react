import React, {Component} from 'react';
import './App.css';

class App3 extends Component {
    render() {
      return (
         <div>
            <div className="App">
              {this.props.ee}
            </div>
            <div className="App">
              {this.props.ff}
            </div>
            <div className="App">
              {this.props.children}
            </div>
         </div>
      );
  }
}

export default App3;
