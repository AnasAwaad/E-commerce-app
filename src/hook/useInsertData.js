import { baseURL } from "../Api/baseUrl";

const useInsertCategory = async (url, data) => {
	const res = await baseURL.post(url, data, {
		headers: {
			"content-type": "multipart/form-data", // do not forget this
		},
	});
	return res.data;
};

export { useInsertCategory };
