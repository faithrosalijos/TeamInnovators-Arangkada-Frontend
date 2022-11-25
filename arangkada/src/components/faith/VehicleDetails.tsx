import { Typography } from "@mui/material";
import { Vehicle } from "../../pages/faith/VehicleRentals";

type VehicleDetailsProps = {
  vehicle: Vehicle,
}

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) => {

  return (
    <div>
      <Typography variant="h5">{vehicle.operator.businessName}</Typography>
      <Typography variant="body1" color="text.secondary">Operator: {vehicle.operator.account.firstname + " " + vehicle.operator.account.lastname}</Typography>
      <Typography variant="body1" color="text.secondary">Contact Number: {vehicle.operator.account.contactNumber}</Typography>
      <br></br>
      <Typography variant="body1">Vehicle ID: <b>{vehicle.vehicleId}</b> </Typography>
      <Typography variant="body1">Plate Number: <b>{vehicle.plateNumber}</b></Typography>
      <Typography variant="body1">Vehicle Type: <b>{vehicle.vehicleType}</b> </Typography>
      <Typography variant="body1">Vehicle Make: <b>{vehicle.makeModel}</b></Typography>
      <Typography variant="body1">Route: <b>{vehicle.route}</b></Typography>
      <Typography variant="body1">Rental Fee: <b>PHP {vehicle.rentalFee}</b></Typography>
    </div>
  );
}

export default VehicleDetails;