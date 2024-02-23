import { baseURL } from "../../Api/baseUrl";
import useGetData from "../../hook/useGetData";
import { GET_ALL_CATEGORY } from "../types";

export const getAllCategory = () => {
	return async (dispatch) => {
		try {
			const data = await useGetData("/api/v1/categories");
			dispatch({
				type: GET_ALL_CATEGORY,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
