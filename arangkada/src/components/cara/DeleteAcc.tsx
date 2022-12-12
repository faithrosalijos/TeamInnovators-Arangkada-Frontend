import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Grid, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function DeleteAcc() {

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handlePasswordShow = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPasswordError(null);
    
        if (password === "") {
          setPasswordError("Please enter your password.")
        /*} else if (password !== "password") {
          setPasswordError("Password is incorrect.")
        }*/ 
        }
    }

    const handleCancelClick = () => {
        navigate("/operator/operatorprofile/");
    }


    return (
        <div>
            <Stack component="form" onSubmit={handleSubmit}>
            <h1 style={{textAlign: 'left', color: '#90794C'}}>Delete your account</h1>
            <hr className="line"></hr>
            <p style={{textAlign: 'left', fontSize: '20px', paddingTop: 40}}>We're sorry to hear you'd like to delete your account. </p>
            <h5 style={{textAlign: 'left', color: '#90794C', fontSize: 20}}>Re-enter your password:</h5>

            <Stack direction="row" justifyContent="start">
                <TextField 
                    onChange={handlePasswordChange}
                    type={showPassword? "text": "password"} 
                    value={password} 
                    label="Password" 
                    error={passwordError !== null}
                    helperText={passwordError}
                    sx={{margin: 1, width: {sm: 300, md: 300}}}
                    InputProps={{ endAdornment: (<InputAdornment position="end"> <IconButton onClick={handlePasswordShow}>{showPassword? <VisibilityOff />: <Visibility />}</IconButton> </InputAdornment>) }} 
                />
            </Stack>
            
            <p style={{textAlign: 'left', fontSize: '20px'}}>If you choose to continue, your profile, account details, and other related data will be <br></br> permanently deleted. You won't be visible on Arangkada between now and then.  </p>
            <p style={{textAlign: 'left', fontSize: '20px', paddingTop: 50}}>Do you still want to delete your account?</p>
            <Stack direction="row" justifyContent="start" paddingBottom={7}>
                <Button variant="contained" type="submit" style={{backgroundColor: '#D76666', marginTop: 25, paddingInline: 40}}>Delete</Button>
                <Button variant="contained" onClick={handleCancelClick} style={{backgroundColor: '#D2A857', marginTop: 25, paddingInline: 40, marginLeft: 15}}>Cancel</Button>
            </Stack>
            </Stack>
            
        </div>
    )
}