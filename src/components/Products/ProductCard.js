import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import rate from "../../images/rate.png";
import fav from "../../images/fav-off.png";
function ProductCard({ description, image }) {
	return (
		<Card
			style={{ width: "18rem" }}
			className='col-12 col-sm-6 col-md-4 col-lg-3 border-0 shadow-sm my-4'
		>
			<Card.Img variant='top' src={image} />
			<img
				src={fav}
				alt='fav'
				width={"35px"}
				height={"35px"}
				className='me-auto ms-2 '
				draggable='false'
			/>
			<Card.Body>
				<Card.Text>{description}</Card.Text>
				<div className='d-flex justify-content-between'>
					<div className='d-flex align-content-center gap-1'>
						<img src={rate} alt='rate' width={"20px"} height={"20px"} />
						<span className='fw-bold text-warning'>4.5</span>
					</div>
					<p className='card-price'>
						<span className='fw-bold'>880</span>جنيه
					</p>
				</div>
			</Card.Body>
		</Card>
	);
}

export default ProductCard;