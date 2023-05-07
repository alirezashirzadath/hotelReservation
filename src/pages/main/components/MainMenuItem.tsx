import {Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {primaryColor} from "../../../constans/constans";

const MainMenuItem = ({title, active, onClick}: { title: string, active: boolean, onClick: () => void }) => {
    const mainState = useSelector((state: any) => state.mainReducer);

    return (
        <Typography className={"animate__animated animate__bounceInRight animate__faster"} onClick={onClick} sx={{
            fontWeight: active ? "bold" : 'normal',
            ml: 2,
            color: mainState.darkMode ? (active ? "white" : "rgba(255,255,255,0.7)") : (active ? primaryColor : "rgba(0,0,0,0.7)")
        }} variant={"h5"}>
            {title}
        </Typography>
    )
}
export default MainMenuItem;