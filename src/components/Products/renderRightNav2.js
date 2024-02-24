import right from "../../images/prev.png";
import "./productNav.css";
const renderRightNav2 = (onClick, disabled) => (
	<img
		src={right}
		alt=''
		width='35px'
		onClick={onClick}
		onDisable={disabled}
		height='35px'
		className='img-nav-right'
	/>
);

export default renderRightNav2;
