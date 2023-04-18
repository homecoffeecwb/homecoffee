import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopy from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import QRCode from "qrcode.react";
import copy from "copy-to-clipboard";

import useLanguage from "../../../common/hooks/useLanguage";
import { Box, Dialog, Typography } from "@mui/material";

/**
 * Button that opens a modal with a QR Code pointing to the
 * current URL and the same URL in text format for copying to
 * the clipboard
 */
const ShareButton: React.FC = () => {
  const { getText, getAria } = useLanguage();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [urlCopied, setUrlCopied] = React.useState<boolean>(false);

	// get the current URL from the location object
  const url = window.location.href;

	/**
	 * Copy the URL to the clipboard and set the urlCopied state
	 * to true, so the app can show a response to the user
	 */
  const handleCopyToClipboard = () => {
    copy(url, {
      format: "text/plain",
      onCopy: () => {
        setUrlCopied(true);
      },
    });
  };

  return (
    <>
			{/* Main button that opens the modal */}
      <IconButton
        color="primary"
        aria-label={getAria("share")}
        onClick={() => setShowModal(true)}
      >
        <ShareIcon />
      </IconButton>

			{/* MUI Dialog modal with the QR Code and the URL in text format */}
      <Dialog
        open={showModal}
        onClose={() => { setShowModal(false); setUrlCopied(false) }}
        aria-labelledby={getAria("shareModalTitle")}
        aria-describedby={getAria("shareModalDescription")}
      >
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          px={1}
          py={2}
        >
          <Typography variant="h6" component="h2" mb={1}>
            {getText("shareThisPage")}
          </Typography>

          <Box border={1} borderRadius={1} borderColor="gray" p={1} mb={2}>
						{/* QRCode pointing to the current URL */}
            <QRCode value={url} size={160} />
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="stretch"
            alignSelf="stretch"
            justifyContent={"space-between"}
            py={1}
            px={2}
          >
						{/* Current URL in text format */}
            <Typography
              component={"span"}
              border={1}
              borderColor="gray"
              borderRadius={1}
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              px={2}
              mr={1}
            >
              {url}
            </Typography>

            <Box border={1} borderColor="gray" borderRadius={1}>
							{/* Button to copy the URL to the clipboard */}
              <IconButton
                onClick={handleCopyToClipboard}
                title={getText("copyToClipboard")}
                size="small"
              >
                <ContentCopy />
              </IconButton>
            </Box>
          </Box>
					
					{/* Feedback of text copied */}
          {urlCopied && (
            <Typography component="span" color={"success"} mb={0}>
              {getText("copiedToClipboard")}
            </Typography>
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default ShareButton;
