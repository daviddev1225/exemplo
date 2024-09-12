import React from "react";
import {createStore} from "redux";
import './App.css';

const reducer = function(state,action){
  if(action.type === "INC"){
    return state + action.payload;
  }else if(action.type === "DESC"){
    return state - action.payload;
  }
  return state;
}
const store = createStore(reducer,0);
store.subscribe(function(){
  console.log("O estado mudou!", store.getState());
})

store.dispatch({type:'INC',payload:2});
store.dispatch({type:'INC',payload:2});
store.dispatch({type:'INC',payload:2});
store.dispatch({type:'DESC',payload:2});


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {count:0}
    this.increment = this.increment.bind(this);
  }

  increment = ()=>{
    this.setState({count:this.state.count+1}) 
  }

  decrement = ()=>{
    this.setState({count:this.state.count-1})
  }

  render(){
    return(
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Mais</button>
        <button onClick={this.decrement}>Menos</button>
      </div>
    )
  }
}

export default App;
