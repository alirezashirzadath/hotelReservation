import {Box, Stack, Typography} from "@mui/material";
import {AiFillFire} from "react-icons/ai";
import {secondaryColor, VerticalSpace} from "../../../constans/constans";
import AdItem from "./AdItem";

const Ads = ({items}: { items: { title: string, startDate: string, endDate: string, special: boolean, roomCount: string, price: string, wifi: boolean, kitchen: boolean, endAttr: string }[] }) => {
    return (
        <>
            <Stack sx={{
                display: "flex",
                flexDirection: "row-reverse",
                width: "100%",
                alignItems: "end",
                justifyContent: "end",
                overflow: "auto",
                py: 1
            }}>
                {items.map((item: any, index: number) => <AdItem key={index} title={item.title}
                                                                 startDate={item.startDate} endDate={item.endDate}
                                                                 special={item.special} roomCount={item.roomCount}
                                                                 price={item.price}
                                                                 wifi={item.wifi} kitchen={item.kitchen}
                                                                 endAttr={item.endAttr}/>)}

            </Stack>
        </>
    )
}
export default Ads;