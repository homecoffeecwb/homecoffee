import {Box} from "@mui/material";
import React from "react";
import Header from "../../components/Header";

interface MainProps {}

/**
 * Main page, shows the restaurant menu for the clients
 */
const Main: React.FunctionComponent<MainProps> = () => {
  return (
    <Box display={"flex"} flexDirection="column" justifyContent={"flex-top"} >
			<Header />
		</Box>
  );
};

export default Main;
