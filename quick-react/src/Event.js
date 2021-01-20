import React, {Component} from 'react';
import './App.css';

class Event extends Component {
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
         <div>
            <div>-----------------Event----------------------</div>
            <div className="App">
              <div>{this.state.key1}</div>
              <div>{this.state.key2}</div>
              <div>{this.state.key3}</div>
              <div ref={this.refObj1}></div>
              <form>
                <input id="eventSample" onInput={this.func1.bind(this, '←入力値')}/>
              </form>
              <div>{(this.props.match && this.props.match.params.id) ? this.props.match.params.id : ''}</div>
              <div>{(this.props.match && this.props.match.params.var1) ? this.props.match.params.var1 : ''}</div>
            </div>
            <div>-----------------Event----------------------</div>
         </div>
      );
  }
}

export default Event;
