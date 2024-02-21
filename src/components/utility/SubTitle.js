import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btnTitle, url }) => {
	return (
		<Container className='d-flex align-items-center justify-content-between py-4 roboto-medium-'>
			<span className='fs-5 text-black fw-bold'>{title}</span>
			{btnTitle ? (
				<Link to={url} className='btn btn-outline-primary fs-5'>
					{btnTitle}
				</Link>
			) : null}
		</Container>
	);
};

export default SubTitle;
