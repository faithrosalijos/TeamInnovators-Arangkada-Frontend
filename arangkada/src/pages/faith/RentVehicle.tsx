import { Box } from "@mui/material";
import { useState } from "react";
import Instructions from "../../components/faith/Instructions";
import RentVehicleForm from "../../components/faith/RentVehicleForm";
import VehicleDetails from "../../components/faith/VehicleDetails";
import PageHeader from "../../components/PageHeader";
import { Vehicle } from "./VehicleRentals";

const RentVehicle = () => {
  const [vehicle, setVehicle] = useState<Vehicle>(
    {
      vehicleId: 1, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
      operator: {
        operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
        account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
      }
    }
  );
  
  return ( 
  <Box mt="12px">
    <PageHeader title="Rent Vehicle" />
    <br></br>
    <Instructions header="Please provide the details needed for rental." subheader="It might take a few days before the operator can respond to your application. You can still modify the start and end date until then."/>
    <br></br>
    <VehicleDetails vehicle={vehicle} />
    <br></br>
    <br></br>
    <RentVehicleForm />
    <br></br>
    {/* <Footer name="Faith Rosalijos" course="BSIT" section="G1"/> */}
  </Box>
  );
}
 
export default RentVehicle;