import React from "react";
import CategoryContainer from "../../components/Category/CategoryContainer";
import Pagination from "../../components/utility/Pagination";

const CategoryPage = () => {
	return (
		<div className='page'>
			<CategoryContainer />
			<Pagination />
		</div>
	);
};

export default CategoryPage;
