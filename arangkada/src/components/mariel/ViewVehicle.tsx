import { useState } from "react";
import { Button, FormControl, Grid,  InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, } from "@mui/material";
import React from "react";


type MyVehicleType ={
    id: number,
    plateNumber: string,
    route: string,
    vehicleType: string,
    makeModel: string,
    vin: string,
    orStatus: string,
    condition:string,
    operatorID : string,
    rentalFee: number,
    driverName?: string,
    vehicleStatus?:string,

}

const ViewandUpdateVehicle  = (props:MyVehicleType) =>{
    const [route, setRoute] = useState("");
    const [renatlFee, setRentalFee] = useState("");
    const [driverName, setDriverName] = useState("");
    const [orStatus, setOrStatus] = React.useState('');
    const [condition, setCondition] = React.useState('');
    const [vehicleStatus, setVehicleStatus] = React.useState('');

    const handleOrStatusChange = (event: SelectChangeEvent) => {
        setOrStatus(event.target.value as string);
    }
    const handleConditionChange = (event: SelectChangeEvent) => {
        setCondition(event.target.value as string);
    }
    const handleVehicleStatusChange = (event: SelectChangeEvent) => {
        setVehicleStatus(event.target.value as string);
    }
    const handleRouteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoute(event.target.value);
    }
    
    const handleRentalFeeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRentalFee(event.target.value);
    }
    const handleDriverNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoute(event.target.value);
    }
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
    }
    const handleClear = (event: React.MouseEvent) => {
        setRoute("");
        setRentalFee("");
        setDriverName("");
    }
   

  return ( 
    <>
    <Grid container spacing={2} onSubmit={handleSubmit} component="form" sx={{marginTop: 2,  marginBottom: 5}}>
    <Grid item xs={12} md={4}>
       <TextField 
            disabled
            value={props.plateNumber} 
            label="Plate Number" 
            size="small"
            variant="outlined" 
            fullWidth
            sx={{margin: 1}}>
        </TextField> 
    </Grid>
    <Grid item xs={12} md={4}>
       <TextField 
            onChange={handleRouteChange} 
            value={props.route} 
            label="Route" 
            size="small" 
            variant="outlined" 
            fullWidth
            sx={{margin: 1, }}> 
        </TextField>
    </Grid>
    <Grid item xs={12} md={4}>
       <TextField 
            disabled
            value={props.vehicleType}
            label="Vehicle Type" 
            size="small" 
            variant="outlined" 
            fullWidth
            sx={{margin: 1,}} >
       </TextField>
    </Grid>
    <Grid item xs={12} md={6}>
        <TextField 
            disabled
            value={props.vin}
            label="VIN" 
            size="small" 
            variant="outlined" 
            fullWidth
            sx={{margin: 1,}}>
        </TextField>
    </Grid>
    <Grid item xs={12} md={6}>
        <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label" sx={{margin: 1}}>Vehicle Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.vehicleStatus}
                    label="Vehicle Status"
                    size="small"
                    onChange={handleConditionChange}
                    sx={{margin: 1}}>
                        <MenuItem value={'Still on the Road'}>Rented</MenuItem>
                        <MenuItem value={'Available'}>Available</MenuItem> 
                {/* {myVehicle.condition} */}
                </Select>  
        </FormControl> 
    </Grid>
    <Grid item xs={12} md={6}>
      <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{margin: 1}}>OR, CR Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.orStatus}
                    label="OR, CR Status"
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
            <InputLabel id="demo-simple-select-label" sx={{margin: 1}}>Vehicle Condition</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.condition}
                    label="Vehicle Condition"
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
                disabled
                value={props.makeModel}
                label="Make and Model" 
                size="small" 
                variant="outlined" 
                fullWidth
                sx={{margin: 1, }}>
            </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField 
                onChange={handleRentalFeeChange} 
                value={props.rentalFee}
                contentEditable
                label="Rental Fee" 
                size="small" 
                variant="outlined"
                fullWidth
                sx={{margin: 1,}}>
            </TextField>
        </Grid>

     <Grid item xs={12} >
        <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
          <Button color="secondary" variant="contained" sx={{ width: "250px" }}>Cancel</Button>
          <Button type="submit" variant="contained" sx={{ width: "250px"}}>Save Changes</Button>
        </Stack>
        </Grid>
    </Grid>
    </>
   );
}
export default ViewandUpdateVehicle;