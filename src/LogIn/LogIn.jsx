import React from 'react'
import { Button, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const LogIn = () => {
  return (
    <Box sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Box sx={{
          backgroundColor: "white",
          width: "36%",
          height: "38%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: [3],
          gap: [3]
        }}>
          <Typography sx={{ color: "black" }} variant="h5" component="h5">
            LogIn
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: [2] }}>
            <TextField sx={{
              width: [350]
            }} id="outlined-basic" label="User" variant="outlined" />
            <TextField sx={{
              width: [350]
            }} id="outlined-basic" label="Password" variant="outlined" type="password" />
          </Box>
          <Box sx={{ display: "flex", gap: [2], alignItems: "center" }}>
            <Button variant="contained" focusRipple={true} >Submit</Button>
            <Link href="#">SignIn</Link>
          </Box>
        </Box>
      </Box >
  )
}

export default LogIn