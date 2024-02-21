import React from "react";
import BrandContainer from "../../components/Brands/BrandsContiner";
import Pagination from "../../components/utility/Pagination";
const BrandsPage = () => {
	return (
		<div className='page'>
			<BrandContainer />
			<Pagination />
		</div>
	);
};

export default BrandsPage;
