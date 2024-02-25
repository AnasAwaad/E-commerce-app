import React, { useEffect } from "react";
import Slider from "../../components/Home/Slider";
import CategoryContainer from "../../components/Category/CategoryContainer";
import ProductContainer from "../../components/Products/ProductContainer";
import BrandsContiner from "../../components/Brands/BrandsContiner";
import DiscountSection from "../../components/Home/DiscountSection";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllCategory,
	isLoadingCategory,
} from "../../redux/actions/categoryAction";

const HomePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(isLoadingCategory());
		dispatch(getAllCategory(6, 1));
	}, []);
	const { category, isLoading } = useSelector((state) => state.category);

	return (
		<div className='bg-light'>
			<Slider />

			<CategoryContainer
				categoryList={!isLoading ? category.data : null}
				loading={isLoading}
			/>
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
