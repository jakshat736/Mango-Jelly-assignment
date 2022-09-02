import React,{useState,useEffect} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddItems from "./AddItems";
import ListOfItem from "./ListOfItems";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function DashBoard(props){

return(
    <div>
        <TopBar/>
        <div style={{display:'flex',flexDirection:'row'}}>
     <SideBar/>
       <Routes>
         <Route element={<AddItems/>} path="/additems"/>
         <Route element={<ListOfItem/>} path="/listofitems"/>
       </Routes>
       </div>
    
    </div>
)


}