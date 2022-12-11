import { Box, Pagination, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import RentalService from "../../api/RentalService";
import RentalCardList from "../../components/faith/RentalCardList";
import Loading from "../../components/faith/Loading";
import ResponseError from "../../components/faith/ResponseError";
import { PendingRentalsContext, PendingRentalsContextType } from "../../helpers/PendingRentalsContext";

const ApprovalRequest = () => {
  const PAGE_SIZE = 5;
  const [pagination, setPagination] = useState({from: 0, to: PAGE_SIZE});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { pendingRentals, handleSetPendingRentals } = useContext(PendingRentalsContext) as PendingRentalsContextType;
  
  useEffect(() => {
    RentalService.getRentalsByOperatorAndStatus("2", "PENDING").then((response) => {
      handleSetPendingRentals(response.data);
      setError("");
    }).catch((error) => {
      setError(error.message);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  const handlePaginationChange = (page: number) => {
    const from = (page - 1) * PAGE_SIZE;
    const to = (page - 1) * PAGE_SIZE + PAGE_SIZE;
    setPagination({ from: from, to: to });
    window.scroll(0, 0);
  }

  if (loading) return (<Loading />)

  if (error !== '') return (<ResponseError message={error} />)

  return (
    <>
      <Box mt="12px" display="flex" flexDirection="column" sx={{ minHeight: "80vh" }}>
        <PageHeader title="Approval Requests" />
        <br></br>
        {
          pendingRentals.length !== 0?
            <>
              <RentalCardList rentals={pendingRentals.slice(pagination.from, pagination.to)} />
              <br/> 
              <Pagination 
                color="primary"
                count={Math.ceil(pendingRentals.length / PAGE_SIZE)} 
                onChange={(event, page) => handlePaginationChange(page)}
              /> 
            </>:
            <Typography variant="body1" color="text.secondary">No pending request.</Typography>
        }
      </Box>
      <Footer name="Faith Rosalijos" course="BSIT" section="G1" />
    </>
  );
}

export default ApprovalRequest;