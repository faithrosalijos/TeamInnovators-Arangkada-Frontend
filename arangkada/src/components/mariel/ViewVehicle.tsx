import { ChangeEvent, useEffect, useState } from "react";
import { Button, FormControl, Grid,  InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import VehicleService from "../../api/VehicleService";
import axios from "axios";

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
    const updateVehicle = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/vehicle/putVehicle/${para.id}`,{
        // VehicleService.putVehicle( {
        route:vehicle.route,
        rentalFee:Number(vehicle.rentalFee),
        orStatus:vehicle.orStatus,
        vehicleCondition:vehicle.vehicleCondition,
    })
    .then((res:any)=> console.log('Editing Data'))
    .catch((err:string) => console.log(err))
    // alert("Changes Successfully change")
    // navigate("/operator/view-vehicle")
    };

  useEffect(() => {
    // console.log(isRented)
    VehicleService.getVehicleByVehicleId(para.id).then((response) => {
      setVehicle(response.data);
    //   console.log(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, []);
     
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
        //console.log(e.target.name)
    };
    const handleSelectChange = (event: SelectChangeEvent) => {
        setVehicle({ ...vehicle, [event.target.name]: event.target.value });
    }

    return ( 
        <>
        <Grid container spacing={2} onSubmit={updateVehicle}component="form" sx={{marginTop: 2, marginBottom: 5}}>
        <Grid item xs={12} md={4}>
           <TextField 
                onChange={handleChange} 
                disabled
                value={plateNumber} 
                name="plateNumber"
                label="Plate Number" 
                size="small"
                fullWidth 
                sx={{margin: 1, }}>
            </TextField> 
        </Grid>
        <Grid item xs={12} md={4}>
           <TextField 
                onChange={handleChange} 
                value={route} 
                name="route"
                label="Route" 
                size="small" 
                fullWidth 
                required
                sx={{margin: 1,  }}> 
            </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
           <TextField 
                onChange={handleChange} 
                value={vehicleType}
                name="vehicleType"
                disabled
                label="Vehicle Type" 
                size="small" 
                fullWidth 
                sx={{margin: 1, }} >
           </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField 
                onChange={handleChange} 
                value={vin}
                label="VIN" 
                name="vin"
                disabled
                size="small" 
                variant="outlined" 
                fullWidth
                sx={{margin: 1, }}>
            </TextField>
            </Grid>
        <Grid item xs={12} md={6}>
            <TextField 

                value={rented===false?"Not Rented" : "Rented"}
                disabled
                onChange={handleChange} 
                label="Rental Status" 
                size="small" 
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
                        id="demo-simple-select"
                        value={orStatus}
                        label="OR, CR Status"
                        required
                        name="orStatus"
                        size="small" 
                        onChange={handleSelectChange}
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
                        value={vehicleCondition}
                        label="Vehicle Condition"
                        required
                        name="vehicleCondition"
                        size="small" 
                        onChange={handleSelectChange}
                        sx={{margin: 1}}>
                            <MenuItem value={'Ready to use'}>Ready To Use</MenuItem>
                            <MenuItem value={'Not Ready To Use'}>Not Ready To Use</MenuItem> 
                    {/* {myVehicle.condition} */}
                    </Select>  
            </FormControl> 
        </Grid>
            <Grid item xs={12} md={6}>
                <TextField 
                    onChange={handleChange} 
                    value={makeModel}label="Make and Model" 
                    size="small" 
                    variant="outlined" 
                    disabled
                    name="makeModel"
                    fullWidth
                    sx={{margin: 1,  height:"8vh"}}>
                </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField 
                    onChange={handleChange} 
                    value={rentalFee}
                    label="Rental Fee" 
                    size="small" 
                    variant="outlined"
                    name="rentalFee"
                    required 
                    fullWidth
                    sx={{margin: 1, marginRight:25, height:"8vh" }}>
                </TextField>
            </Grid>
            <Grid item xs={12} >
            <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
              <Button  onClick={() => navigate(-1)} color="secondary" variant="contained" sx={{ width: "250px" }}>Cancel</Button>
              <Button  type="submit" variant="contained" sx={{ width: "250px"}}>Save Changes</Button> 
              {/* onClick={(e)=>{e.preventDefault(); console.log(data)}} */}
            </Stack>
            </Grid>
        </Grid>
        </>
       );
    }
export default ViewandUpdateVehicle;