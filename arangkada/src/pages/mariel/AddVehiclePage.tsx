import { Box, Divider } from "@mui/material";
import Instructions from "../../components/faith/Instructions";
import Footer from "../../components/Footer";
import AddVehicle from "../../components/mariel/AddVehicle";
import PageHeader from "../../components/PageHeader";




const AddVehiclePage = () => {
 
  return ( 
    <>
      <Box mt="12px" sx={{ minHeight: "80vh" }}>
        <PageHeader title="Add Vehicle"/>
        <br></br>
        <Instructions
          header="Please provide vehicle details."
          subheader="Mariel please make og subheader. buhat2 lng gud. hahaha. para dli plain."
        />
        <br></br>
        <br></br>
        <AddVehicle/>
      </Box>
      <Footer name="Mariel Genodiala" course="BSIT" section="G3"/>
    </>
   );
}
export default AddVehiclePage;