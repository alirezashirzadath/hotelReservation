import {Box, Grid, Stack, Typography} from "@mui/material";
import {primaryColor, secondaryColor, thirdaryColor, VerticalSpace} from "../../constans/constans";
import {DarkMode, LightMode, Segment} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_THEME_MODE} from "../../services/redux/main/mainSlice";
import MainMenu from "./components/MainMenu";
import {AiFillFire, AiFillProfile, AiTwotoneSetting} from "react-icons/ai";
import Ads from "./components/Ads";
import Album from "./components/Album";
import BottomNav from "../../components/BottomNav";
import {HiHome, HiMap} from "react-icons/hi";
import {FaUserAlt} from "react-icons/fa";

const Main = () => {

    const mainState = useSelector((state: any) => state.mainReducer);
    const dispatch = useDispatch();
    return (
        <Stack sx={{
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundColor: mainState.darkMode ? primaryColor : thirdaryColor,
        }}>
            <Grid container>
                <Grid item xs={12}>
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
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "90%",
                            py: 1.5,
                            color: mainState.darkMode ? thirdaryColor : primaryColor
                        }}>
                            <Typography className={"animate__animated animate__bounceInRight"} sx={{
                                fontWeight: "bold"
                            }} variant={"h4"}>
                                رزرو هتل
                            </Typography>
                            <Box className={"animate__animated animate__bounceIn"} onClick={() => {
                                dispatch(CHANGE_THEME_MODE())
                            }} sx={{
                                display: "flex",
                                height: "3rem",
                                width: "3rem",
                                borderRadius: "50%",
                                backgroundColor: secondaryColor,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                {mainState.darkMode ? <LightMode/> : <DarkMode/>}
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <MainMenu items={[
                        {title: "ویلا"}, {title: "هتل آپارتمان"}, {title: "همه"}
                    ]}/>
                </Grid>
                <Grid xs={12} item>
                    {VerticalSpace("1rem")}
                    <Ads items={[
                        {
                            title: "ویلا برای 16 نفر در شمال",
                            startDate: "1402/03/02",
                            endDate: "1402/03/27",
                            special: true,
                            roomCount: "3",
                            price: "520000 تومان - 790000 تومان",
                            wifi: true,
                            kitchen: true,
                            endAttr: "استخر سرباز"
                        },
                        {
                            title: "ویلای لوکس با استخر سرپوشیده",
                            startDate: "1402/04/05",
                            endDate: "1402/03/22",
                            special: false,
                            roomCount: "2",
                            price: "740000 تومان - 1250000 تومان",
                            wifi: false,
                            kitchen: true,
                            endAttr: "استخر سرپوشیده"
                        },
                        {
                            title: "ویلا جنگلی در ارتفاعات شمال",
                            startDate: "1402/06/17",
                            endDate: "1402/08/27",
                            special: true,
                            roomCount: "4",
                            price: "785000 تومان - 2200000 تومان",
                            wifi: true,
                            kitchen: false,
                            endAttr: "آلاچیق"
                        },
                    ]}/>
                </Grid>
                <Grid xs={12} item>
                    {VerticalSpace("0.5rem")}
                    <Stack sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: 'center',

                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row-reverse",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "90%"
                        }}>
                            <Typography variant={"h5"} sx={{
                                fontWeight: "bold",
                                color: mainState.darkMode ? "white" : primaryColor
                            }}>
                                مکان های محبوب
                            </Typography>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "3rem",
                                width: "3rem",
                                backgroundColor: secondaryColor,
                                borderRadius: "12px",
                                boxShadow: "0 0 12px 1px rgba(0,0,0,0.07)"
                            }}>
                                <Segment sx={{
                                    rotate: "180deg",
                                    color: mainState.darkMode ? "white" : primaryColor
                                }}/>
                            </Box>
                        </Box>
                        {VerticalSpace("1.1rem")}
                        <Album items1={[
                            {image: "/images/1.jpg", discount: "25"},
                            {image: "/images/2.jpg", discount: "42"},
                            {image: "/images/3.jpg", discount: "27"},
                        ]} items2={[
                            {image: "/images/4.jpg", discount: "15"},
                            {image: "/images/5.jpg", discount: "20"},
                            {image: "/images/6.jpg", discount: "8"},
                        ]}/>
                    </Stack>
                </Grid>
                <Grid xs={12} item>
                    {VerticalSpace("6rem")}
                </Grid>
                <BottomNav items={[
                    {
                        title: "خانه",
                        icon: <HiHome style={{fontSize: "1.8rem"}}/>
                    },
                    {
                        title: "نقشه",
                        icon: <HiMap style={{fontSize: "1.8rem"}}/>
                    },
                    {
                        title: "تنظیمات",
                        icon: <AiTwotoneSetting style={{fontSize: "1.8rem"}}/>
                    },
                    {
                        title: "پروفایل",
                        icon: <FaUserAlt style={{fontSize: "1.5rem"}}/>
                    }
                ]}/>

            </Grid>

        </Stack>
    )
}
export default Main;