import { Typography, Stack } from "@mui/material";
import { Vehicle } from "../../api/dataTypes";
import { BusinessCenter, Person, Phone } from "@mui/icons-material/";

type VehicleDetailsProps = {
  vehicle: Vehicle,
}

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) => {

  return (
    <div>
      <Typography variant="h6">Vehicle ID: {vehicle.vehicleId}</Typography>

      {/* Operator Information */}
      <Stack spacing={{ xs: 1, sm: 2 }} direction={{ xs: "column", sm: "row" }}>
        <Stack spacing={0.5} direction="row" alignItems="center">
          <BusinessCenter sx={{ color: "text.secondary" }} />
          <Typography variant="body1">{vehicle.operator.businessName}</Typography>
        </Stack>
        <Stack spacing={0.5} direction="row" alignItems="center">
          <Person sx={{ color: "text.secondary" }} />
          <Typography variant="body1">{vehicle.operator.account.firstname + " " + vehicle.operator.account.lastname}</Typography>
        </Stack>
        <Stack spacing={0.5} direction="row" alignItems="center">
          <Phone sx={{ color: "text.secondary" }} />
          <Typography variant="body1">{vehicle.operator.account.contactNumber}</Typography>
        </Stack>
      </Stack>
      <br></br>

      {/* Vehicle Information */}
      <Typography variant="body1">Plate Number: {vehicle.plateNumber}</Typography>
      <Typography variant="body1">Vehicle Type: {vehicle.vehicleType}</Typography>
      <Typography variant="body1">Vehicle Make: {vehicle.makeModel}</Typography>
      <Typography variant="body1">Route: {vehicle.route}</Typography>
      <br></br>

      {/* Vehicle Rental Fee */}
      <Typography variant="h6"><strong>PHP {vehicle.rentalFee}</strong><Typography variant="body2">per day</Typography></Typography>
    </div>
  );
}

export default VehicleDetails;