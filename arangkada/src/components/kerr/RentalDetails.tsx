import { Typography } from "@mui/material";
import { Rental } from "../../api/dataTypes";

type RentalDetailsProps = {
    rental: Rental,
  }

  const RentalDetails = ({ rental }: RentalDetailsProps) => {

    return (
      <div>
        <Typography variant="h5">{rental.driver.account.firstname + " " + rental.driver.account.lastname}</Typography>
        <Typography variant="body1" color="text.secondary">Operator: {rental.vehicle.operator.account.firstname + " " + payment.rent.vehicle.operator.account.firstname}</Typography>
        <Typography variant="body1" color="text.secondary">Contact Number: {rental.driver.account.contactNumber}</Typography>
        <br></br>
        <Typography variant="body1">Rental ID: <b>{rental.rentalId}</b> </Typography>
        <Typography variant="body1">Start Date: <b>{rental.startDate}</b> </Typography>
        <Typography variant="body1">End Date: <b>{rental.endDate}</b> </Typography>
        <Typography variant="body1">Status: <b>{rental.status}</b> </Typography>
        <Typography variant="body1">Vehicle ID: <b>{rental.vehicle.vehicleId}</b> </Typography>
        <Typography variant="body1">Driver ID: <b>{rental.driver.driverId}</b> </Typography>
      </div>
    );
  }
  
  export default RentalDetails;