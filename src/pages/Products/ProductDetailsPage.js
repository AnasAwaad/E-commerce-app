import React from "react";
import ProductsHeader from "../../components/Products/ProductsHeader";
import { Col, Container, Row } from "react-bootstrap";
import ProductImageGallery from "../../components/Products/ProductImageGallery";
import ProductInfo from "../../components/Products/ProductInfo";
import RateItem from "../../components/Rates/RateItem";
import "./productDetails.css";
import RateHeader from "../../components/Rates/RateHeader";
import AddRate from "../../components/Rates/AddRate";

const ProductDetailsPage = () => {
	return (
		<div className='page'>
			<ProductsHeader />
			<Container>
				<Row>
					<Col lg='4'>
						<ProductImageGallery />
					</Col>
					<Col lg='8'>
						<ProductInfo />
					</Col>
				</Row>
			</Container>

			<Container className='bg-white my-4'>
				<RateHeader />
				<AddRate />
				<RateItem />
				<RateItem />
				<RateItem />
				<RateItem />
			</Container>
		</div>
	);
};

export default ProductDetailsPage;
