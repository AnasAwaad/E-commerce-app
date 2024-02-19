import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";

function NavScrollExample() {
	return (
		<Navbar dir='ltr' expand='lg' className='bg-body-tertiary'>
			<Container>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href='/' className='d-flex align-items-center gap-1'>
							<span>العربة</span>

							<i className='fa-solid fa-cart-shopping'></i>
						</Nav.Link>
						<Nav.Link href='/' className='d-flex align-items-center gap-1'>
							<span>دخول</span>

							<i className='fa-regular fa-user'></i>
						</Nav.Link>
					</Nav>
					<Form className='d-flex w-100'>
						<Form.Control
							type='search'
							placeholder='Search'
							className='me-2'
							aria-label='Search'
						/>
					</Form>
				</Navbar.Collapse>
				<Navbar.Brand href='/'>
					<img src={logo} alt='logo' width='70px' height='60px' />
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default NavScrollExample;
