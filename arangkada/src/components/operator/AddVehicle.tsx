import { useState } from "react";
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



const MyVehicleForm  = () =>{
    const [plateNumber, setPlateNumber] = useState("");
    const [route, setRoute] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [vin, setVin] = useState("");
    const [makeModel, setMakeAndModel] = useState("");
    const [renatlFee, setRentalFee] = useState("");
    const [operator, setOperator] = useState("");
    const [orStatus, setOrStatus] = useState('');
    const [condition, setCondition] = useState('');

    const handleOrStatusChange = (event: SelectChangeEvent) => {
        setOrStatus(event.target.value as string);
    }
    const handleConditionChange = (event: SelectChangeEvent) => {
        setCondition(event.target.value as string);
    }
    const handlePlateNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlateNumber(event.target.value);
    }
    const handleRouteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoute(event.target.value);
    }
    const handleRentalFeeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRentalFee(event.target.value);
    }
    const handleVehicleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVehicleType(event.target.value);
    }
    const handleVinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVin(event.target.value);
    }
    const handleMakeAndModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMakeAndModel(event.target.value);
    }
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
    }
    const handleClear = (event: React.MouseEvent) => {
        setPlateNumber("");
        setRoute("");
        setVehicleType("");
        setVin("");
        setMakeAndModel("");
        setRentalFee("");
    }
   

  return ( 
    <>
    <Grid container spacing={2} onSubmit={handleSubmit} rowSpacing={1} component="form" sx={{ marginTop: "0", padding: "12px 0" }}>
    <Grid item xs={60} md={50}>
       <TextField 
            onChange={handlePlateNumberChange} 
            value={plateNumber} 
            label="Plate Number" 
            size="small"
            variant="outlined" 
            required
            sx={{margin: 1, width:"25%", marginBottom: 3}}>
        </TextField> 
       <TextField 
            onChange={handleRouteChange} 
            value={route} 
            label="Route" 
            size="small" 
            variant="outlined" 
            required
            sx={{margin: 1, marginLeft:5, width:"25%"}}> 
        </TextField>
       <TextField 
            onChange={handleVehicleTypeChange} 
            value={vehicleType}
            label="Vehicle Type" 
            size="small" 
            variant="outlined" 
            required
            sx={{margin: 1,marginLeft:5, width:"25%"}} >
       </TextField>
    </Grid>
    <Grid item xs={60} md={50}>
        <TextField 
            onChange={handleVinChange} 
            value={vin}
            label="VIN" 
            size="small" 
            variant="outlined" 
            required
            sx={{margin: 1, width:"35%"}}>
        </TextField>
        <TextField 
            value={operator}
            disabled
            label="Operator ID" 
            size="small" 
            variant="outlined" 
            defaultValue={operator}
            sx={{margin: 1,marginLeft:5, width:"35%", marginRight:25, marginBottom: 3}}>
        </TextField>
    </Grid>
    <Grid item xs={60} md={50}>
      <FormControl sx={{ width:"36.3%", marginBottom: 3}}>
            <InputLabel id="demo-simple-select-label" sx={{margin: 1}}>OR, CR Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={orStatus}
                    label="OR, CR Status"
                    required
                    onChange={handleOrStatusChange}
                    sx={{margin: 1}}>
                        <MenuItem value={'Updated'}>Updated</MenuItem>
                        <MenuItem value={'Renewed'}>Renewed</MenuItem>
                        <MenuItem value={'Expired'}>Expired</MenuItem> 
                {/* {myVehicle.orStatus} */}
                </Select>  
        </FormControl> 
        <FormControl sx={{ marginLeft: 4,width:"36.3%"}} >
            <InputLabel id="demo-simple-select-label" sx={{margin: 1}}>Vehicle Condition</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={condition}
                    label="Vehicle Condition"
                    required
                    onChange={handleConditionChange}
                    sx={{margin: 1}}>
                        <MenuItem value={'Ready To Use'}>Ready To Use</MenuItem>
                        <MenuItem value={'Not Ready To Use'}>Not Ready To</MenuItem> 
                {/* {myVehicle.condition} */}
                </Select>  
        </FormControl> 
        </Grid>
        <Grid item xs={60} md={50}>
            <TextField 
                onChange={handleMakeAndModelChange} 
                value={makeModel}label="Make and Model" 
                size="small" 
                variant="outlined" 
                required
                sx={{margin: 1, width:"35%", height:"8vh"}}>
            </TextField>
            <TextField 
                onChange={handleRentalFeeChange} 
                value={renatlFee}
                label="Rental Fee" 
                size="small" 
                variant="outlined"
                required 
                sx={{margin: 1,marginLeft:5, width:"35%", marginRight:25, height:"8vh" }}>
            </TextField>
        </Grid>
        <Grid item xs={60} md={50}>
            <Button 
                type="submit" 
                variant="contained"  
                sx={{marginLeft:100, marginTop: 4,width: '13%',marginRight: 2, marginBottom: 5}}>
                Add Vehicle</Button>
            <Button 
                type="submit" 
                variant="contained"  
                sx={{marginTop:4,width: '13%',backgroundColor: "gray",marginBottom: 5}}>
                Cancel</Button>
        </Grid>
    </Grid>
    </>
   );
}
export default MyVehicleForm;