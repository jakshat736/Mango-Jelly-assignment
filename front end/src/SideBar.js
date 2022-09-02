import React,{useState,useEffect} from "react";
import { useStyles } from "./SideBarCss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { Link } from "react-router-dom";


export default function SideBar(props){
  const classes=useStyles()
return(
    <div className={classes.rootDiv}>
    
    <div sx={{ width: 250, maxWidth:'100%'}}>
  
    
      <MenuList>
      <Link to="/dashboard" className={classes.link}>
      <MenuItem>
          <ListItemIcon>
            <DashboardIcon fontSize="small" className={classes.iconStyle} />
          </ListItemIcon>
          <ListItemText className={classes.dashboardTextStyle}>DashBoard</ListItemText>
         
        </MenuItem>
        </Link>

        <Link to="/dashboard/additems" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add Items</ListItemText>
         
        </MenuItem>
          </Link>
          
        <Link to="/dashboard/listofitems" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Item List</ListItemText>
         
        </MenuItem>
          </Link>
<Divider />
        
      </MenuList>
    
    </div>
   
    </div>
)


}