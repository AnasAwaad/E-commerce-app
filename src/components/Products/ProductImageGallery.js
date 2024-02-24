import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import phone from "../../images/mobile.png";
import phone1 from "../../images/mobile1.png";
import phone2 from "../../images/mobile2.png";
import renderLeftNav from "./renderLeftNav";
import "./productNav.css";
import renderRightNav2 from "./renderRightNav2";

const ProductImageGallery = () => {
	const images = [
		{
			original: phone,
		},
		{
			original: phone1,
		},
		{
			original: phone2,
		},
	];

	return (
		<div className='d-flex justify-content-center'>
			<ReactImageGallery
				items={images}
				showFullscreenButton={false}
				showPlayButton={false}
				renderLeftNav={renderLeftNav}
				renderRightNav={renderRightNav2}
			/>
		</div>
	);
};

export default ProductImageGallery;
