import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import RightDrawer from "./RightDrawer";

export default function Navbar() {
  return (
    <Box
      component="nav"
      aria-label="My site"
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        height: "60px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Home Logo / Icon */}
      <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <ListItemButton
          component="a"
          href="#home"
          aria-label="Home"
          sx={{ minWidth: "auto" }}
        >
          <Home />
        </ListItemButton>
      </Box>

      {/* Menu Items - hide on small screens */}
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          display: { xs: "none", sm: "flex" }, 
          marginLeft: 2,
          flexGrow: 1,
        }}
      >
        {["About Me","Skills","Projects", "Contact"].map((item) => (
          <React.Fragment key={item}>
            <ListItem role="none">
              <ListItemButton role="menuitem" component="a" href={`#${item}`}>
                {item}
              </ListItemButton>
            </ListItem>
            <ListDivider />
          </React.Fragment>
        ))}
      </List>

      {/* Right Drawer Button */}
      <Box sx={{ marginLeft: "auto" }}>
        <RightDrawer />
      </Box>
    </Box>
  );
}
