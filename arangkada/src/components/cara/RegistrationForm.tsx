import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, InputAdornment, IconButton } from "@mui/material"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RegistrationForm() {
    const [gender, setGender] = useState("");
    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [lastname, setLastname] = useState("");
    const [checkedOp, setCheckedOp] = useState(false);
    const [checkedDv, setCheckedDv] = useState(false);
    const [contactNumber, setContactNumber] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handlePasswordShow = () => {
        setShowPassword(!showPassword);
    }

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

    const handleTypeOperatorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedOp(event.target.checked);
    };

    const handleTypeDriverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedDv(event.target.checked);
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

    const handleContinueClick = () => {
        navigate("/registration/registeroperator/");
    }
    

    return (
        <div className="regform">
            <strong><p style={{color: '#646464', textAlign: 'left', lineHeight: '.2em'}}>Registration</p></strong>
            <hr className="line"></hr>
                <div className="check">
                    <FormControlLabel control={<Checkbox checked={checkedOp} onChange={handleTypeOperatorChange} sx={{color: '#646464', marginRight: 3}}/>} label="PUV Operator" />
                    <FormControlLabel control={<Checkbox checked={checkedDv} onChange={handleTypeDriverChange} sx={{marginLeft: 20, marginRight: 3}}/>} label="Driver" />
                </div>
                
                <div className="three">
                    <TextField id="outlined-basic" label="Firstname" variant="outlined" value={firstname} onChange={handleFirstnameChange} sx={{margin: 1}}/>
                    <TextField id="outlined-basic" label="Middlename" variant="outlined" value={middlename} onChange={handleMiddlenameChange} sx={{margin: 1}}/>
                    <TextField id="outlined-basic" label="Lastname" variant="outlined" value={lastname} onChange={handleLastnameChange} sx={{margin: 1}}/>
                </div>
                <div className="two">
                    <TextField id="outlined-basic" label="Contact Number" variant="outlined" value={contactNumber} onChange={handleContactNumberChange} sx={{margin: 1}}/>
                    <TextField id="outlined-basic" label="Birthdate" variant="outlined" value={birthdate} onChange={handleBirthdateChange} sx={{margin: 1}}/>
                    <TextField id="outlined-basic" label="Age" variant="outlined" value={age} onChange={handleAgeChange} sx={{margin: 1}}/>
                    <FormControl>
                    <InputLabel id="demo-simple-select-label" sx={{margin: 1}}>Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    onChange={handleGenderChange}
                    sx={{margin: 1}}
                    >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    </Select>
                    </FormControl>
                </div>

                <TextField id="outlined-basic" label="Address" variant="outlined" value={address} onChange={handleAddressChange} sx={{margin: 1, width:{sd: 700, md: 700}}}/><br></br>
                <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={handleUsernameChange} sx={{margin: 1, width:{sd: 700, md: 700}}}/><br></br>
                <TextField 
                    onChange={handlePasswordChange}
                    type={showPassword? "text": "password"} 
                    value={password} 
                    label="Password"
                    sx={{margin: 1, width:{sd: 700, md: 700}}} 
                    InputProps={{ endAdornment: (<InputAdornment position="end"> <IconButton onClick={handlePasswordShow}>{showPassword? <VisibilityOff />: <Visibility /> }</IconButton> </InputAdornment>) }} 
                />
            <Button variant="contained" onClick={handleContinueClick} style={{backgroundColor: '#D2A857', marginTop: 25, paddingInline: 40}}>Continue</Button><br></br>
            <p style={{color: 'gray', fontSize: '15px'}}>By continuing, you agree to Arangkadas's <a href="https://www.facebook.com/cara.q.encabo"  className="links">Terms of Service</a> and acknowledge you've read our <a href="https://www.facebook.com/cara.q.encabo" className="links">Privacy Policy</a></p>

            <strong><a href="https://www.facebook.com/cara.q.encabo"  className="links" style={{fontSize: '18px'}}>Have an account? Log in</a></strong>
        
        </div>
    )
}