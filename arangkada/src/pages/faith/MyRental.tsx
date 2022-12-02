import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Rental } from "../../api/dataTypes";
import RentalService from "../../api/RentalService";
import Status from "../../components/faith/Status";
import UpdateRentalForm from "../../components/faith/UpdateRentalForm";
import VehicleDetails from "../../components/faith/VehicleDetails";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";


const MyRental = () => {
  const [currentRental, setCurrentRental] = useState<Rental>();

  useEffect(() => {
    RentalService.getCurrentRental("2").then((response) => {
      setCurrentRental(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <Box mt="12px" sx={{ minHeight: "80vh" }}>
        <PageHeader title="My Rental" />
        <br></br>
        {
          currentRental ?
            <>
              <Typography variant="h5">Rental ID: {currentRental.rentalId}</Typography>
              <br></br>
              {currentRental.status === "PENDING" && <Status status="Pending" message="Waiting for operator's response." />}
              {currentRental.status === "APPROVED" && <Status status="Approved" message="Operator has approved your application." />}
              <br></br>
              <br></br>
              <VehicleDetails vehicle={currentRental.vehicle} />
              <br></br>
              <br></br>
              <UpdateRentalForm rental={currentRental} />
            </> :
            <Typography variant="body1" color="text.secondary">No ongoing or pending rental.</Typography>
        }
      </Box>
      <Footer name="Faith Rosalijos" course="BSIT" section="G1" />
    </>
  );
}

export default MyRental;