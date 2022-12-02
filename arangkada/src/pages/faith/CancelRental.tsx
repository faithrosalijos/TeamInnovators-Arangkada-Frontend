import { Box, Typography } from "@mui/material";
import CancelRentalForm from "../../components/faith/CancelRentalForm";
import Instructions from "../../components/faith/Instructions";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

const CancelRental = () => {
  return (
    <>
      <Box mt="12px" sx={{ minHeight: "80vh" }}>
        <PageHeader title="Cancel Rental" />
        <br></br>
        <Typography variant="h5">Rental ID: {1}</Typography>
        <br></br>
        <Instructions header="Do you want to cancel this vehicle rental?" subheader="This action cannot be undone." />
        <br></br>
        <br></br>
        <CancelRentalForm />
      </Box>
      <Footer name="Faith Rosalijos" course="BSIT" section="G1" />
    </>
  );
}

export default CancelRental;