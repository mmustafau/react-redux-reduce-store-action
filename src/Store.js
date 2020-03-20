import {createStore} from "redux";
import { combineReducers } from "redux"
import {reducerf,reducerd}  from './Reducers'

export default createStore(combineReducers(

{
    reducerf,
    reducerd
}
));

///////////////////////////////////////////////

//
// import {createStore} from "redux";
// import { combineReducers } from "redux"
// import *  as reducerf  from './Reducers'
// import reducerd  from './Reducersd'
//
// const allReducers = Object.assign({},reducerf)
//
// export default createStore(combineReducers(allReducers));