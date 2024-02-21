import React from "react";
import Slider from "../../components/Home/Slider";
import CategoryContainer from "../../components/Category/CategoryContainer";
import ProductContainer from "../../components/Products/ProductContainer";
import BrandsContiner from "../../components/Brands/BrandsContiner";
import DiscountSection from "../../components/Home/DiscountSection";

const HomePage = () => {
	return (
		<div className='bg-light'>
			<Slider />
			<CategoryContainer />
			<ProductContainer
				title='الاكثر مبيعا'
				btnTitle={"المزيد"}
				url={"/product"}
			/>
			<DiscountSection />
			<ProductContainer
				title={"احدث الازياء"}
				btnTitle={"المزيد"}
				url={"/product"}
			/>
			<BrandsContiner />
		</div>
	);
};

export default HomePage;
