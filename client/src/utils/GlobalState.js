import React, {useContext } from "react";
import { useProductReducer } from './reducers'
import { createStore } from 'redux';

export default createStore(useProductReducer);

