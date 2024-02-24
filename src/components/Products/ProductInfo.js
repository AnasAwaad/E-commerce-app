import React from "react";
import "./productInfo.css";
const ProductDetails = () => {
	return (
		<>
			<h5>الالكترونيات</h5>
			<p>ايفون 7 بذاكرة تخزين 128 مع رامات 16</p>
			<p className='text-danger fw-bold mb-0'>4.6</p>
			<div>
				الماركة : <span className='fs-5 fw-bold'>سامسونج</span>
			</div>
			<div className='d-flex justify-content-start gap-2'>
				<span className='product-color'></span>
				<span className='product-color'></span>
				<span className='product-color'></span>
			</div>
			<h5 className='mt-3'>المواصفات</h5>
			<div className='product-desc'>
				يتميز بوجود طاقة كهربية عالية مع مساحة تخزين كبيرة جدا يهبتينبتينبتني
				يبنتينبنن بيبتينىبى ينبينبى ينبينب
			</div>
			<div className='d-flex gap-1'>
				<button className='btn btn btn-outline-danger'>34000 جنية</button>
				<button className='btn btn-success'>اضف للعربة</button>
			</div>
		</>
	);
};

export default ProductDetails;
