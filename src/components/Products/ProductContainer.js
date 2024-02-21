import React from "react";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../utility/SubTitle";
import labtop from "../../images/labtop.png";

const ProductContainer = ({ url, title, btnTitle }) => {
	return (
		<>
			<Container>
				<SubTitle url={url} btnTitle={btnTitle} title={title} />
				<div className='row  my-2 d-flex  '>
					<ProductCard
						description={"ساعة يد ذكية بيب اسود كسر زيرو"}
						image={labtop}
					/>
					<ProductCard
						description={"ساعة يد ذكية بيب اسود كسر زيرو"}
						image={labtop}
					/>
					<ProductCard
						description={"ساعة يد ذكية بيب اسود كسر زيرو"}
						image={labtop}
					/>
					<ProductCard
						description={"ساعة يد ذكية بيب اسود كسر زيرو"}
						image={labtop}
					/>
				</div>
			</Container>
		</>
	);
};

export default ProductContainer;
