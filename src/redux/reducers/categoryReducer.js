import { GET_ALL_CATEGORY } from "../types";

const initialState = {
	category: {},
	loading: true,
};
export const categoryReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case GET_ALL_CATEGORY: {
			console.log("reducer");
			return {
				loading: false,
				category: action.payload,
			};
		}

		default:
			return state;
	}
};
