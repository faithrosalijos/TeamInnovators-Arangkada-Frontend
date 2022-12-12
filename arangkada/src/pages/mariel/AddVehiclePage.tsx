import { Box, Divider } from "@mui/material";
import { useState } from "react";
import Footer from "../../components/Footer";
import AddVehicle from "../../components/mariel/AddVehicle";
import PageHeader from "../../components/PageHeader";




const AddVehiclePage = () => {
 
  return ( 
    <Box sx={{ padding: "12px 0 0" }}>
      <PageHeader title="Add Vehicle"/>
      <AddVehicle/>
      <Divider/>
      <Footer name="Mariel Genodiala" course="BSIT" section="G3"/>
    </Box>
   );
}
export default AddVehiclePage;