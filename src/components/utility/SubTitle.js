import React from "react";
import { Container } from "react-bootstrap";

const SubTitle = ({ title, btnTitle }) => {
	return (
		<Container className='d-flex align-items-center justify-content-between py-4 roboto-medium-'>
			<span className='fs-5 text-black fw-bold'>{title}</span>
			<button className='btn btn-outline-primary fs-5'>{btnTitle}</button>
		</Container>
	);
};

export default SubTitle;
