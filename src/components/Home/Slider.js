import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../images/slider1.jpeg";
import "./slider.css";
import { Container } from "react-bootstrap";
import sliderimg from "../../images/slider1.png";
import slider4 from "../../images/slider4.png";
import prod3 from "../../images/prod3.png";
import prod4 from "../../images/prod4.png";
function Slider() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel dir='ltr' activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item className='carosel-item1'>
				<Container className='m-auto d-flex justify-content-center align-items-center w-50 flex-column flex-md-row'>
					<div className=' carosel-text '>
						<h3>هناك خصم كبير</h3>
						<p>خصم يصل 50% عند شرائك</p>
					</div>
					<div className='image w-50 '>
						<img src={sliderimg} alt='image1' height='400px' width='100%' />
					</div>
				</Container>
			</Carousel.Item>

			<Carousel.Item className='carosel-item1'>
				<Container className='m-auto d-flex justify-content-center align-items-center w-50 flex-column flex-md-row'>
					<div className=' carosel-text '>
						<h3>هناك خصم كبير</h3>
						<p>خصم يصل 50% عند شرائك</p>
					</div>
					<div className='image w-50 '>
						<img src={prod3} alt='image1' height='400px' width='100%' />
					</div>
				</Container>
			</Carousel.Item>
			<Carousel.Item className='carosel-item1'>
				<Container className='m-auto d-flex justify-content-center align-items-center w-50 flex-column flex-md-row'>
					<div className=' carosel-text '>
						<h3>هناك خصم كبير</h3>
						<p>خصم يصل 50% عند شرائك</p>
					</div>
					<div className='image w-50 '>
						<img src={slider4} alt='image1' height='400px' width='100%' />
					</div>
				</Container>
			</Carousel.Item>
			<Carousel.Item className='carosel-item1'>
				<Container className='m-auto d-flex justify-content-center align-items-center w-50 flex-column flex-md-row'>
					<div className=' carosel-text '>
						<h3>هناك خصم كبير</h3>
						<p>خصم يصل 50% عند شرائك</p>
					</div>
					<div className='image  '>
						<img src={prod4} alt='image1' height='400px' width='100%' />
					</div>
				</Container>
			</Carousel.Item>
		</Carousel>
	);
}

export default Slider;
