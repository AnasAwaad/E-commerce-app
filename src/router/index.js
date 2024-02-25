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
import ProductDetailsPage from "../pages/Products/ProductDetailsPage";
import AdminPage from "../pages/admin/AdminPage";
import AdminAddCategory from "../pages/admin/AddCategory";
import AddProduct from "../pages/admin/AddProduct";
import AddBrand from "../pages/admin/AddBrand";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path='product' element={<ProductPage />} />
			<Route path='category' element={<CategoryPage />} />
			<Route path='brand' element={<BrandsPage />} />
			<Route path='register' element={<RegisterPage />} />
			<Route path='login' element={<LoginPage />} />
			<Route path='product/:id' element={<ProductDetailsPage />} />
			<Route path='admin' element={<AdminPage />}>
				<Route path='addCategory' element={<AdminAddCategory />} />
				<Route path='addBrand' element={<AddBrand />} />
				<Route path='addProduct' element={<AddProduct />} />
			</Route>
		</Route>
	)
);
