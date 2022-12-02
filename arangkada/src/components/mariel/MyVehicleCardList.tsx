import { Grid } from "@mui/material"
import { useState } from "react";
import MyVehicleCard from "./MyVehicleCard"
import { MyVehicle } from "../../pages/mariel/MyVehicles";

type MyVehicleCardListProps = {
  myVehicle: MyVehicle[],
}

const MyVehicleCardList = ({ myVehicle }: MyVehicleCardListProps) => {
  return ( 
    <Grid container spacing={2} sx={{ padding: "12px 0" }}>
      {myVehicle.map((myVehicle) => (
        <Grid xs={12} md={12} lg={12} item key={myVehicle.id}>
          <MyVehicleCard myVehicle={myVehicle} />
        </Grid>
      ))}
    </Grid>
   );
}
 
export default MyVehicleCardList;