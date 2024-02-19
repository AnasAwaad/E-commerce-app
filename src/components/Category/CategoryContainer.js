import React from "react";
import SubTitle from "../utility/SubTitle";
import CategoryCard from "./CategoryCard";
import { Container, Row } from "react-bootstrap";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";

const CategoryContainer = () => {
	return (
		<>
			<SubTitle title='التصنيفات' btnTitle='المزيد' />
			<div className=' row  container  mx-auto my-2 d-flex justify-content-around '>
				<CategoryCard
					title='اجهزة منزلية'
					imgUrl={clothe}
					cardColor='#F4DBA4'
				/>
				<CategoryCard title='اجهزة منزلية' imgUrl={cat2} cardColor='#F4DBA4' />
				<CategoryCard
					title='اجهزة منزلية'
					imgUrl={labtop}
					cardColor='#0034FF'
				/>
				<CategoryCard title='اجهزة منزلية' imgUrl={sale} cardColor='#F4DBA4' />
				<CategoryCard
					title='اجهزة منزلية'
					imgUrl={clothe}
					cardColor='#FF6262'
				/>
				<CategoryCard title='اجهزة منزلية' imgUrl={pic} cardColor='#F4DBA4' />
			</div>
		</>
	);
};

export default CategoryContainer;
