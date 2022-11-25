import { Box, Typography } from "@mui/material";
import { useState } from "react";
import VehicleCardList from "../../components/faith/VehicleCardList";
import VehicleFilterForm from "../../components/faith/VehicleFilterForm";
import PageHeader from "../../components/PageHeader";


export type Vehicle = {
  vehicleId: number,
  plateNumber: string,
  route: string,
  vehicleType: string,
  makeModel: string,
  vin: number,
  orStatus: string,
  vehicleCondition: string,
  rentalFee: number,
  operator: {
    operatorId: number,
    businessName: string,
    permitNumber: string,
    account: {
      accountId: number,
      firstname: string,
      middlename: string,
      lastname: string,
      birthdate: string,
      age: number,
      contactNumber: string,
      address: string,
      gender: string,
      username: string,
      password: string,
      accountType: string,
    }
  }
}

const VehicleRentals = () => {
  /* Sample data */
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      vehicleId: 1, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
      operator: {
        operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
        account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
      }
    },
    {
      vehicleId: 2, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
      operator: {
        operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
        account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
      }
    },
    {
      vehicleId: 3, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
      operator: {
        operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
        account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
      }
    },
    {
      vehicleId: 4, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
      operator: {
        operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
        account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
      }
    },
  ]);

  const handleFilterSubmit = (businessName: string, operatorName: string, route: string) => {
    console.log(businessName);
    console.log(operatorName);
    console.log(route);

    // filter vehicles here
  }

  const handleFilterClear = () => {
    // clear filters here
  }

  return (
    <Box mt="12px">
      <PageHeader title="Vehicle Rentals" />
      <br></br>
      <VehicleFilterForm handleFilterSubmit={handleFilterSubmit} handleFilterClear={handleFilterClear} />
      <br></br>
      {vehicles.length !== 0 && <VehicleCardList vehicles={vehicles} />}
      {vehicles.length === 0 && <Typography variant="body1" color="text.secondary">No available vehicles.</Typography>}
      {/* <Footer name="Faith Rosalijos" course="BSIT" section="G1"/> */}
    </Box>
  );
}

export default VehicleRentals;