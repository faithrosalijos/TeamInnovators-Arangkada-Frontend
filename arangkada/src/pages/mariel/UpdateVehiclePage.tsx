import { Box, Divider } from "@mui/material";
import { useState } from "react";
import Footer from "../../components/Footer";
import ViewVehicle from "../../components/mariel/ViewVehicle";
import PageHeader from "../../components/PageHeader";



const MyVehicles = () => {

  return ( 
    <Box sx={{ padding: "12px 0 0" }}>
      <PageHeader title="Update Vehicle Information"/>
      <ViewVehicle operatorID={"Operator1"} {...{ id: 1, plateNumber: "ABC123", route: "01K", vehicleType: "Jeepney", makeModel: "1995-Jeep", vin: "GXXXX XXX XXXXX", rentalFee: 150.00, orStatus: "Updated", condition: "Ready To Use" }}/>
      {/* <UpdateVehicle { id: 1, plateNumber: "ABC123", route: "01K", vehicleType: "Jeepney", makeModel: "1995-Jeep", vin: "GXXXX XXX XXXXX", rentalFee: 150.00, orStatus: "Updated", condition: "Ready To Use" }/> */}
      <Divider/>
      <Footer name="Mariel Genodiala" course="BSIT" section="G3"/>
    </Box>
   );
}
export default MyVehicles;