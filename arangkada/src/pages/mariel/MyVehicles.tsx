import { Box, } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import MyVehicleCardList from "../../components/mariel/MyVehicleCardList";
import MyVehicleSearch from "../../components/mariel/MyVehicleSearch";
import { Vehicle } from "../../api/dataTypes";
import VehicleService from "../../api/VehicleService";



const MyVehicles = () => {
  
  const [myVehicles, setVehicles] = useState<Vehicle[]>([]);
  
  useEffect(() => {
    VehicleService.getVehicleByOperatorOperatorId("3").then((response) => {
      setVehicles(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return ( 
    <Box sx={{ padding: "12px 0 0" }}>
      <PageHeader title="My Vehicle" />
      <MyVehicleSearch />
      <MyVehicleCardList myVehicle={myVehicles} />
      {/* <Grid item xs={60} md={50}>
      <Button 
          id="AddBtn"
          type="submit" 
          variant="contained"  
          sx={{marginLeft:135, height: "65px",width: "65px",borderRadius: "100px", marginTop: 4,marginRight: 2, marginBottom: 5}}>
          <h1>+</h1></Button>
      </Grid> */}
      <Footer name="Mariel Genodiala" course="BSIT" section="G3"/>
    </Box>
   );
}
 
export default MyVehicles;