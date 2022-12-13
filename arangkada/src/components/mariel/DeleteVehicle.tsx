import { ChangeEvent, useEffect, useState } from "react";
import { Button, FormControl, Grid,  MenuItem, Select, SelectChangeEvent, Stack, TextField,} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import VehicleService from "../../api/VehicleService";

const MyVehicleDeleteForm  = () =>{
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
    const [data, setData]= useState({
       password:"",
    })
    const {password} = data;
    
    const deleteVehicle = async(e: { preventDefault: () => void; })  => {
        e.preventDefault();
        await axios.delete(`http://localhost:8080/vehicle/deleteVehicle/${para.id}`,{
    })
    .then((res:any)=> console.log('Deleting Data'))
    .catch((err:string) => console.log(err))
    alert("Vehicle Successfully deleted.")
    navigate('/operator/vehicles')
    };
    
    useEffect(() => {
        VehicleService.getVehicleByVehicleId(para.id).then((response) => {
        setVehicle(response.data);
        }).catch((error) => {
        console.log(error);
        })
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

  return ( 
    <>
    <Grid container spacing={2} onSubmit={deleteVehicle} component="form" sx={{marginTop: 2, marginBottom: 5}}>
    {/* <Grid item xs={12} md={6} sx={{marginLeft: 20, marginTop: 3}}>
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
                </Select>  
      </FormControl> 
    </Grid> */}
    <Grid item xs={12} md={6} sx={{marginLeft: 20, marginTop: 3}}>
        <h2 style={{fontFamily:"sans-serif"}}> Re-enter your password: </h2>
        <TextField 
                onChange={handleChange} 
                value={password} 
                fullWidth
                name="password"
                id="filled-password-input"
                label="Password"
                type="password"
                required
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
          <Button  onClick={() => navigate(-1)} color="primary"variant="contained" sx={{ width: "250px"}}>Cancel</Button>
        </Stack>
        
    </Grid>
    </>
    );
}
 
export default MyVehicleDeleteForm;