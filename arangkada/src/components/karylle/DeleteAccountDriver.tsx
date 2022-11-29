import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";


export default function DeleteAcc() {

    const [password, setPassword] = useState("");

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };


    return (
        <div>
            <h1 style={{textAlign: 'left', color: '#90794C'}}>Delete your account</h1>
            <hr className="line"></hr>
            <p style={{textAlign: 'left', fontSize: '20px', paddingTop: 40}}>We're sorry to hear you'd like to delete your account. </p>
            <h5 style={{textAlign: 'left', color: '#90794C', fontSize: 20}}>Re-enter your password:</h5>

            <Stack direction="row" justifyContent="start">
                <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={handlePasswordChange} sx={{margin: 1, width: {sm: 300, md: 300}}}/>
            </Stack>
            
            <p style={{textAlign: 'left', fontSize: '20px'}}>If you choose to continue, your profile, account details, and other related data will be <br></br> permanently deleted. You won't be visible on Arangkada between now and then.  </p>
            <p style={{textAlign: 'left', fontSize: '20px', paddingTop: 50}}>Do you still want to delete your account?</p>
            <Stack direction="row" justifyContent="start" paddingBottom={7}>
                <Button variant="contained" style={{backgroundColor: '#D76666', marginTop: 25, paddingInline: 40}}>Delete</Button>
                <Button variant="contained" style={{backgroundColor: '#D2A857', marginTop: 25, paddingInline: 40, marginLeft: 15}}>Cancel</Button>
            </Stack>
            
        </div>
    )
}