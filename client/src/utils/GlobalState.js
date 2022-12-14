import React, {useContext } from "react";
import { useProductReducer } from './reducers'
import { createStore } from 'redux';


let store = createStore(useProductReducer);
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer();

  return <Provider value={[state, dispatch]} {...props} />;
};


export { StoreProvider };
