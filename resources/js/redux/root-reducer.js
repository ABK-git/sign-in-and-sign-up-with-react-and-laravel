const { combineReducers } = require("redux");
//reducer
import userReducer from './user/user.reducer';
import { persistReducer } from 'redux-persist';
import errorReducer from './error/error.reducer';
//storage
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer
});

export default persistReducer(persistConfig, rootReducer);

