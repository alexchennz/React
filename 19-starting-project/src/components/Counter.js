import {useDispatch, useSelector} from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store/counter';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandler = () =>{
    dispatch(counterActions.increment())
  }

  const decrementHandler = () =>{
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () =>{
    dispatch(counterActions.increase(10))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <p><button onClick={incrementHandler}>Increment</button><button onClick={decrementHandler}>Decrement</button></p>
      <p><button onClick={increaseHandler}>Increase by 10</button></p>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
