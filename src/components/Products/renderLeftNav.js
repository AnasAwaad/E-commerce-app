import left from "../../images/next.png";
import "./productNav.css";
const renderLeftNav = (onClick, disabled) => (
	<img
		src={left}
		alt=''
		width='35px'
		onClick={onClick}
		onDisable={disabled}
		height='35px'
		className='img-nav-left'
	/>
);

export default renderLeftNav;
