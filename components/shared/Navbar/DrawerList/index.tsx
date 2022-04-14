import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

import * as routing from "../../../../utils/routing/index";

const DrawerList = () => {
  return (
    <Box role="presentation" className="drawer_list_wrapper">
      <List>
        {routing.links.map((text) => (
          <ListItem button key={text.id}>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
        <div className="navbar_icon">
          <InstagramIcon />
          <TelegramIcon />
        </div>
      </List>
    </Box>
  );
};

export default DrawerList;
