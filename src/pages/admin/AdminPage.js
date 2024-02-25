import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./admin.css";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router-dom";
const AdminPage = () => {
	return (
		<div className='page'>
			<Container>
				<Row>
					<Col md='3'>
						<AdminSideBar />
					</Col>
					<Col md='9'>
						<Outlet />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AdminPage;
