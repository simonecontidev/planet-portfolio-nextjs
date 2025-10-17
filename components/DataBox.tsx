import { Box, Typography } from '@mui/material'
import React from 'react'

interface Props {
  title: string
  data: string
}

const DataBox: React.FC<Props> = ({ title, data }) => {
  return (
    <Box
      sx={{
        minWidth: 180,
        flex: '1 1 200px',
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 2,
        p: 3,
        m: 2,
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'rgba(255,255,255,0.5)',
          background: 'rgba(255,255,255,0.1)',
          transform: 'translateY(-3px)',
        },
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: '0.75rem',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          opacity: 0.7,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mt: 1,
          fontWeight: 600,
          color: '#fff',
          letterSpacing: '0.5px',
        }}
      >
        {data}
      </Typography>
    </Box>
  )
}

export default DataBox