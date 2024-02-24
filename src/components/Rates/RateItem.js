import React from "react";
import rate from "../../images/rate.png";
import "./rate.css";
const RateItem = () => {
	return (
		<div className='mx-5 py-2 comment-item'>
			<div className='d-flex align-items-center'>
				<span className='ms-2'>احمد محمد</span>
				<img src={rate} alt='rate' width={"20px"} height={"20px"} />
				<span className='me-2 fs-6 fw-bold rateNumber'>4.3 </span>
			</div>
			<div className='py-2'>منتج مناسب جدا في الوقت الحالي والسعر كويس جدا</div>
		</div>
	);
};

export default RateItem;
