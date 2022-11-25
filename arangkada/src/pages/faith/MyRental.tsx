import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Status from "../../components/faith/Status";
import UpdateRentalForm from "../../components/faith/UpdateRentalForm";
import VehicleDetails from "../../components/faith/VehicleDetails";
import PageHeader from "../../components/PageHeader";
import { Vehicle } from "./VehicleRentals";

export type Rental = {
  rentalId: number,
  startDate: string,
  endDate: string,
  status: string,
  vehicle: Vehicle,
}

const MyRental = () => {
  const [currentRental, setCurrentRental] = useState<Rental | null>(
    {
      rentalId: 1, startDate: "11/25/2022", endDate: "11/27/2022", status: "PENDING",
      vehicle: {
        vehicleId: 1, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
        operator: {
          operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
          account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
        }
      }
    }
  );

  return (
    <Box mt="12px">
      <PageHeader title="My Rental" />
      <br></br>
      {
        currentRental !== null ?
          <>
            <Typography variant="h5">Rental ID: {currentRental.rentalId}</Typography>
            <br></br>
            {currentRental.status == "PENDING" && <Status status="Pending" message="Waiting for operator's response." />}
            {currentRental.status == "APPROVED" && <Status status="Approved" message="Operator has approved your application." />}
            <br></br>
            <br></br>
            <VehicleDetails vehicle={currentRental.vehicle} />
            <br></br>
            <br></br>
            <UpdateRentalForm rental={currentRental} />
          </> :
          <Typography variant="body1" color="text.secondary">No ongoing or pending rental.</Typography>
      }
      <br></br>
      {/* <Footer name="Faith Rosalijos" course="BSIT" section="G1"/> */}
    </Box>
  );
}

export default MyRental;