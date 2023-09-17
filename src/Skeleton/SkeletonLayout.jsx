import React, { useEffect, useState } from 'react'
import { Skeleton, Typography } from '@mui/material'
import axios from 'axios'
import { Box } from '@mui/system'

const SkeletonLayout = () => {
    const [loading, setLoading] = useState(true)
    const [publicacion, setPublicacion] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            try {
                axios.get('https://test.cmc-software.com/test.json')
                    .then(response => setPublicacion(response.data))
                    .finally(() => setLoading(false))
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }, 2000);
    }, [])
    return (
        <>
            {loading ?
                // loading
                <Box sx={{ backgroundColor: "#283747", width: "100vw", height: "100vh", flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ width: [500], height: [500], display: "flex", flexDirection: "column", gap: [2], backgroundColor: "#212F3D", borderRadius: "10px" }}>
                        <Box sx={{ display: "flex", gap: [2], width: "100%", pt: [4], px: [2] }}>
                            <Skeleton variant="circular" width={60} height={50} />
                            <Box sx={{ width: "100%" }}>
                                <Skeleton variant="text" sx={{ fontSize: '1rem', width: "70%" }} />
                                <Skeleton variant="text" sx={{ fontSize: '1rem', width: "50%" }} />
                            </Box>
                        </Box>
                        <Box><Skeleton variant="rectangular" width={500} height={280} /></Box>
                        <Box sx={{ px: [2] }}>
                            <Skeleton variant="text" sx={{ fontSize: '1rem', width: "100%" }} />
                            <Skeleton variant="text" sx={{ fontSize: '1rem', width: "80%" }} />
                        </Box>
                    </Box>
                </Box> :
                // no loading
                <Box sx={{ backgroundColor: "#283747", width: "100vw", height: "100vh", flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ width: [500], height: [500], display: "flex", flexDirection: "column", gap: [2], backgroundColor: "#212F3D", borderRadius: "10px" }}>
                        <Box sx={{ display: "flex", gap: [2], width: "100%", pt: [4], px: [2] }}>
                            <img src={publicacion.img1} width={60} height={50} />
                            <Box sx={{ width: "100%" }}>
                                <Typography sx={{ color: "#FFF" }}>TED</Typography>
                                <Typography sx={{ color: "#FFF" }}>{publicacion.time}</Typography>
                            </Box>
                        </Box>
                        <Box><img src={publicacion.img2} width={500} height={280} /></Box>
                        <Box sx={{ px: [2] }}>
                            <Typography sx={{ color: "#FFF" }}>{publicacion.description}</Typography>
                        </Box>
                    </Box>
                </Box>}
        </>
    )
}

export default SkeletonLayout