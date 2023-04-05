import React from "react";
import ShareIcon from '@mui/icons-material/Share';
import LogoFlagBranca from "../../../assets/logos/Home's Coffee_COLOR-FLAG.svg";
import './styles.scss';

interface HeaderProps {

}

/**
* Menu header, used in the restaurant menu page
*/
const Header: React.FunctionComponent<HeaderProps> = () => {

	return (
		<div className="MenuHeader">
			<button className="lang-btn">PT</button>
			<img src={LogoFlagBranca} className="logo" alt="Home's Coffe" />	
			<ShareIcon className="share-btn" />
		</div>
	);
};

export default Header;
