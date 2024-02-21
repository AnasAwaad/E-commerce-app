import React from "react";

const BrandCard = ({ imgUrl }) => {
	return (
		<div className='col col-sm-6 col-md-4 col-lg-3 col-xxl-2 bg-white'>
			<img src={imgUrl} alt='' />
		</div>
	);
};

export default BrandCard;
