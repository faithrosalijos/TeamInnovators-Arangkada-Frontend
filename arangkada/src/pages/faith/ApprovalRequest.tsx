import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import { Rental } from "../../api/dataTypes";
import RentalService from "../../api/RentalService";
import RentalCardList from "../../components/faith/RentalCardList";


const ApprovalRequest = () => {
  const [pendingRentals, setPendingRentals] = useState<Rental[]>([]);

  useEffect(() => {
    RentalService.getRentalsByOperatorAndStatus("2", "PENDING").then((response) => {
      setPendingRentals(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <>
      <Box mt="12px" sx={{ minHeight: "80vh" }}>
        <PageHeader title="Approval Requests" />
        <br></br>
        {pendingRentals.length !== 0 && <RentalCardList rentals={pendingRentals} />}
        {pendingRentals.length === 0 && <Typography variant="body1" color="text.secondary">No pending request.</Typography>}
      </Box>
      <Footer name="Faith Rosalijos" course="BSIT" section="G1" />
    </>
  );
}

export default ApprovalRequest;