import React, {Component} from 'react';
import './App.css';

class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            key1 : props.defaultKey1,
            key2 : props.defaultKey2,
            key3 : props.defaultKey3
        };
        console.log("LifeCycle.js constructor");
        console.log("LifeCycle.js render前実行");
    }
    componentDidMount() {
        console.log("LifeCycle.js コンポーネントマウント");
        console.log("LifeCycle.js render後実行");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("LifeCycle.js コンポーネント更新");
        console.log("LifeCycle.js render前実行");
        console.log(nextProps);
        console.log(nextState);
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("LifeCycle.js コンポーネント更新");
        console.log("LifeCycle.js render後実行");
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
    }
    componentWillUnmount() {
        console.log("LifeCycle.js コンポーネントアンマウント");
    }
    componentDidCatch(error, info) {
        console.log("LifeCycle.js コンポーネントのエラーハンドラ");
        console.log(error);
        console.log(info);
    }
    func1(e) {
        this.setState({key1:e.target.value + " func1"});
    }
    render() {
      return (
         <div>
            <div>-----------------LifeCycle----------------------</div>
            <div className="App">
              <div>{this.state.key1}</div>
              <div>{this.state.key2}</div>
              <div>{this.state.key3}</div>
              <form>
                <input id="lifeCycleSample" onInput={this.func1.bind(this)}/>
              </form>
            </div>
            <div>-----------------LifeCycle----------------------</div>
         </div>
      );
  }
}

export default LifeCycle;
