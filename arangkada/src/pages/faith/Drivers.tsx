import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Rental } from "../../api/dataTypes";
import RentalService from "../../api/RentalService";
import DriverRentalCardList from "../../components/faith/DriverRentalCardList";
import DriverRentalFilterForm from "../../components/faith/DriverRentalFilterForm";
import Loading from "../../components/Loading";
import ResponseError from "../../components/faith/ResponseError";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

const Drivers = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [filteredRentals, setFilteredRentals] = useState<Rental[]>([]);

  useEffect(() => {
    RentalService.getCurrentRentalsByOperator(
      "3"
    ).then((response) => {
      setRentals(response.data);
    }).catch((error) => {
      setError(error.message);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  useEffect(() => {
    setFilteredRentals(rentals);
  }, [rentals])

  const handleFilterSubmit = (filters: { driverName: string }) => {
    const { driverName } = filters;
    const temp = rentals.filter((rental) =>
      (rental.driver.account.firstname + " " + rental.driver.account.lastname).toLowerCase().includes(driverName.toLowerCase())
    );
    setFilteredRentals(temp);
  }

  const handleFilterClear = () => {
    setFilteredRentals(rentals);
  }

  if (loading) return (<Loading />)

  if (error !== "") return (<ResponseError message={error} />)

  return (
    <>
      <Box mt="12px" display="flex" flexDirection="column" sx={{ minHeight: "80vh" }}>
        <PageHeader title="Drivers" />
        <br></br>
        <DriverRentalFilterForm handleFilterClear={handleFilterClear} handleFilterSubmit={handleFilterSubmit} />
        <br></br>
        {filteredRentals.length !== 0 && <DriverRentalCardList rentals={filteredRentals} />}
        {filteredRentals.length === 0 && <Typography variant="body1" color="text.secondary">No drivers renting.</Typography>}
      </Box>
      <br></br>
      <Footer name="Faith Rosalijos" course="BSIT" section="G1" />
    </>
  );
}

export default Drivers;