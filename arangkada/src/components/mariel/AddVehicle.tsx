import { ChangeEvent, useState } from "react";
import { Button, FormControl, Grid,  InputLabel, MenuItem,  Select, SelectChangeEvent, Stack, TextField, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VehicleService from "../../api/VehicleService";
import { Vehicle } from "../../api/dataTypes";


const MyVehicleForm  = () =>{
    const navigate = useNavigate();

    const [data, setData]= useState({
        plateNumber: "",
        route: "",
        vehicleType: "",
        makeModel: "",
        vin: "",
        orStatus: "",
        vehicleCondition: "",
        rentalFee: "",
        operatorId: 3,
        rented: false,
    })

    const onSubmit = async (event: { preventDefault: () => void; }) =>{
        event.preventDefault();
        
         VehicleService.postVehicle( {
                vehicleId:-1,
                plateNumber:data.plateNumber,
                route:data.route,
                vehicleType:data.vehicleType,
                vin:Number(data.vin),
                makeModel:data.makeModel,
                rentalFee:Number(data.rentalFee),
                operator:{operatorId: 3,businessName:"",permitNumber:"", account:{accountId:-1,
                    firstname: "",
                    middlename: "",
                    lastname: "",
                    birthdate: "",
                    age: 0,
                    contactNumber: "",
                    address: "",
                    gender: "",
                    username: "",
                    password: "",
                    accountType: "",} },
                orStatus:data.orStatus,
                vehicleCondition:data.vehicleCondition,
                rented: data.rented,
            })
        .then((res:any)=> console.log('Posting Data'))
        .catch((err:string) => console.log(err))
        alert("Vehicle Successfully added.")
        navigate('/operator/vehicles')
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSelectChange = (event: SelectChangeEvent) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    return ( 
        <>
        <Grid container spacing={2} onSubmit={onSubmit} component="form" sx={{marginTop: 2, marginBottom: 5}}>
        <Grid item xs={12} md={4}>
           <TextField 
                onChange={handleChange} 
                value={data.plateNumber} 
                name="plateNumber"
                label="Plate Number" 
                size="small"
                fullWidth 
                required
                sx={{margin: 1, }}>
            </TextField> 
        </Grid>
        <Grid item xs={12} md={4}>
           <TextField 
                onChange={handleChange} 
                value={data.route} 
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
                value={data.vehicleType}
                name="vehicleType"
                label="Vehicle Type" 
                size="small" 
                required
                fullWidth 
                sx={{margin: 1, }} >
           </TextField>
        </Grid>
        <Grid item xs={12} md={12}>
            <TextField 
                onChange={handleChange} 
                value={data.vin}
                label="VIN" 
                name="vin"
                size="small" 
                variant="outlined" 
                fullWidth
                required
                sx={{margin: 1, }}>
            </TextField>
            </Grid>
        {/* <Grid item xs={12} md={6}>
            <TextField 
                value={operatorId}
                // disabled
                required
                onChange={handleChange} 
                label="Operator ID" 
                size="small" 
                name="operatorId"
                fullWidth
                variant="outlined" 
                // defaultValue={data.operator}
                sx={{margin: 1,}}>
            </TextField>
        </Grid> */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" >OR, CR Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.orStatus}
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
                        value={data.vehicleCondition}
                        label="Vehicle Condition"
                        required
                        name="vehicleCondition"
                        size="small" 
                        onChange={handleSelectChange}
                        sx={{margin: 1}}>
                            <MenuItem value={'Ready To Use'}>Ready To Use</MenuItem>
                            <MenuItem value={'Not Ready To Use'}>Not Ready To</MenuItem> 
                    {/* {myVehicle.condition} */}
                    </Select>  
            </FormControl> 
        </Grid>
            <Grid item xs={12} md={6}>
                <TextField 
                    onChange={handleChange} 
                    value={data.makeModel}label="Make and Model" 
                    size="small" 
                    variant="outlined" 
                    name="makeModel"
                    required
                    fullWidth
                    sx={{margin: 1,  height:"8vh"}}>
                </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField 
                    onChange={handleChange} 
                    value={data.rentalFee}
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
              <Button   type="submit" variant="contained" sx={{ width: "250px"}}>Add Vehicle</Button> 
              {/* onClick={(e)=>{e.preventDefault(); console.log(data)}} */}
            </Stack>
            </Grid>
        </Grid>
        </>
       );
    }
    export default MyVehicleForm;