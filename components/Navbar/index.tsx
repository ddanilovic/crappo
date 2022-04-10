import { Button, SwipeableDrawer } from "@mui/material";
import React from "react";
import * as routing from "../../utils/routing/index";
import DrawerList from "./DrawerList";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="/static/logo.svg" alt="logo" />
      </div>
      <div className="navbar__links">
        {routing.links.map((item) => (
          <div key={item.id}>
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
      </div>
      <div className="navbar__hamburger" key={routing.anchor}>
        <Button onClick={() => setIsOpened(routing.toggleDrawer(true))}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          anchor={"right"}
          open={isOpened}
          onClose={() => setIsOpened(routing.toggleDrawer(false))}
          onOpen={() => setIsOpened(routing.toggleDrawer(true))}
        >
          <DrawerList />
        </SwipeableDrawer>
      </div>
    </div>
  );
};

export default Navbar;
