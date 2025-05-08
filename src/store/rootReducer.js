import {combineReducers} from 'redux';
import blogReducer from './reducers/blogReducer';

const rootReducer = combineReducers({
    blogs: blogReducer,
});
export default rootReducer;