import {Box, Stack} from "@mui/material";
import AlbumItem from "./AlbumItem";

const Album = ({items1,items2}: { items1: { image: string,discount:string }[],items2: { image: string,discount:string }[] }) => {
    return (
        <Stack sx={{
            width:"90%",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center"
        }}>
            <Stack  sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems:"center",
                flexWrap: "wrap",
                width: "50%",
            }}>
                {items1.map((item: any, index: number) => {
                    return <AlbumItem className={""} discount={item.discount} image={item.image}/>
                })}

            </Stack>
            <Stack  sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                flexWrap: "wrap",
                width: "50%",
                alignItems:"center",
                mt:3
            }}>
                {items2.map((item: any, index: number) => {
                    return <AlbumItem discount={item.discount} image={item.image} className={""}/>
                })}

            </Stack>
        </Stack>
    )
}
export default Album;