import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";

import useLanguage from "../../../common/hooks/useLanguage";

import LogoFlagBranca from "../../../assets/logos/Home's Coffee_COLOR-FLAG.svg";
import "./styles.scss";

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
      <IconButton color="primary" aria-label={language.texts.share}>
        <ShareIcon />
      </IconButton>
    </div>
  );
};

export default Header;
