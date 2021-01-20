import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Child from './Child';
import ChildToParent from './ChildToParent';

class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            key1 : props.defaultKey1
        };
    }
    funcToChild(arg1) {
        this.setState((preState, props) => {preState.key1 = arg1; return preState;});
    }
    render() {

      const data = {'ee':'ee_val', 'ff':'ff_val'};

      return (
         <div>
            <div>-----------------Parent----------------------</div>
            <div className="App">{this.state.key1}</div>
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
                <Child {...data}>
                    <div>child3</div>
                    <div>child4</div>
                </Child>
            </div>
            <ChildToParent onUpdate={this.funcToChild.bind(this)}/>
            <div>-------------------Parent--------------------</div>
         </div>
      );
  }
}

Parent.propTypes = {
    name: PropTypes.string
};

Parent.defaultProps = {
    name: 'デフォルト値'
};

export default Parent;
