import { Box } from "@mui/material";
import { useState } from "react";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import VehicleCardList from "../components/VehicleCardList";
import VehicleFilterForm from "../components/VehicleFilterForm";

export type Vehicle = {
  id: number,
  businessName: string,
  operatorName: string,
  route: string,
  vehicleType: string,
  makeModel: string,
  rentalFee: number,
}

const VehicleRentals = () => {
  /* Sample data */
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {id: 1, businessName: "Business XX", operatorName: "John Doe", route: "01k", vehicleType: "Jeepney", makeModel: "Model 1", rentalFee: 500},
    {id: 2, businessName: "Business XX", operatorName: "John Doe", route: "01k", vehicleType: "Jeepney", makeModel: "Model 1", rentalFee: 500},
    {id: 3, businessName: "Business XX", operatorName: "John Doe", route: "01k", vehicleType: "Jeepney", makeModel: "Model 1", rentalFee: 500},
    {id: 4, businessName: "Business XX", operatorName: "John Doe", route: "01k", vehicleType: "Jeepney", makeModel: "Model 1", rentalFee: 500},
    {id: 5, businessName: "Business XX", operatorName: "John Doe", route: "01k", vehicleType: "Jeepney", makeModel: "Model 1", rentalFee: 500},
  ]);
  
  return ( 
    <Box sx={{ padding: "12px 0 0" }}>
      <PageHeader title="Vehicle Rentals" />
      <VehicleFilterForm />
      <VehicleCardList vehicles={vehicles} />
      <Footer name="Faith Rosalijos" course="BSIT" section="G1"/>
    </Box>
   );
}
 
export default VehicleRentals;