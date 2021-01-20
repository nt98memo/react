import React, {Component} from 'react';
import './App.css';

class ChildToParent extends Component {
    func1(e) {
        this.props.onUpdate(e.target.value);
    }
    render() {
      return (
         <div>
            <div>-----------------ChildToParent----------------------</div>
            <div className="App">
              <form>
                <input id="ChildToParentSample" onInput={this.func1.bind(this)}/>
              </form>
            </div>
            <div>-----------------ChildToParent----------------------</div>
         </div>
      );
  }
}

export default ChildToParent;
