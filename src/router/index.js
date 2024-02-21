import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/Home/HomePage";
import ProductPage from "../pages/Products/ProductPage";
import CategoryPage from "../pages/Category/CategoryPage";
import BrandsPage from "../pages/Brand/BrandsPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import LoginPage from "../pages/Auth/LoginPage";
import "bootstrap/dist/css/bootstrap.css";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path='product' element={<ProductPage />} />
			<Route path='category' element={<CategoryPage />} />
			<Route path='brand' element={<BrandsPage />} />
			<Route path='register' element={<RegisterPage />} />
			<Route path='login' element={<LoginPage />} />
		</Route>
	)
);
