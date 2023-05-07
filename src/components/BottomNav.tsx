import {Stack, Typography} from "@mui/material";
import {Home} from "@mui/icons-material";
import {HiHome} from "react-icons/hi";
import {useDispatch, useSelector} from "react-redux";
import {secondaryColor} from "../constans/constans";
import BottomNavItem from "./BottomNavItem";
import {CHANGE_BOTTOM_MENU} from "../services/redux/main/menuSlice";
import {useEffect, useState} from "react";

const BottomNav = ({items}: { items: { title: string, icon: JSX.Element }[] }) => {
    const mainState = useSelector((state: any) => state.mainReducer);
    const menuState = useSelector((state: any) => state.menuReducer);
    const dispatch = useDispatch();
    const [pos,setPos] = useState("absolute");
    useEffect(()=>{
       setTimeout(()=>{
           setPos("fixed")
       },1100)
    },[])
    return (
        <Stack className={"animate__animated animate__bounceInRight"} sx={{
            position: pos,
            bottom: 0,
            width: "100%",
            py: 1,
            background: "white",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            boxShadow:mainState.darkMode ? "0 0 30px 6px rgba(0,0,0,1)" : "0 0 30px 6px rgba(255,255,255,1)",
            justifyContent: "space-around", color: mainState.darkMode ? secondaryColor : "#1b4a80",

        }}>
            {items.map((item: any, index) => <BottomNavItem key={index} onClick={() => dispatch(CHANGE_BOTTOM_MENU(index))}
                                                            title={item.title} icon={item.icon}
                                                            active={index === menuState.activeBottomMenu}/>)}
        </Stack>
    )
}
export default BottomNav;