import React from "react";
import rate from "../../images/rate.png";
import "./rate.css";
const RateHeader = () => {
	return (
		<div className='mb-4'>
			<span className='fs-3 fw-bold mx-2'>التقيمات</span>
			<img src={rate} alt='rate' width={"20px"} height={"20px"} />
			<span className='fs-6 fw-bold  me-1 d-inline-block rateNumber'>4.3 </span>
			<span className='me-2 numOfrates'>(160 تقيم)</span>
		</div>
	);
};

export default RateHeader;
