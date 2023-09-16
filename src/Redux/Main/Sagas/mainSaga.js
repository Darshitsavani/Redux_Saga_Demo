import { call, put } from 'redux-saga/effects';
import ApiData from '../../../Api/ApiData';
import { getDataSuccess } from '../actions';



export function* getData(action) {
    try {
        const response = yield call(ApiData.getData, action.payload);
        yield put(getDataSuccess(response.data.products));
    } catch (error) {
        console.log('e1', error);
    }
}