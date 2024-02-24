import React, { useEffect } from "react";
import SubTitle from "../utility/SubTitle";
import CategoryCard from "./CategoryCard";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { Spinner } from "react-bootstrap";

const CategoryContainer = ({ categoryList, loading }) => {
	const colors = [
		"#ffd3e8",
		"#f4dba5",
		"#55cfdf",
		"#ff6262",
		"#eee",
		"#ffd3e8",
	];
	console.log(categoryList ? "true" : "fasle");

	const renderAllCategories = loading ? (
		<div className='d-flex justify-content-center'>
			<Spinner animation='border' variant='primary' />
		</div>
	) : categoryList ? (
		categoryList.map((item, idx) => {
			return (
				<CategoryCard
					key={item._id}
					title={item.name}
					imgUrl={item.image}
					cardColor={colors[idx]}
				/>
			);
		})
	) : null;

	return (
		<>
			<SubTitle title='التصنيفات' btnTitle='المزيد' url={"/category"} />
			<div className=' row  container  mx-auto my-2 d-flex justify-content-start  '>
				{renderAllCategories}
			</div>
		</>
	);
};

export default CategoryContainer;
