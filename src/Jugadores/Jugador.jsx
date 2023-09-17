import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import camiseta from '../assets/camiseta.svg'
import React from 'react'

const Jugador = ({ name }) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "max-content",
    }}>
      <Box sx={{ backgroundColor: "rgb(214,172,32)A", background: "linear-gradient(90deg, rgba(214,172,32,1) 0%, rgba(127,100,2,1) 100%)", p: [1.4], borderRadius: "1rem", border: [1] }}>
        <img src={camiseta} alt="Camiseta Arg" width={80} />
        <Typography sx={{ textAlign: "center" }}>{name}</Typography>
      </Box>
    </Box>
  )
}

export default Jugador