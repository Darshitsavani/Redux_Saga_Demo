import { all, fork } from 'redux-saga/effects';
import mainSaga from './Main/Sagas';

export default function* rootSaga() {
	yield all([fork(mainSaga)]);
}
