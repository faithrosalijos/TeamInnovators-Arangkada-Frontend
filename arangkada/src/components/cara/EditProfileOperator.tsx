import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function OperatorInfo() {
    const [gender, setGender] = useState("");
    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [lastname, setLastname] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleGenderChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(event.target.value);
    };

    const handleMiddlenameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMiddlename(event.target.value);
    };

    const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(event.target.value);
    };

    const handleContactNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContactNumber(event.target.value);
    };

    const handleBirthdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBirthdate(event.target.value);
    };

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    };

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleCancelClick = () => {
        navigate("/operator/operatorprofile/");
    }


    
    return (
        <div>
            <div>
                <h2 style={{textAlign: 'left', color: '#90794C'}}>User Information</h2>
                <hr className="line"></hr><br></br>
            </div>
            <div className="three">
                <TextField required id="outlined-required" label="Firstname" defaultValue="John" onChange={handleFirstnameChange} sx={{margin: 2}}/>
                <TextField required id="outlined-required" label="Middlename" defaultValue="Santos" onChange={handleMiddlenameChange} sx={{margin: 2}}/>
                <TextField required id="outlined-required" label="Lastname" defaultValue="Doe" onChange={handleLastnameChange} sx={{margin: 2}}/>
            </div>
            <div className="two">
                <TextField required id="outlined-required" label="Contact Number" defaultValue="09231819397" onChange={handleContactNumberChange} sx={{margin: 2}}/>
                <TextField disabled id="outlined-disabled" label="Birthdate" defaultValue="2001-10-23" sx={{margin: 2}}/>
            </div>
            <div className="two">
                <TextField disabled id="outlined-disabled" label="Age" defaultValue="30" sx={{margin: 2}}/>
                <FormControl disabled>
                    <InputLabel id="demo-simple-select-disabled-label" sx={{margin: 2}}>Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-disabled-label"
                    id="demo-simple-select-disabled"
                    label="Gender"
                    defaultValue="Male"
                    onChange={handleGenderChange}
                    sx={{margin: 2}}
                    >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="one">
                <TextField required id="outlined-required" label="Address" defaultValue="Natalio B. Bacalso Ave, Cebu City, 6000 Cebu" onChange={handleAddressChange} sx={{margin: 2}}/>
                <TextField required id="outlined-required" label="Username" defaultValue="johndoe123" onChange={handleUsernameChange} sx={{margin: 2}}/>
                <TextField required id="outlined-required" label="Password" defaultValue="qwerty00" onChange={handlePasswordChange} sx={{margin: 2}}/>
            </div>
            
            <Stack direction="row" justifyContent="end" padding={7}>
                <Button variant="contained" onClick={handleCancelClick} style={{backgroundColor: '#828E99', marginTop: 25, paddingInline: 40}}>Cancel</Button>
                <Button variant="contained" style={{backgroundColor: '#D2A857', marginTop: 25, paddingInline: 40, marginLeft: 15}}>Save Changes</Button>
            </Stack>
            
        </div>
          
            
    )
}