import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";
const Pagination = () => {
	const pageCount = 100;
	const handlePageClick = () => {};
	return (
		<ReactPaginate
			breakLabel='...'
			nextLabel='next >'
			onPageChange={handlePageClick}
			pageRangeDisplayed={2}
			marginPagesDisplayed={2}
			breakClassName='page-item'
			breakLinkClassName='page-link'
			onPageActive={"active"}
			activeClassName='active'
			pageClassName='page-item'
			pageLinkClassName='page-link'
			previousClassName='page-item'
			previousLinkClassName='page-link'
			nextClassName='page-item'
			nextLinkClassName='page-link'
			className='pagination d-flex align-items-center justify-content-center'
			pageCount={pageCount}
			previousLabel='< previous'
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;
