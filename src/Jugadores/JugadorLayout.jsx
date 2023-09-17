import React from 'react'
import Jugador from './Jugador'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'

const JugadorLayout = () => {
    const arr = [
        {
            nombre: "L. Martinez",
            size: 12,
        },
        {
            nombre: "Di María",
            size: 6,
        },
        {
            nombre: "Messi",
            size: 6,
        },
        {
            nombre: "Lo Celso",
            size: 4,
        },
        {
            nombre: "Paredes",
            size: 4,
        },
        {
            nombre: "De Paul",
            size: 4,
        },
        {
            nombre: "Acuña",
            size: 3,
        },
        {
            nombre: "Otamendi",
            size: 3,
        },
        {
            nombre: "Romero",
            size: 3,
        },
        {
            nombre: "Molina",
            size: 3,
        },
        {
            nombre: "Martinez",
            size: 12,
        },
    ];

    return (
        <Box width="100vw" height="100vh" sx={{ backgroundColor: "rgb(37,181,65)", background: "linear-gradient(90deg, rgba(37,181,65,1) 0%, rgba(31,171,40,1) 100%)"}}>
            <Grid container sx={{ width: "100%", height: "100%", alignItems: "center" }}>
                {arr.map(item => <Grid xs={item.size}><Jugador name={item.nombre} /></Grid>)}
            </Grid>
        </Box>
    )
}

export default JugadorLayout