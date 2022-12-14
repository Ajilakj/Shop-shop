import { useProductReducer } from './reducers'
import { createStore } from 'redux';


export default createStore(useProductReducer);

