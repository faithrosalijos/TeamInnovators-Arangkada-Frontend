import { Grid } from "@mui/material";
import { Rental } from "../../api/dataTypes";
import DriverApplicantCard from "./DriverApplicantCard";

type RentalCardListProps = {
  rentals: Rental[],
}

const DriverApplicantCardList = ({ rentals }: RentalCardListProps) => {
  return (
    <Grid container spacing={2}>
      {rentals.map((rental) => (
        <Grid xs={12} item key={rental.rentalId}>
          <DriverApplicantCard rental={rental} />
        </Grid>
      ))}
    </Grid>
  );
}

export default DriverApplicantCardList;