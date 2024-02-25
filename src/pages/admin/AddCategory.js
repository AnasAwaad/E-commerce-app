import React, { useState } from "react";
import addImage from "../../images/avatar.png";
import { baseURL } from "../../Api/baseUrl";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewCategory } from "../../redux/actions/categoryAction";
const AdminAddCategory = () => {
	const dispatch = useDispatch();
	const [img, setImg] = useState(addImage);
	const [imageFile, setImageFile] = useState(null);
	const categoryInputRef = useRef();

	//upload image from local to website
	const addImageHandler = (evt) => {
		const imgURL = URL.createObjectURL(evt.target.files[0]);
		setImg(imgURL);
		setImageFile(evt.target.files[0]);
	};

	const addCategoryHandler = async (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("image", imageFile);
		data.append("name", categoryInputRef.current.value);
		dispatch(addNewCategory(data));
	};
	return (
		<>
			<form onSubmit={addCategoryHandler}>
				<div className='d-flex flex-column'>
					<label htmlFor='addImage'>
						<img src={img} alt='add image' className='add-image' />
					</label>
					<input
						id='addImage'
						type='file'
						className='input-add-image'
						onChange={addImageHandler}
					/>
				</div>
				<input
					type='text'
					className='category-name'
					placeholder='اسم التصنيف ....'
					ref={categoryInputRef}
				/>
				<button className='btn btn-primary me-2'>حفظ التعديلات</button>
			</form>
		</>
	);
};

export default AdminAddCategory;
