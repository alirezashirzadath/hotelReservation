import {Box, createTheme} from "@mui/material";
export const primaryColor = "#212125";
export const secondaryColor = "#fdc944";
export const thirdaryColor = "#f3f3f3";
export const VerticalSpace = (height: string) => {
    return (<Box sx={{
        height
    }}>

    </Box>)
}
export const HorizontalSpace = (width: string) => {
    return (<Box sx={{
        width
    }}>

    </Box>)
}
export const theme = createTheme({
    typography: {
        fontFamily: "vazir,yekan",
    },
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor
        }
    }
})
