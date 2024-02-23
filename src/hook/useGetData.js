import { baseURL } from "../Api/baseUrl";

const useGetData = async (url) => {
	const res = await baseURL.get(url);
	return res.data;
};

export default useGetData;
