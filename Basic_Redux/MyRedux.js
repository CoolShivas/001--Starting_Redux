// Now, we have moved the MyRedux.js file inside or near the .gitignore file because of node MyRedux.js is not working properly if we move more inside the src then also it will not work;
// importing redux from the library;
const redux = require('redux');


const INITIAL_VALUE = {
    counter : 0
};

// Formation of reducer;
const reducer = (store = INITIAL_VALUE, action) => {
    if(action.type === "INCREMENT")
        {
            return {counter : store.counter + 1}; 
        }
        else if(action.type === "DECREMENT")
        {
            return {counter : store.counter - 1}; 
        }
        return store;
    
};


// Creating store for reducer;
const store = redux.createStore(reducer);

// Creating subscriber for store to call state;
const subscriber = () => {
    const state = store.getState();
    console.log(state);// Finally, we are getting the output as 1,0,1,2;
    // Now, action is passing the value for dispatch
};


// Calling the subsciber;
store.subscribe(subscriber);


// Calling the dispatch function;
store.dispatch({type : "INCREMENT"});
store.dispatch({type : "DECREMENT"});
store.dispatch({type : "INCREMENT"});
store.dispatch({type : "INCREMENT"});


