import React from "react";
import IconButton from "@mui/material/IconButton";

import useLanguage from "../../../common/hooks/useLanguage";

import LogoFlagBranca from "../../../assets/logos/Home's Coffee_COLOR-FLAG.svg";
import "./styles.scss";
import ShareButton from "../ShareButton";

interface HeaderProps {}

/**
 * Menu header, used in the restaurant menu page
 */
const Header: React.FunctionComponent<HeaderProps> = () => {
  const { language, togglePT_EN } = useLanguage();

  return (
    <div className="MenuHeader">
      <IconButton className="lang-btn" onClick={togglePT_EN}>
        {language.current}
      </IconButton>
      <img src={LogoFlagBranca} className="logo" alt="Home's Coffe" />
      <ShareButton />
    </div>
  );
};

export default Header;
