import { Box, Grid, Button } from "@mui/material";
import { useState } from "react";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import MyVehicleCardList from "../../components/MyVehicleComp/MyVehicleCardList";
import MyVehicleSearch from "../../components/MyVehicleComp/MyVehicleSearch";
import MyVehicleInfoCard from "../../components/MyVehicleComp/AddVehicle";

export type MyVehicle = {
  id: number,
  plateNumber: string,
  route: string,
  vehicleType: string,
  makeModel: string,
  vin: string,
  orStatus: string,
  condition:string,
  operatorID ?: string
}

const MyVehicles = () => {
  /* Sample data */
  const [myVehicles, setVehicles] = useState<MyVehicle[]>([
    {id: 1, plateNumber: "ABC123", route: "01K", vehicleType: "Jeepney", makeModel: "1995-Jeep", vin: "GXXXX XXX XXXXX", orStatus:"Updated", condition:"Ready To Use"},
    {id: 2, plateNumber: "DEF456", route: "09C", vehicleType: "Jeepney", makeModel: "1994-Jeep", vin: "RXXXX XXX XXXXX", orStatus:"Renewed", condition:"Ready To Use"},
    {id: 3, plateNumber: "GHI789", route: "13C", vehicleType: "Jeepney", makeModel: "1993-Jeep", vin: "AXXXX XXX XXXXX", orStatus:"Updated", condition:"Ready To Use"},
    {id: 4, plateNumber: "JKL987", route: "06B", vehicleType: "Jeepney", makeModel: "1992-Jeep", vin: "BXXXX XXX XXXXX", orStatus:"Expired", condition:"Not Ready To Use"},
    {id: 5, plateNumber: "MNO654", route: "14D", vehicleType: "Jeepney", makeModel: "1991-Jeep", vin: "SXXXX XXX XXXXX", orStatus:"Expired", condition:"Not Ready To Use"},
  ]);
  return ( 
    <Box sx={{ padding: "12px 0 0" }}>
      <PageHeader title="My Vehicle" />
      <MyVehicleSearch />
      <MyVehicleCardList myVehicle={myVehicles} />
      <Grid item xs={60} md={50}>
      <Button 
          id="AddBtn"
          type="submit" 
          variant="contained"  
          sx={{marginLeft:135, height: "65px",width: "65px",borderRadius: "100px", marginTop: 4,marginRight: 2, marginBottom: 5}}>
          <h1>+</h1></Button>
      </Grid>
      <Footer name="Mariel Genodiala" course="BSIT" section="G3"/>
    </Box>
   );
}
 
export default MyVehicles;