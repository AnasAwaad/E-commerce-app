import React, { useEffect } from "react";
import CategoryContainer from "../../components/Category/CategoryContainer";
import Pagination from "../../components/utility/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
const CategoryPage = () => {
	const dispatch = useDispatch();
	const { category, loading } = useSelector((state) => state.category);
	useEffect(() => {
		dispatch(getAllCategory(3, 1));
	}, []);

	const onPageChanged = (selectedPage) => {
		dispatch(getAllCategory(3, selectedPage));
	};
	return (
		<div className='page'>
			<CategoryContainer categoryList={category.data} loading={loading} />
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
