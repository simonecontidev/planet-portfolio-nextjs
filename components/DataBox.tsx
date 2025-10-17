import { Box } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';

interface Props{
    title: string;
    data: string;
}

const DataBox = ({ title, data }) => {
  return (
    <Box sx={{ border: "1px solid gray", padding: "2", borderRadius: "2", marginTop: "4" }}>
      <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{data}</Typography>
    </Box>
  )
}

export default DataBox
