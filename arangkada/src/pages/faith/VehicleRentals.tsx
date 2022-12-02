import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Vehicle } from "../../api/dataTypes";
import VehicleCardList from "../../components/faith/VehicleCardList";
import VehicleFilterForm from "../../components/faith/VehicleFilterForm";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";


const VehicleRentals = () => {
  /* Sample data */
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([])
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      vehicleId: 1, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
      operator: {
        operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
        account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
      }
    },
    {
      vehicleId: 2, plateNumber: "XXX-XX1", route: "12H", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
      operator: {
        operatorId: 1, businessName: "Smith PUV", permitNumber: "XXX-XXX",
        account: { accountId: 3, firstname: "Jason", middlename: "", lastname: "Smith", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
      }
    },
    {
      vehicleId: 3, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
      operator: {
        operatorId: 1, businessName: "Wright PUV", permitNumber: "XXX-XXX",
        account: { accountId: 3, firstname: "Jason", middlename: "", lastname: "Wright", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
      }
    },
    {
      vehicleId: 4, plateNumber: "XXX-XX1", route: "12H", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
      operator: {
        operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
        account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
      }
    },
  ]);

  useEffect(() => {
    setFilteredVehicles(vehicles);
  }, [vehicles])

  const handleFilterSubmit = (businessName: string, operatorName: string, route: string) => {
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

  return (
    <>
      <Box mt="12px" sx={{ minHeight: "80vh" }}>
        <PageHeader title="Vehicle Rentals" />
        <br></br>
        <VehicleFilterForm handleFilterSubmit={handleFilterSubmit} handleFilterClear={handleFilterClear} />
        <br></br>
        {filteredVehicles.length !== 0 && <VehicleCardList vehicles={filteredVehicles} />}
        {filteredVehicles.length === 0 && <Typography variant="body1" color="text.secondary">No available vehicles.</Typography>}
      </Box>
      <Footer name="Faith Rosalijos" course="BSIT" section="G1" />
    </>
  );
}

export default VehicleRentals;