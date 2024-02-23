import React, { useEffect } from "react";
import CategoryContainer from "../../components/Category/CategoryContainer";
import Pagination from "../../components/utility/Pagination";
import { useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
const CategoryPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCategory());
	}, []);

	return (
		<div className='page'>
			<CategoryContainer />
			<Pagination />
		</div>
	);
};

export default CategoryPage;
