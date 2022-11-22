import { useState } from "react";
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
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
    <Grid item xs={60} md={50} sx={{marginLeft: 20, marginTop: 3}}>
      <FormControl sx={{ width:"51.5%", marginBottom: 3}}>
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
    <Grid item xs={60} md={50} sx={{marginLeft: 20, marginTop: 3}}>
        <h2 style={{fontFamily:"sans-serif"}}> Re-enter your password: </h2>
        <TextField 
                onChange={handlePasswordChange} 
                value={password} 
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                sx={{margin: 1, width:"50%", marginBottom: 3}}>
        </TextField> 
    </Grid>
    <Grid item xs={60} md={50} sx={{marginLeft: 21, marginTop: 4}}>
        <p style={{fontFamily:"sans-serif"}}> 
            If you choose to continue, this vehicle will be deleted and will not be visible in your account.
        </p>
    </Grid>
    <Grid item xs={60} md={50} sx={{marginLeft: 21, marginTop: 6}}>
        <h3 style={{fontFamily:"sans-serif"}}>
            Are you sure you want to delete this vehicle?
        </h3>
    </Grid>
    <Grid item xs={60} md={50} sx={{marginLeft: 21, marginTop: 2, marginBottom:5}}>
        <Button 
            type="submit" 
            variant="contained"  
            sx={{ backgroundColor: "#D62828",width: '13%',marginRight: 2, marginBottom: 5}} >
            Delete
        </Button>
        <Button 
            type="submit" 
            variant="contained"  
            sx={{width: '13%',backgroundColor: "gray",marginBottom: 5}} >
            Cancel
        </Button>
    </Grid>
    </>
    );
}
 
export default MyVehicleDeleteForm;