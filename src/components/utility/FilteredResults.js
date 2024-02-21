import React from "react";
import { Container } from "react-bootstrap";
import sortImg from "../../images/sort.png";
import "./filteredResults.css";
const FilteredResults = () => {
	return (
		<Container>
			<div className='d-flex justify-content-between align-content-center'>
				<div className='fw-semibold fs-5'>400 منتج متاح</div>
				<div className='dropdown'>
					<button
						className='btn border-0'
						type='button'
						id='dropdownMenuButton1'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						<span>ترتيب حسب</span>
						<img src={sortImg} alt='filter' width={"25px"} />
					</button>
					<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
						<li>
							<a className='dropdown-item' href='#'>
								الاكثر مبيعا
							</a>
						</li>
						<li>
							<a className='dropdown-item' href='#'>
								الاكثر تقيما
							</a>
						</li>
						<li>
							<a className='dropdown-item' href='#'>
								السعر من الاقل للاعلي
							</a>
						</li>
						<li>
							<a className='dropdown-item' href='#'>
								السعر من الاعلي للاقل
							</a>
						</li>
					</ul>
				</div>
			</div>
		</Container>
	);
};

export default FilteredResults;
