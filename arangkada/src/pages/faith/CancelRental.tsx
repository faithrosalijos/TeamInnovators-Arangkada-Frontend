import { Box, Typography } from "@mui/material";
import CancelRentalForm from "../../components/faith/CancelRentalForm";
import Instructions from "../../components/faith/Instructions";
import PageHeader from "../../components/PageHeader";

const CancelRental = () => {
  return (
    <Box>
      <PageHeader title="My Rental" />
      <br></br>
      <Typography variant="h5">Rental ID: {1}</Typography>
      <br></br>
      <Instructions header="Do you want to cancel this vehicle rental?" subheader="This action cannot be undone." />
      <br></br>
      <br></br>
      <CancelRentalForm />
      <br></br>
      {/* <Footer name="Faith Rosalijos" course="BSIT" section="G1"/> */}
    </Box>
  );
}

export default CancelRental;