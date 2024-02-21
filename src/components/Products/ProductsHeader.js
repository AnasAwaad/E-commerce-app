import React from "react";
import { Container } from "react-bootstrap";

const ProductsHeader = () => {
	return (
		<div className='bg-white '>
			<Container>
				<ul className='d-flex list-unstyled gap-2 justify-content-start align-items-center py-3 fs-6  '>
					<li>الكل</li>
					<li>الكترونيات</li>
					<li>كهربية</li>
					<li>ملابس</li>
					<li>سيارات</li>
					<li>المزيد</li>
				</ul>
			</Container>
		</div>
	);
};

export default ProductsHeader;
