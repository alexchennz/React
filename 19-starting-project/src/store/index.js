import { configureStore } from '@reduxjs/toolkit';

import CounterReducer from './counter';
import AuthReducer from './auth';

// const counterReducer = (state = initialState, action) =>{
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === "increase"){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === "toggle"){
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }



const store = configureStore({reducer: {
    counter: CounterReducer,
    auth: AuthReducer
}});




// const counterSubscriber = () =>{
//     const latestState = store.getState();
//     console.log(latestState);
// }

// store.subscribe(counterSubscriber);

// store.dispatch({type: "increment"});

export default store;