import { Grid } from "@mui/material"
import { useState } from "react";
import VehicleCard from "../components/VehicleCard";
import { Vehicle } from "../pages/VehicleRentals";

type VehicleCardListProps = {
  vehicles: Vehicle[],
}

const VehicleCardList = ({ vehicles }: VehicleCardListProps) => {
  return ( 
    <Grid container spacing={2} sx={{ padding: "12px 0" }}>
      {vehicles.map((vehicle) => (
        <Grid xs={12} md={6} lg={3} item key={vehicle.id}>
          <VehicleCard vehicle={vehicle} />
        </Grid>
      ))}
    </Grid>
   );
}
 
export default VehicleCardList;