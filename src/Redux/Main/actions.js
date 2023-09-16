import { RECEIVE_DATA, REQUEST_DATA } from "./actionTypes";

export const getDataRequest = (payload) => ({
	type: REQUEST_DATA,
	payload,
});

export const getDataSuccess = (payload) => ({
	type: RECEIVE_DATA,
	payload,
});