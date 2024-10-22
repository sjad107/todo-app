import React from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Menu, MenuItem } from "@mui/material";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleClose();
  };
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(i18n.language);
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: "2em",
          height: "2em",
          backgroundColor: "var(--light-600)",
        }}
      >
        <img
          src={`${
            i18n.language === "ar" ? "/assets/iq.svg" : "/assets/gb.svg"
          }`}
          alt="language"
          style={{
            width: " 1.5em",
            height: " 0.9em",
          }}
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            changeLanguage("en");
          }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeLanguage("ar");
          }}
        >
          العربية
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
