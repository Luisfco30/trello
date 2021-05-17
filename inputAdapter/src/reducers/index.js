import { combineReducers } from 'redux';
import noteReducer from './todo.reducer';
import userReducer from './user.reducer';

export default combineReducers({
    todo: noteReducer,
    user: userReducer
})