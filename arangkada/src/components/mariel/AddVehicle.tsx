import { useState } from "react";
import { Button, FormControl, Grid,  InputLabel, MenuItem,  Select, SelectChangeEvent, Stack, TextField, } from "@mui/material";
import React from "react";




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
    <Grid container spacing={2} onSubmit={handleSubmit} component="form" sx={{marginTop: 2, marginBottom: 5}}>
    <Grid item xs={12} md={4}>
       <TextField 
            onChange={handlePlateNumberChange} 
            value={plateNumber} 
            label="Plate Number" 
            size="small"
            fullWidth 
            required
            sx={{margin: 1, }}>
        </TextField> 
    </Grid>
    <Grid item xs={12} md={4}>
       <TextField 
            onChange={handleRouteChange} 
            value={route} 
            label="Route" 
            size="small" 
            fullWidth 
            required
            sx={{margin: 1,  }}> 
        </TextField>
    </Grid>
    <Grid item xs={12} md={4}>
       <TextField 
            onChange={handleVehicleTypeChange} 
            value={vehicleType}
            label="Vehicle Type" 
            size="small" 
            required
            fullWidth 
            sx={{margin: 1, }} >
       </TextField>
    </Grid>
    <Grid item xs={12} md={6}>
        <TextField 
            onChange={handleVinChange} 
            value={vin}
            label="VIN" 
            size="small" 
            variant="outlined" 
            fullWidth
            required
            sx={{margin: 1, }}>
        </TextField>
        </Grid>
    <Grid item xs={12} md={6}>
        <TextField 
            value={operator}
            disabled
            label="Operator ID" 
            size="small" 
            fullWidth
            variant="outlined" 
            defaultValue={operator}
            sx={{margin: 1,}}>
        </TextField>
    </Grid>
    <Grid item xs={12} md={6}>
      <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" >OR, CR Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={orStatus}
                    label="OR, CR Status"
                    required
                    size="small" 
                    onChange={handleOrStatusChange}
                    sx={{margin: 1}}>
                        <MenuItem value={'Updated'}>Updated</MenuItem>
                        <MenuItem value={'Renewed'}>Renewed</MenuItem>
                        <MenuItem value={'Expired'}>Expired</MenuItem> 
                {/* {myVehicle.orStatus} */}
                </Select>  
        </FormControl> 
    </Grid>
    <Grid item xs={12} md={6}>
        <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label" >Vehicle Condition</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={condition}
                    label="Vehicle Condition"
                    required
                    size="small" 
                    onChange={handleConditionChange}
                    sx={{margin: 1}}>
                        <MenuItem value={'Ready To Use'}>Ready To Use</MenuItem>
                        <MenuItem value={'Not Ready To Use'}>Not Ready To</MenuItem> 
                {/* {myVehicle.condition} */}
                </Select>  
        </FormControl> 
    </Grid>
        <Grid item xs={12} md={6}>
            <TextField 
                onChange={handleMakeAndModelChange} 
                value={makeModel}label="Make and Model" 
                size="small" 
                variant="outlined" 
                required
                fullWidth
                sx={{margin: 1,  height:"8vh"}}>
            </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField 
                onChange={handleRentalFeeChange} 
                value={renatlFee}
                label="Rental Fee" 
                size="small" 
                variant="outlined"
                required 
                fullWidth
                sx={{margin: 1, marginRight:25, height:"8vh" }}>
            </TextField>
        </Grid>
        {/* <Grid item xs={12} md={2}  >
            <Button 
                type="submit" 
                variant="contained" 
                fullWidth 
                sx={{ marginTop: 4 ,}}>
                Add Vehicle</Button>
        </Grid>
        <Grid item xs={12} md={2} >
            <Button 
                type="submit" 
                variant="contained"  
                fullWidth
                sx={{marginTop:4,backgroundColor: "gray",marginBottom: 5}}>
                Cancel</Button>
        </Grid> */}
        <Grid item xs={12} >
        <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
          <Button color="secondary" variant="contained" sx={{ width: "250px" }}>Cancel</Button>
          <Button type="submit" variant="contained" sx={{ width: "250px"}}>Add Vehicle</Button>
        </Stack>
        </Grid>
    </Grid>
        
    
    </>
   );
}
export default MyVehicleForm;