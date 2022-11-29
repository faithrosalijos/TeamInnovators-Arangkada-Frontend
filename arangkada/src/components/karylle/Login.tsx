import { Card, Button, TextField } from "@mui/material"
import React from "react"


export default function Login(){
    return (
        <div className="App">
        <Card sx={{ marginLeft: 90, maxWidth: 550, maxHeight: 670, textAlign: 'left', marginBottom:'1rem' , padding:3}}>
            <form>
            <h2>Log in</h2><br></br>
            <TextField id="outlined-basic" label="Username" variant="outlined" sx={{margin: 1, width: { sm:400, md:400}}}/><br></br><br></br>
            <TextField id="outlined-basic" label="Password" variant="outlined" sx={{margin: 1, width: { sm:400, md:400}}}/><br></br>
            <Button variant="contained" style={{backgroundColor: '#D2A857', marginTop:25, paddingInline:40, marginBottom:'45px', textAlign: 'center'}}>Log in</Button>
            <p style={{color: 'black', fontSize: '15px', marginLeft: '50rem'}}>  <a href="https://www.youtube.com"  className="links">Forgot password?</a></p>
            </form>
        </Card>

        <p style={{color: 'white', fontSize: '15px', marginLeft: '50rem'}}>Not registered yet?  <a href="https://www.youtube.com"  className="links">Create an account</a></p>
        </div>
    )
}
