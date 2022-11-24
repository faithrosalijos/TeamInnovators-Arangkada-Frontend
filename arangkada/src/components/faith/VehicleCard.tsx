import { Button, Card, CardActions, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Vehicle } from "../../pages/faith/VehicleRentals";

type VehicleCardProps = {
  vehicle: Vehicle,
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const subheader = <>Operator: {vehicle.operator.account.firstname + " " + vehicle.operator.account.lastname} <br />Contact Number: {vehicle.operator.account.contactNumber}</>;

  return (
    <Card>
      <CardHeader title={"Operator: " + vehicle.operator.businessName} subheader={subheader} />
      <Divider />
      <CardContent>
        <Typography variant="body1">Vehicle ID: <b>{vehicle.vehicleId}</b> </Typography>
        <Typography variant="body1">Plate Number: <b>{vehicle.plateNumber}</b></Typography>
        <Typography variant="body1">Vehicle Type: <b>{vehicle.vehicleType}</b> </Typography>
        <Typography variant="body1">Vehicle Make: <b>{vehicle.makeModel}</b></Typography>
        <Typography variant="body1">Route: <b>{vehicle.route}</b></Typography>
        <Typography variant="body1">Rental Fee: <b>PHP {vehicle.rentalFee}</b></Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button endIcon={<ArrowForwardIcon />}>Rent Vehicle</Button>
      </CardActions>
    </Card>
  );
}

export default VehicleCard;