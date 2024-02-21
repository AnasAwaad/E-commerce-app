import React from "react";
import SubTitle from "../utility/SubTitle";
import BrandCard from "./BrandCard";
import { Container } from "react-bootstrap";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
const BrandsContiner = () => {
	return (
		<>
			<Container className='py-5'>
				<SubTitle url={"/brand"} btnTitle={"المزيد"} title={"اشهر الماركات"} />
				<div className='row'>
					<BrandCard imgUrl={brand1} />
					<BrandCard imgUrl={brand2} />
					<BrandCard imgUrl={brand3} />
					<BrandCard imgUrl={brand1} />
					<BrandCard imgUrl={brand2} />
					<BrandCard imgUrl={brand3} />
				</div>
			</Container>
		</>
	);
};

export default BrandsContiner;
