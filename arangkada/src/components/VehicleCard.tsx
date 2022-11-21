import { Button, Card, CardActions, CardContent, CardHeader, Divider, Paper, Typography } from "@mui/material";
import { Vehicle } from "../pages/VehicleRentals";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type VehicleCardProps = {
  vehicle: Vehicle,
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <Card>
      <CardHeader title={vehicle.businessName} subheader={vehicle.operatorName} />
      <Divider />
      <CardContent>
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