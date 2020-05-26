import {createStore, combineReducers} from 'redux';
import postsReducer from "./post-reducers";
import filterPosts from "./filterPosts";

let reducers = combineReducers({
    postsPage: postsReducer,
    filterPage: filterPosts
})

let store = createStore(reducers);

window.store = store;
export default store;