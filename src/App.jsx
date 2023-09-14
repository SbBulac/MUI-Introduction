import React from 'react'
import { Button, TextField, Typography } from '@mui/material';
import { Box, borderRadius } from '@mui/system';

const App = () => {
  return (
    <>
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
          <Typography sx={{color: "black"}} variant="h5" component="h5">
            LogIn
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: [2] }}>
            <TextField sx={{
              width: [500]
            }} id="outlined-basic" label="User" variant="outlined" />
            <TextField sx={{
              width: [500]
            }} id="outlined-basic" label="Password" variant="outlined" type="password"/>
          </Box>
          <Button variant="contained">Submit</Button>
        </Box>
      </Box >
    </>
  )
}

export default App