import { combineReducers } from 'redux';

import mainReducer from './Main/reducer';

const rootReducer = combineReducers({
	mainReducer: mainReducer,
});

export default rootReducer;
