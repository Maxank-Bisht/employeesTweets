import { ADD_TECH, GET_TECHS, DELETE_TECH, TECHS_ERROR, SET_LOADING } from './types';

//  get techs
export const getTechs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('/techs');
		const data = await res.json();
		dispatch({
			type: GET_TECHS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// set loading
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
