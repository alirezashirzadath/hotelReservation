import {Stack, Typography} from "@mui/material";
import {HiHome} from "react-icons/hi";
import {secondaryColor} from "../constans/constans";

const BottomNavItem = ({title, icon, active,onClick}: { title: string, icon: JSX.Element, active: boolean,onClick:()=>void }) => {
    return (
        <Stack onClick={onClick} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color:active ? secondaryColor : "#1b4a80"
        }}>
            {icon}
            <Typography sx={{
                fontSize: "0.9rem",
                fontWeight: "bold"
            }}>
                {title}
            </Typography>
        </Stack>
    )
}
export default BottomNavItem;