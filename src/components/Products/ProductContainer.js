import React from "react";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../utility/SubTitle";
import labtop from "../../images/labtop.png";

const ProductContainer = () => {
	return (
		<Container>
			<SubTitle btnTitle={"المزيد"} title={"الاكثر مبيعا"} />
			<div className='row d-flex justify-content-around   '>
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
	);
};

export default ProductContainer;
