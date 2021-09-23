import { createStore } from "redux";
const initialState = {};
const reducer = (state = initialState, action) => {
    console.log(action);
    return state;;
};

const store = createStore(reducer);

export default store;
