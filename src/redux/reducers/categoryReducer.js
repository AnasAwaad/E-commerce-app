import { ADD_NEW_CATEGORY, GET_ALL_CATEGORY, LOADING } from "../types";

const initialState = {
	newCategory: {},
	category: {},
	isLoading: true,
};
export const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return { ...state, isLoading: true };

		case GET_ALL_CATEGORY: {
			return {
				...state,
				category: action.payload,
				isLoading: false,
			};
		}

		case ADD_NEW_CATEGORY: {
			return {
				...state,
				newCategory: action.payload,
				isLoading: false,
			};
		}

		default:
			return state;
	}
};
