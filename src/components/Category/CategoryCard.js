import React from "react";
import "./category.css";
const CategoryCard = ({ imgUrl, cardColor, title }) => {
	return (
		<div
			className={`col col-sm-6 col-md-4 col-lg-3 col-xl-2  category-card my-4 d-flex flex-column align-items-center justify-content-center `}
		>
			<div
				className=' d-flex justify-content-center align-items-center  '
				style={{ backgroundColor: cardColor }}
			>
				<img src={imgUrl} alt='category card' />
			</div>
			<p className='text-center my-3 fs-6 fw-medium'>{title}</p>
		</div>
	);
};

export default CategoryCard;
