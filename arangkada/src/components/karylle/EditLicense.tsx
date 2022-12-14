import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function EditLicense() {
    const [licenseNumber, setLicenseNumber] = useState("");
    const [licenseCode, setLicenseCode ] = useState("");
    const navigate = useNavigate();


    const handleLicenseNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLicenseNumber(event.target.value);
    }

    const handleLicenseCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLicenseCode(event.target.value);
    }

    const handleCancelClick = () => {
        navigate("/driver/driverprofile/");
    }

    
    return (
        <div>
            <div className="one">
                <div>
                    <h2 style={{textAlign: 'left', color: '#90794C'}}>License Information</h2>
                    <hr className="line"></hr><br></br>
                </div>
                <TextField required id="outlined-required" label="License Number" defaultValue="A00-00-00000" onChange={handleLicenseNumberChange} sx={{margin: 2}}/>
                <TextField required id="outlined-required" label="License Code" defaultValue="A1" onChange={handleLicenseCodeChange} sx={{margin: 2}}/>
            </div>
            
            <Stack direction="row" justifyContent="end" padding={7}>
                <Button variant="contained" onClick={handleCancelClick} style={{backgroundColor: '#828E99', marginTop: 25, paddingInline: 40}}>Cancel</Button>
                <Button variant="contained" style={{backgroundColor: '#D2A857', marginTop: 25, paddingInline: 40, marginLeft: 15}}>Save Changes</Button>
            </Stack>
            
        </div>
          
            
    )
}