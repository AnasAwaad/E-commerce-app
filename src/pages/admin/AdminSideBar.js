import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
	return (
		<div className='bg-white mt-2 rounded-2 admin-sidebar'>
			<Link to='addCategory' style={{ textDecoration: "none" }}>
				<div className='py-3 text-center fw-bold fs-6 admin-sidebar-item'>
					اضف تصنيف
				</div>
			</Link>
			<Link to='addProduct' style={{ textDecoration: "none" }}>
				<div className='py-3 text-center fw-bold fs-6 admin-sidebar-item'>
					اضف منتج
				</div>
			</Link>
			<Link to='addBrand' style={{ textDecoration: "none" }}>
				<div className='py-3 text-center fw-bold fs-6 admin-sidebar-item'>
					اضف براند
				</div>
			</Link>
		</div>
	);
};

export default AdminSideBar;
