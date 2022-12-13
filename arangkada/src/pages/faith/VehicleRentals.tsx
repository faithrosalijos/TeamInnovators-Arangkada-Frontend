import { Box, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Vehicle } from "../../api/dataTypes";
import VehicleCardList from "../../components/faith/VehicleCardList";
import VehicleFilterForm from "../../components/faith/VehicleFilterForm";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import VehicleService from "../../api/VehicleService";
import Loading from "../../components/Loading";
import ResponseError from "../../components/faith/ResponseError";

const VehicleRentals = () => {
  const PAGE_SIZE = 5;
  const [pagination, setPagination] = useState({ from: 0, to: PAGE_SIZE });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([])
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    VehicleService.getVehicleByVehicleType(
      "Jeepney"
    ).then((response) => {
      setVehicles(response.data);
      setError("");
    }).catch((error) => {
      setError(error.message);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  useEffect(() => {
    setFilteredVehicles(vehicles);
  }, [vehicles])

  const handleFilterSubmit = (filters: { businessName: string, operatorName: string, route: string }) => {
    const { businessName, operatorName, route } = filters;
    const temp = vehicles.filter((vehicle) =>
      vehicle.operator.businessName.toLowerCase().includes(businessName.toLowerCase()) &&
      (vehicle.operator.account.firstname + " " + vehicle.operator.account.lastname).toLowerCase().includes(operatorName.toLowerCase()) &&
      vehicle.route.toLowerCase().includes(route.toLowerCase())
    )
    setFilteredVehicles(temp);
  }

  const handleFilterClear = () => {
    setFilteredVehicles(vehicles);
  }

  const handlePaginationChange = (page: number) => {
    const from = (page - 1) * PAGE_SIZE;
    const to = (page - 1) * PAGE_SIZE + PAGE_SIZE;
    setPagination({ from: from, to: to });
    window.scroll(0, 0);
  }

  if (loading) return (<Loading />)

  if (error !== "") return (<ResponseError message={error} />)

  return (
    <>
      <Box mt="12px" sx={{ minHeight: "80vh" }}>
        <PageHeader title="Vehicle Rentals" />
        <br></br>
        <VehicleFilterForm handleFilterSubmit={handleFilterSubmit} handleFilterClear={handleFilterClear} />
        <br></br>
        {
          filteredVehicles.length !== 0 ?
            <>
              <VehicleCardList vehicles={filteredVehicles.slice(pagination.from, pagination.to)} />
              <br />
              { 
                filteredVehicles.length > PAGE_SIZE && 
                <Pagination
                  color="primary"
                  count={Math.ceil(filteredVehicles.length / PAGE_SIZE)}
                  onChange={(event, page) => handlePaginationChange(page)}
                />
              }
            </> :
            <Typography variant="body1" color="text.secondary">No available vehicles.</Typography>
        }
      </Box>
      <Footer name="Faith Rosalijos" course="BSIT" section="G1" />
    </>
  );
}

export default VehicleRentals;