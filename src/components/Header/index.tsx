import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import AccountCircle from "@material-ui/icons/AccountCircle";

const Header = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <div style={{ flexGrow: 1 }}></div>
        <IconButton edge="start" color="inherit">
          <MoreIcon />
        </IconButton>
        <IconButton edge="end" color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
