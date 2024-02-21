import React from "react";
import { Container } from "react-bootstrap";
import "./auth.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
	return (
		<div className='page'>
			<Container>
				<form className='text-center'>
					<h2 className='py-5'>تسجيل الدخول</h2>
					<div className='mb-3'>
						<input type='email' placeholder='الايميل' className='' />
					</div>
					<div className='mb-3'>
						<input type='password' placeholder='كلمة السر' />
					</div>

					<button
						type='submit'
						className='btn btn-primary bg-black border-0 submit-btn'
					>
						Submit
					</button>
					<div className='my-4'>
						<span>ليس لديك حساب ؟</span>
						<Link
							to={"/register"}
							className='text-decoration-none text-danger '
						>
							اضغط هنا
						</Link>
					</div>
				</form>
			</Container>
		</div>
	);
};

export default LoginPage;
