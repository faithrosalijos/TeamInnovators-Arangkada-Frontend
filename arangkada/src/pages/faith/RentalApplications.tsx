import { Box, Pagination, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import RentalService from "../../api/RentalService";
import DriverApplicantCardList from "../../components/faith/DriverApplicantCardList";
import Loading from "../../components/faith/Loading";
import ResponseError from "../../components/faith/ResponseError";
import { PendingRentalsContext, PendingRentalsContextType } from "../../helpers/PendingRentalsContext";
import DriverRentalFilterForm from "../../components/faith/DriverRentalFilterForm";
import { Rental } from "../../api/dataTypes";

const RentalApplications = () => {
  const PAGE_SIZE = 5;
  const [pagination, setPagination] = useState({ from: 0, to: PAGE_SIZE });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { pendingRentals, handleSetPendingRentals } = useContext(PendingRentalsContext) as PendingRentalsContextType;
  const [filteredPendingRentals, setFilteredPendingRentals] = useState<Rental[]>([]);

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

  useEffect(() => {
    setFilteredPendingRentals(pendingRentals);
  }, [pendingRentals])

  const handlePaginationChange = (page: number) => {
    const from = (page - 1) * PAGE_SIZE;
    const to = (page - 1) * PAGE_SIZE + PAGE_SIZE;
    setPagination({ from: from, to: to });
    window.scroll(0, 0);
  }

  const handleFilterSubmit = (filters: { driverName: string }) => {
    const { driverName } = filters;
    const temp = pendingRentals.filter((pendingRental) => 
      (pendingRental.driver.account.firstname + " " + pendingRental.driver.account.lastname).toLowerCase().includes(driverName.toLowerCase())
    );
    setFilteredPendingRentals(temp);
  }

  const handleFilterClear = () => {
    setFilteredPendingRentals(pendingRentals);
  }

  if (loading) return (<Loading />)

  if (error !== "") return (<ResponseError message={error} />)

  return (
    <>
      <Box mt="12px" display="flex" flexDirection="column" sx={{ minHeight: "80vh" }}>
        <PageHeader title="Rental Applications" />
        <br></br>
          <DriverRentalFilterForm handleFilterClear={handleFilterClear} handleFilterSubmit={handleFilterSubmit} />
        <br></br>
        {
          filteredPendingRentals.length !== 0 ?
            <>
              <DriverApplicantCardList rentals={filteredPendingRentals.slice(pagination.from, pagination.to)} />
              <br />
              { 
                filteredPendingRentals.length > PAGE_SIZE && 
                <Pagination
                  color="primary"
                  count={Math.ceil(filteredPendingRentals.length / PAGE_SIZE)}
                  onChange={(event, page) => handlePaginationChange(page)}
                />
              }
            </> :
            <Typography variant="body1" color="text.secondary">No pending applications.</Typography>
        }
      </Box>
      <Footer name="Faith Rosalijos" course="BSIT" section="G1" />
    </>
  );
}

export default RentalApplications;