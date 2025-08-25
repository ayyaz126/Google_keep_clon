import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link } from "react-router-dom";

function NavList({ open }) {

  const navList = [
    { id: 1, name: "Notes", icon: <Lightbulb />, route: "/" },
    { id: 2, name: "Reminders", icon: <NotificationsActiveIcon /> },
    { id: 3, name: " Edit lables", icon: <EditIcon /> },
    { id: 4, name: "Archives", icon: <Archive />, route: "/archive" },
    { id: 5, name: "Trash", icon: <Delete />, route: "/delete" },
  ];
  
  return (
    <>
      <List>
        {navList.map((list) => (
          <ListItem key={list.id} disablePadding sx={{ display: "block" }}>

             <Link to={list.route}  style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}> 
            <ListItemButton
            
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
             <Link to={list.route}/>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {list.icon}
              </ListItemIcon>
              <ListItemText
                primary={list.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default NavList;
