import { all, takeLatest } from 'redux-saga/effects';
import { getData } from './mainSaga';
import { REQUEST_DATA } from '../actionTypes';

export default function* mainSaga() {
	yield all([
		takeLatest(REQUEST_DATA, getData),
	]);
}
