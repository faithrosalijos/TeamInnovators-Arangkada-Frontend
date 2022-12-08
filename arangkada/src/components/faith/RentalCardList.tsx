import { Grid } from "@mui/material";
import { Rental } from "../../api/dataTypes";
import RentalCard from "./RentalCard";

type RentalCardListProps = {
  rentals: Rental[],
}

const RentalCardList = ({ rentals }: RentalCardListProps) => {
  return (
    <Grid container spacing={2}>
      {rentals.map((rental) => (
        <Grid xs={12} item key={rental.rentalId}>
          <RentalCard rental={rental} />
        </Grid>
      ))}
    </Grid>
  );
}

export default RentalCardList;