import { createStore } from 'redux';
import reducer from '../reducers';
const initialState = {
    username: "Asad",
    totalAmount: 2500702
};
  
const store = createStore(reducer, initialState);
export default store;