import {  useEffect, useState } from "react";
import { Button, FormControl, Grid,  InputLabel, MenuItem, Select, Stack, TextField, } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import VehicleService from "../../api/VehicleService";


const ViewandUpdateVehicle  = () =>{
    
    const navigate = useNavigate();
    const para = useParams() as { id: string };

    const [vehicle, setVehicle]= useState({
        plateNumber: "",
        route: "",
        vehicleType: "",
        makeModel: "",
        vin: "",
        orStatus: "",
        vehicleCondition: "",
        rentalFee: "",
        rented: false,
    })
    const { plateNumber, route, vehicleType, makeModel,vin,orStatus,vehicleCondition,rentalFee, rented} = vehicle;
  useEffect(() => {
    VehicleService.getVehicleByVehicleId(para.id).then((response) => {
      setVehicle(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

    return ( 
        <>
        <Grid container spacing={2} component="form" sx={{marginTop: 2, marginBottom: 5}}>
        <Grid item xs={12} md={4}>
           <TextField 
                id="filled-read-only-input"
                value={plateNumber} 
                name="plateNumber"
                label="Plate Number" 
                size="medium"
                fullWidth 
                sx={{margin: 1, }}>
            </TextField> 
        </Grid>
        <Grid item xs={12} md={4}>
           <TextField
                id="filled-read-only-input"
                value={route} 
                name="route"
                label="Route" 
                size="medium"
                fullWidth 
                sx={{margin: 1,  }}> 
            </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
           <TextField 
                id="filled-read-only-input"
                value={vehicleType}
                name="vehicleType"
                label="Vehicle Type" 
                size="medium"
                fullWidth 
                sx={{margin: 1, }} >
           </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField 
                id="filled-read-only-input"
                value={vin}
                label="VIN" 
                name="vin"
                size="medium"
                variant="outlined" 
                fullWidth
                sx={{margin: 1, }}>
            </TextField>
            </Grid>
        <Grid item xs={12} md={6}>
            <TextField 
                id="filled-read-only-input"
                value={rented===false?"Not Rented" : "Rented"}
                size="medium"
                label="Rental Status" 
                name="rented"
                fullWidth
                variant="outlined" 
                sx={{margin: 1,}}>
            </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" >OR, CR Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select-required-label"
                        value={orStatus}
                        label="OR, CR Status"
                        required
                        name="orStatus"
                        size="medium"
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
                        id="demo-simple-select-required-label"
                        value={vehicleCondition}
                        label="Vehicle Condition"
                        required
                        name="vehicleCondition"
                        size="medium"
                        sx={{margin: 1}}>
                            <MenuItem value={'Ready to use'}>Ready To Use</MenuItem>
                            <MenuItem value={'Not Ready To Use'}>Not Ready To Use</MenuItem> 
                    {/* {myVehicle.condition} */}
                    </Select>  
            </FormControl> 
        </Grid>
            <Grid item xs={12} md={6}>
                <TextField 
                    id="filled-read-only-input" 
                    value={makeModel}label="Make and Model" 
                    size="medium"
                    variant="outlined" 
                    name="makeModel"
                    fullWidth
                    sx={{margin: 1,  height:"8vh"}}>
                </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField 
                    id="filled-read-only-input"
                    value={rentalFee}
                    label="Rental Fee" 
                    size="medium"
                    variant="outlined"
                    name="rentalFee"
                    required 
                    fullWidth
                    sx={{margin: 1, marginRight:25, height:"8vh" }}>
                </TextField>
            </Grid>
            <Grid item xs={12} >
            <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
              <Button  onClick={() => navigate("/operator/vehicles")} color="secondary" variant="contained" sx={{ width: "250px" }}>Go Back</Button>
            </Stack>
            </Grid>
        </Grid>
        </>
       );
    }
export default ViewandUpdateVehicle;