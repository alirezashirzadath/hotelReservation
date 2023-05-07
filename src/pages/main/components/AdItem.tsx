import {Box, Stack, Typography} from "@mui/material";
import {AiFillFire} from "react-icons/ai";
import {secondaryColor, VerticalSpace} from "../../../constans/constans";

const AdItem = ({
                    title,
                    startDate,
                    endDate,
                    special,
                    roomCount,
                    price,
                    wifi,
                    kitchen,
                    endAttr
                }: { title: string, startDate: string, endDate: string, special: boolean, roomCount: string, price: string, wifi: boolean, kitchen: boolean, endAttr: string }) => {
    return (
        <Box sx={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "85%",
            backgroundColor: "white",
            borderRadius: "13px",
            px: 1.2,
            py: 2, mx: 1,
            boxShadow: "0 0 10px 1px rgba(0,0,0,0.05)"
        }}>
            <Stack sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography sx={{
                    fontSize: "0.9rem",
                    fontWeight: "bold"
                }}>
                    {title}
                </Typography>
                {special && <Stack sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <AiFillFire style={{
                        color: secondaryColor
                    }}/>
                    <Typography sx={{
                        ml: 1,
                        fontSize: "0.9rem",
                        fontWeight: "500"
                    }}>پیشنهاد ویژه</Typography>
                </Stack>}

            </Stack>
            {VerticalSpace("0.5rem")}
            <Typography sx={{
                alignSelf: "end",
                fontWeight: "500",
                fontSize: "0.8rem",
                color: "grey"
            }}>
                از {startDate} تا {endDate}
            </Typography>
            {VerticalSpace("0.8rem")}
            <Stack sx={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "end",
                alignSelf: "center",
                width: "100%",
                flexWrap: "wrap",

            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignSelf: "center",
                    py: 0.4,
                    px: 2.5,
                    backgroundColor: "green",
                    borderRadius: "20px",
                    ml: 1,
                    mb: 1
                }}>
                    <Typography dir={"rtl"} sx={{
                        color: "white",
                        fontSize: "0.85rem",

                    }}>{roomCount} اتاقه</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignSelf: "center",
                    py: 0.4,
                    px: 2.5,
                    backgroundColor: "#ca8c25",
                    borderRadius: "20px",
                    ml: 1,
                    mb: 1
                }}>
                    <Typography dir={"rtl"} sx={{
                        color: "white",
                        fontSize: "0.85rem",
                    }}>{price}</Typography>
                </Box>
                {kitchen && <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignSelf: "center",
                    py: 0.4,
                    px: 2.5,
                    backgroundColor: "purple",
                    borderRadius: "20px",
                    ml: 1,
                    mb: 1
                }}>
                    <Typography dir={"rtl"} sx={{
                        color: "white",
                        fontSize: "0.85rem"
                    }}>آشپزخانه</Typography>
                </Box>
                }
                {
                    wifi && <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignSelf: "center",
                        py: 0.4,
                        px: 2.5,
                        backgroundColor: secondaryColor,
                        borderRadius: "20px",
                        ml: 1,
                        mb: 1
                    }}>
                        <Typography dir={"rtl"} sx={{
                            color: "white",
                            fontSize: "0.85rem"
                        }}>WI-FI</Typography>
                    </Box>
                }
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignSelf: "center",
                    py: 0.4,
                    px: 2.5,
                    backgroundColor: "#63b7c1",
                    borderRadius: "20px",
                    ml: 1,
                    mb: 1
                }}>
                    <Typography dir={"rtl"} sx={{
                        color: "white",
                        fontSize: "0.85rem"
                    }}>{endAttr}</Typography>
                </Box>

            </Stack>
        </Box>
    )
}
export default AdItem;