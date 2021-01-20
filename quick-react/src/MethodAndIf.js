import React, {Component} from 'react';
import './App.css';

class MethodAndIf extends Component {
    func1(arg1) {
        return <div>{arg1 + 'aaa'}</div>;
    }
    render() {
      return (
         <div>
            <div>-----------------MethodAndIf----------------------</div>
            <div className="App">
              {this.props.aa ? this.props.aa : 'aa無し'}
              <br />
              {this.props.bb && this.props.bb}
              <br />
              {
                (() => {
                    if (this.props.cc === 'cc_val1') {
                        return <div>cc_val1</div>
                    } else if (this.props.cc === 'cc_val12') {
                        return <div>cc_val2</div>
                    } else {
                        return <div>else</div>
                    }
                 }
                )()
              }
              <br />
              {this.func1('callFunc1')}
            </div>
            <div>-----------------MethodAndIf----------------------</div>
         </div>
      );
  }
}

export default MethodAndIf;
