import { Box, Divider } from "@mui/material";
import Footer from "../../components/Footer";
import ViewVehicle from "../../components/mariel/ViewVehicle";
import PageHeader from "../../components/PageHeader";



const MyVehicles = () => {

  return ( 
    <Box sx={{ padding: "12px 0 0" }}>
      <PageHeader title="Update Vehicle Information"/>
      <ViewVehicle/>
      <Divider/>
      <Footer name="Mariel Genodiala" course="BSIT" section="G3"/>
    </Box>
   );
}
export default MyVehicles;