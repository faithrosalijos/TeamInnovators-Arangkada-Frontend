import { Grid } from "@mui/material";
import { Rental } from "../../api/dataTypes";
import DriverRentingCard from "./DriverRentingCard";

type DriverCardListProps = {
  rentals: Rental[];
}

const DriverRentingCardList = ({ rentals }: DriverCardListProps) => {
  return ( 
    <Grid container spacing={2}>
      {rentals.map((rental) => (
        <Grid xs={12} item key={rental.rentalId}>
          <DriverRentingCard rental={rental}/>
        </Grid>
      ))}
    </Grid>
   );
}
 
export default DriverRentingCardList;