import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {ReactNode} from "react";
export const Spinner = (): ReactNode => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
}