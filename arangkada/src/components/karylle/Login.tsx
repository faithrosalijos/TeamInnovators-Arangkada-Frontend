import { Card, Button, TextField } from "@mui/material"
import Loginbg from '../../images/Login.png';
import React from "react"


export default function Login(){
    return (
        <div className="bgimg">
            
            <div style={{ paddingLeft: 50, backgroundColor: 'white', padding: 3, marginLeft: 650, maxWidth: 550, maxHeight: 670, textAlign: 'left', marginBottom:'1rem'}}>
                
                <h2>Log in</h2><br></br>
                <TextField id="outlined-basic" label="Username" variant="outlined" sx={{margin: 1, width: { sm:400, md:400}}}/><br></br><br></br>
                <TextField id="outlined-basic" label="Password" variant="outlined" sx={{margin: 1, width: { sm:400, md:400}}}/><br></br>
                <Button variant="contained" style={{backgroundColor: '#D2A857', marginTop:25, paddingInline:40, marginBottom:'45px', textAlign: 'center'}}>Log in</Button>
                <p style={{color: 'black', fontSize: '15px', marginLeft: '50rem'}}>  <a href="https://www.youtube.com"  className="links">Forgot password?</a></p>
                
            </div>
            <p style={{color: 'white', fontSize: '15px', marginLeft: '50rem'}}>Not registered yet?  <a href="https://www.youtube.com"  className="links">Create an account</a></p>
        </div>
    )
}
