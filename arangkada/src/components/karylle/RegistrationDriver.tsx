import { Card, Button, TextField } from "@mui/material"
import React from "react"
import { useState } from "react";



export default function RegisterDriver() {
    const [licenseNumber, setLicenseNumber] = useState("");
    const [licenseCode, setLicenseCode] = useState("");

    const handleLicenseNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLicenseNumber(event.target.value);
    }

    const handleLicenseCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLicenseCode(event.target.value);
    }

    return (
        <div className="contain" >
            <h3>You are a Driver!</h3>
            <img src={'./images/driver.png'} style={{width:210, height:210, marginLeft:'150px', marginRight:'150px'}}/>
            <i><p style={{fontSize: '15px' }}>Please fill further information</p></i>
            <TextField id="outlined-basic" label="License Number" variant="outlined" value={licenseNumber} onChange={handleLicenseNumberChange} sx={{margin: 1, width: { sm:400, md:400}}}/><br></br>
            <TextField id="outlined-basic" label="License Code" variant="outlined" value={licenseCode} onChange={handleLicenseCodeChange} sx={{margin: 1, width: { sm:400, md:400}}}/><br></br>
            <Button  variant="contained" style={{backgroundColor: '#D2A857', marginTop:25, paddingInline:40, marginBottom:'45px'}}>SUBMIT</Button>
        </div>

    )
}