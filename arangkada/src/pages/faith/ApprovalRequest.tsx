import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import RentalService from "../../api/RentalService";
import RentalCardList from "../../components/faith/RentalCardList";
import Loading from "../../components/faith/Loading";
import ResponseError from "../../components/faith/ResponseError";
import { PendingRentalsContext, PendingRentalsContextType } from "../../helpers/PendingRentalsContext";

const ApprovalRequest = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { pendingRentals, setPendingRentals } = useContext(PendingRentalsContext) as PendingRentalsContextType;

  useEffect(() => {
    RentalService.getRentalsByOperatorAndStatus("2", "PENDING").then((response) => {
      setPendingRentals(response.data);
      setError('');
    }).catch((error) => {
      setError(error.message);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  if (loading) return (<Loading />)

  if (error !== '') return (<ResponseError message={error} />)

  return (
    <>
      <Box mt="12px" display="flex" flexDirection="column" sx={{ minHeight: "80vh" }}>
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