import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import App3 from './App3';

class App2 extends Component {
    render() {

      const data = {'ee':'ee_val', 'ff':'ff_val'};

      return (
         <div>
            <div className="App">
              {this.props.name}
            </div>
            <div className="App">
              {this.props.value.aa}
            </div>
            <div className="App">
              {this.props.value.bb}
            </div>
            <div className="App">
              {this.props.cc}
            </div>
            <div className="App">
              {this.props.dd}
            </div>
            <div className="App">
              {this.props.children}
            </div>
            <div className="App">
                <App3 {...data}>
                    <div>child3</div>
                    <div>child4</div>
                </App3>
            </div>
         </div>
      );
  }
}

App2.propTypes = {
    name: PropTypes.string
};

App2.defaultProps = {
    name: 'デフォルト値'
};

export default App2;
