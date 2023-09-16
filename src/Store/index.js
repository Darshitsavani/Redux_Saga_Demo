import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Redux/rootReducers';
import rootSaga from '../Redux/rootSaga';


export default function () {
  /* ------------- Redux Configuration ------------- */

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  /* ------------- Saga Middleware ------------- */
  sagaMiddleware.run(rootSaga);


  return { store };
}