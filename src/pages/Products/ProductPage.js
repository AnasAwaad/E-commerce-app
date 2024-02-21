import React from "react";
import ProductsHeader from "../../components/Products/ProductsHeader";
import FilteredResults from "../../components/utility/FilteredResults";
import FilteredSideBar from "../../components/utility/FilteredSideBar";
import ProductContainer from "../../components/Products/ProductContainer";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../../components/utility/Pagination";

const ProductPage = () => {
	return (
		<div className='page'>
			<ProductsHeader />
			<FilteredResults />
			<Container>
				<Row>
					<Col md='3' sm='4' lg='2'>
						<FilteredSideBar />
					</Col>
					<Col md='9' sm='8' lg='10'>
						<ProductContainer btnTitle={""} title={""} />
					</Col>
				</Row>
			</Container>
			<Pagination />
		</div>
	);
};

export default ProductPage;
