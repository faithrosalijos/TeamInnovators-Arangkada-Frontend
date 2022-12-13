import { Card, Button, TextField, Grid } from "@mui/material"
import React from "react"



export default function Login(){
    return (
        <Grid component="form">
            <div><br></br><br></br><br></br><br></br></div>
            <div style={{ backgroundColor: 'white', padding: 2, marginLeft: -130, maxWidth: 600, maxHeight: 670, textAlign: 'left', marginBottom:'1rem', borderRadius:35, opacity:'0.91'}}>
                <br></br>
                <h1 style={{marginLeft: 70}}>Log in</h1><br></br><br></br>
                <TextField required id="outlined-basic" label="Username" variant="outlined" sx={{margin: 0, marginLeft: 8, marginRight: 8, width: { sm:400, md:400}}}/><br></br><br></br><br></br>
                <TextField required id="outlined-basic" label="Password" variant="outlined" sx={{margin: 0, marginLeft: 8, marginRight: 8, width: { sm:400, md:400}}}/><br></br><br></br>
                <p style={{color: 'brown', fontSize: '15px', textAlign: 'center'}}>  <a href="https://www.youtube.com"  className="links">Forgot password?</a></p><br></br>
                <Button variant="contained" type="submit" style={{backgroundColor: '#D2A857', marginLeft: 200, marginTop:25, paddingInline:40, marginBottom:'45px', borderRadius:20}}>Log in</Button>
                
            </div>
            <p style={{color: 'white', fontSize: '15px', marginLeft: '-8rem'}}>Not registered yet?  <a href="https://www.youtube.com"  className="linksL">Create an account</a></p>
        </Grid>
    )
}
