import React from "react";
import NavBar from "../../components/utility/NavBar";
import Slider from "../../components/Home/Slider";
import CategoryContainer from "../../components/Category/CategoryContainer";
import ProductContainer from "../../components/Products/ProductContainer";

const HomePage = () => {
	return (
		<>
			<NavBar />
			<Slider />
			<CategoryContainer />
			<ProductContainer />
		</>
	);
};

export default HomePage;
