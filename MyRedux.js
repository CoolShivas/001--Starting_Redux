// importing redux from the library;
const redux = require('redux');

// Formation of reducer;
const reducer = (store, action) => {
    return store;
};


// Creating store for reducer;
const store = redux.createStore(reducer);

// Creating subscriber for store to call state;
const subscriber = () => {
    const state = store.getState();
    console.log(state);
};


// Calling the subsciber;
store.subscriber(subscriber);


