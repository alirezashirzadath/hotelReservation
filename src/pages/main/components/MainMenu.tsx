import {Box, Stack, Typography} from "@mui/material";
import MainMenuItem from "./MainMenuItem";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_MAIN_MENU} from "../../../services/redux/main/menuSlice";

const MainMenu = ({items}: { items: { title: string }[] }) => {
    const mainState = useSelector((state: any) => state.mainReducer);
    const menuState = useSelector((state: any) => state.menuReducer);
    const dispatch = useDispatch();
    return (
        <Stack sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "end",
                alignItems: "center",
                width: "90%",
            }}>
                {items.map((item: any, index: number) => <MainMenuItem onClick={() => dispatch(CHANGE_MAIN_MENU(index))}
                                                                       title={item.title}
                                                                       active={index === menuState.activeMenu}/>)}
            </Box>
        </Stack>
    )
}
export default MainMenu;