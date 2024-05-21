// Now, we have imported the MyRedux.js file inside or near the .gitignore file because of node MyRedux.js is not working properly if we move more inside the src then also it will not work;
// importing redux from the library;
const redux = require('redux');


const INITIAL_VALUE = {
    counter : 0
};

// Formation of reducer;
const reducer = (store = INITIAL_VALUE, action) => {
    return {counter : store.counter + 1};
};


// Creating store for reducer;
const store = redux.createStore(reducer);

// Creating subscriber for store to call state;
const subscriber = () => {
    const state = store.getState();
    console.log(state);
};


// Calling the subsciber;
store.subscribe(subscriber);


// Calling the dispatch function;
store.dispatch({type : "INCREMENT"});


