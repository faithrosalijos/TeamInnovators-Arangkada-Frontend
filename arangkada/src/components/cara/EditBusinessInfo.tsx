import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function OperatorInfo() {
    const [businessName, setBusinessName] = useState("");
    const [permitNumber, setPermitNumber] = useState("");
    const navigate = useNavigate();


    const handleBusinessNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBusinessName(event.target.value);
    }

    const handlePermitNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPermitNumber(event.target.value);
    }

    const handleCancelClick = () => {
        navigate("/operator/operatorprofile/");
    }

    
    return (
        <div>
            <div className="one">
                <div>
                    <h2 style={{textAlign: 'left', color: '#90794C'}}>Business Information</h2>
                    <hr className="line"></hr><br></br>
                </div>
                <TextField required id="outlined-required" label="Business Name" defaultValue="TriWheels" onChange={handleBusinessNameChange} sx={{margin: 2}}/>
                <TextField required id="outlined-required" label="Business Permit Number" defaultValue="001492" onChange={handlePermitNumberChange} sx={{margin: 2}}/>
            </div>
            
            <Stack direction="row" justifyContent="end" padding={7}>
                <Button variant="contained" onClick={handleCancelClick} style={{backgroundColor: '#828E99', marginTop: 25, paddingInline: 40}}>Cancel</Button>
                <Button variant="contained" style={{backgroundColor: '#D2A857', marginTop: 25, paddingInline: 40, marginLeft: 15}}>Save Changes</Button>
            </Stack>
            
        </div>
          
            
    )
}