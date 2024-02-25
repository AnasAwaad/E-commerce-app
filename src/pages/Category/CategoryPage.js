import React, { useEffect } from "react";
import CategoryContainer from "../../components/Category/CategoryContainer";
import Pagination from "../../components/utility/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllCategory,
	isLoadingCategory,
} from "../../redux/actions/categoryAction";
const CategoryPage = () => {
	const dispatch = useDispatch();
	const { category, isLoading } = useSelector((state) => state.category);

	useEffect(() => {
		dispatch(isLoadingCategory());
		dispatch(getAllCategory(6));
	}, []);

	const onPageChanged = (selectedPage) => {
		dispatch(isLoadingCategory());
		dispatch(getAllCategory(6, selectedPage));
	};

	return (
		<div className='page'>
			<CategoryContainer categoryList={category.data} loading={isLoading} />
			<Pagination
				numberOfPages={
					category.data ? category.paginationResult.numberOfPages : null
				}
				onPageChanged={onPageChanged}
			/>
		</div>
	);
};

export default CategoryPage;
