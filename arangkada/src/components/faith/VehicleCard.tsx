import { Button, Card, CardActions, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material/";
import { Vehicle } from "../../api/dataTypes";

type VehicleCardProps = {
  vehicle: Vehicle,
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const subheader = <>Operator: {vehicle.operator.account.firstname + " " + vehicle.operator.account.lastname} <br />Contact: {vehicle.operator.account.contactNumber}</>;

  return (
    <Card>
      <CardHeader title={vehicle.operator.businessName} subheader={subheader} />
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
        <Button endIcon={<ArrowForward />}>Rent Vehicle</Button>
      </CardActions>
    </Card>
  );
}

export default VehicleCard;