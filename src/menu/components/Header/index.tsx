import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import LogoFlagBranca from "../../../assets/logos/Home's Coffee_COLOR-FLAG.svg";
import "./styles.scss";

interface HeaderProps {}

/**
 * Menu header, used in the restaurant menu page
 */
const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div className="MenuHeader">
      <IconButton className="lang-btn">PT</IconButton>
      <img src={LogoFlagBranca} className="logo" alt="Home's Coffe" />
      <IconButton color="primary" aria-label="Compartilhar">
        <ShareIcon />
      </IconButton>
    </div>
  );
};

export default Header;
