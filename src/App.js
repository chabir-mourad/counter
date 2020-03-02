import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {increment, decrement, reset} from './actions/actions'

function App({count, increment,decrement,reset}) {
  return (
    <div className="App">
   <Button variant="success" onClick={()=> increment()}>+</Button>
   <span>{count}</span>
   <Button variant="danger" onClick={()=>decrement()}>-</Button>
   <Button variant="dark" onClick={()=> reset()}>Reset</Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {count: state.count}
};

const mapDispatchToProps = (dispatch) => {
   return {
     increment: () => dispatch(increment()),
     decrement: () => dispatch(decrement()),
     reset: () => dispatch(reset())
  }
  
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
