import { Grid } from "@mui/material"
import { useState } from "react";
import MyVehicleCard from "./MyVehicleCard"
import { MyVehicle } from "../../pages/operator/MyVehicles";

type MyVehicleCardListProps = {
  myVehicle: MyVehicle[],
}

const MyVehicleCardList = ({ myVehicle }: MyVehicleCardListProps) => {
  return ( 
    <Grid container spacing={2} sx={{ padding: "12px 0" }}>
      {myVehicle.map((myVehicle) => (
<<<<<<< Updated upstream:arangkada/src/components/operator/MyVehicleCardList.tsx
        <Grid  item key={myVehicle.id}>
=======
        <Grid xs={12} md={12} lg={12} item key={myVehicle.id}>
>>>>>>> Stashed changes:arangkada/src/components/mariel/MyVehicleCardList.tsx
          <MyVehicleCard myVehicle={myVehicle} />
        </Grid>
      ))}
    </Grid>
   );
}
 
export default MyVehicleCardList;