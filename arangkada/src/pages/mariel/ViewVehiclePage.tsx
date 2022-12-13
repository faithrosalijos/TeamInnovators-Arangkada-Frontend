import { Box, Divider } from "@mui/material";
import Footer from "../../components/Footer";
import View from "../../components/mariel/View";
import PageHeader from "../../components/PageHeader";



const MyVehicles = () => {

  return ( 
    <Box sx={{ padding: "12px 0 0" }}>
      <PageHeader title="Vehicle Information"/>
      <View/>
      <Divider/>
      <Footer name="Mariel Genodiala" course="BSIT" section="G3"/>
    </Box>
   );
}
export default MyVehicles;