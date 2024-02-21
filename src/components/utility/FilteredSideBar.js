import React from "react";
import { Container } from "react-bootstrap";
import "./filteredResults.css";
const FilteredSideBar = () => {
	return (
		<Container>
			<div className='filter-sideBar-container'>
				<div className='my-3'>
					<h4>الفئة</h4>
					<div>
						<input id='checkBox1' type='checkbox' className='ms-2' />
						<label htmlFor='checkBox1'>الكل</label>
					</div>
					<div>
						<input id='checkBox2' type='checkbox' className='ms-2' />
						<label htmlFor='checkBox2'>اجهزة منزلية</label>
					</div>
					<div>
						<input id='checkBox3' type='checkbox' className='ms-2' />
						<label htmlFor='checkBox3'>اجهزة كهربية</label>
					</div>
					<div>
						<input id='checkBox4' type='checkbox' className='ms-2' />
						<label htmlFor='checkBox4'>ملابس</label>
					</div>
					<div>
						<input id='checkBox5' type='checkbox' className='ms-2' />
						<label htmlFor='checkBox5'>اخري</label>
					</div>
				</div>
				<div className='my-3'>
					<h4>الماركة</h4>
					<div>
						<input id='checkBoxModel1' type='checkbox' className='ms-2' />
						<label htmlFor='checkBoxModel1'>الكل</label>
					</div>
					<div>
						<input id='checkBoxModel2' type='checkbox' className='ms-2' />
						<label htmlFor='checkBoxModel2'>ابل</label>
					</div>
					<div>
						<input id='checkBoxModel3' type='checkbox' className='ms-2' />
						<label htmlFor='checkBoxModel3'>سامسونج</label>
					</div>
				</div>
				<div className='my-3'>
					<h4>السعر</h4>
					<div className='my-2'>
						<label htmlFor='priceInput1' className='ms-2 px-2'>
							من
						</label>
						<input
							id='priceInput1'
							type='number'
							className='ms-2'
							style={{ width: "50px" }}
						/>
					</div>
					<div className='my-2'>
						<label htmlFor='priceInput2' className='ms-2 px-2 '>
							الي
						</label>
						<input
							id='priceInput2'
							type='number'
							className='ms-2'
							style={{ width: "50px" }}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default FilteredSideBar;
