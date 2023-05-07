import {Box, Typography} from "@mui/material";
import {primaryColor, secondaryColor} from "../../../constans/constans";

const AlbumItem = ({image,discount,className} : { image: string,discount:string,className:string }) => {
    return (
        <Box className={className} sx={{
            display: "flex",
            position: "relative",
            alignItems: "center",

            background: "url('"+image+"')",
            backgroundColor:"black",

            width: "40vw",
            height: "40vw",
            borderRadius: "20px",
            boxShadow: "0 0 10px 1px rgba(0,0,0,0.07)",
            backgroundOrigin: "border-box",
            backgroundSize:"cover",
            flexDirection:"column",
            mb:1.5,


        }}>
            <Box sx={{
                display:"center",
                alignItems:"center",
                justifyContent:"center",
                alignSelf:"end",
                width:"2.5rem",
                height:"2.5rem",
                background:secondaryColor,
                borderRadius: "0 20px 0 20px",
            }}>
                <Typography sx={{
                    color:primaryColor
                }}>
                    {discount}%
                </Typography>
            </Box>

        </Box>
    )
}
export default AlbumItem