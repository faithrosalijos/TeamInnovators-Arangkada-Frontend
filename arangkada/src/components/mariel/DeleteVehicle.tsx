import { useState } from "react";
import { Button, FormControl, Grid,  MenuItem, Select, SelectChangeEvent, Stack, TextField,} from "@mui/material";
import React from "react";


const MyVehicleDeleteForm  = () =>{
    const [reason, setReason] = useState("");
    const [password, setPassword] = useState('');
    
    const handleChange = (event: SelectChangeEvent) => {
        setReason(event.target.value as string);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleClear = (event: React.MouseEvent) => {
        setPassword("");
        setReason("");
    }
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
    }

  return ( 
    <>
    <Grid container spacing={2} onSubmit={handleSubmit} component="form" sx={{marginTop: 2, marginBottom: 5}}>
    <Grid item xs={12} md={6} sx={{marginLeft: 20, marginTop: 3}}>
      <FormControl fullWidth>
            <h2 style={{fontFamily:"sans-serif"}}> Reason for deletion: </h2>
                <Select
                    value={reason}
                    displayEmpty
                    onChange={handleChange}
                    sx={{margin: 1}}>
                    <MenuItem value={'Car Damaged'}>Car Damaged</MenuItem>
                    <MenuItem value={'Car Lost'}>Car Lost</MenuItem>
                    <MenuItem value={'Prefer not to say'}>Prefer not to say</MenuItem> 
                {/* {myVehicle.reason} */}
                </Select>  
      </FormControl> 
    </Grid>
    <Grid item xs={12} md={6} sx={{marginLeft: 20, marginTop: 3}}>
        <h2 style={{fontFamily:"sans-serif"}}> Re-enter your password: </h2>
        <TextField 
                onChange={handlePasswordChange} 
                value={password} 
                fullWidth
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                sx={{margin: 1, marginBottom: 3}}>
        </TextField> 
    </Grid>
    <Grid item xs={12} md={6} sx={{marginLeft: 21, marginTop: 2}}>
        <p style={{fontFamily:"sans-serif"}}> 
            If you choose to continue, this vehicle will be deleted and will not be visible in your account.
        </p>
    </Grid>
    <Grid item xs={12} md={12} sx={{marginLeft: 21, marginTop: 4}}>
        <h3 style={{fontFamily:"sans-serif"}}>
            Are you sure you want to delete this vehicle?
        </h3>
    </Grid>
    
        <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ marginTop:2, justifyContent: "end", marginLeft: "180px" }}>
          <Button type="submit" color="error" variant="contained" sx={{ width: "250px" }}>Delete</Button>
          <Button  color="primary"variant="contained" sx={{ width: "250px"}}>Cancel</Button>
        </Stack>
        
    </Grid>
    </>
    );
}
 
export default MyVehicleDeleteForm;