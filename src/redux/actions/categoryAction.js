import useGetData from "../../hook/useGetData";
import { useInsertCategory } from "../../hook/useInsertData";
import { ADD_NEW_CATEGORY, GET_ALL_CATEGORY } from "../types";

export const getAllCategory = (limit, page = 1) => {
	return async (dispatch) => {
		try {
			const data = await useGetData(
				`/api/v1/categories?limit=${limit}&page=${page}`
			);
			dispatch({
				type: GET_ALL_CATEGORY,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const addNewCategory = (data) => {
	return async (dispatch) => {
		try {
			const newCategory = await useInsertCategory("/api/v1/categories", data);

			dispatch({
				type: ADD_NEW_CATEGORY,
				payload: newCategory,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const isLoadingCategory = () => {
	return {
		type: "LOADING",
	};
};
