import { Button, Card, CardContent, Divider, Typography, Stack } from "@mui/material";
import { BusinessCenter, Person, Phone } from "@mui/icons-material/";
import { Rental, Vehicle } from "../../api/dataTypes";
import RentalService from "../../api/RentalService";
import { useModal } from "mui-modal-provider";
import { NoticeModal } from "./Modals";
import { useNavigate } from "react-router-dom";

type VehicleCardProps = {
  vehicle: Vehicle,
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const { showModal } = useModal();
  const navigate = useNavigate();

  const handleRentVehicle = () => {
    RentalService.getCurrentRental("2").then((response) => {
      const currentRental: Rental | null = response.data;
      if (currentRental !== null) {
        const modal = showModal(NoticeModal, {
          title: "You have an ogoing or pending rental.",
          content: "You can only have one rental at a time. Finish or cancel your ongoing or pending rental first.",
          onOkay: () => {
            modal.hide();
          }
        });
      } else {
        navigate("driver/vehicles/"+vehicle.vehicleId);
      }
    })
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Vehicle ID: {vehicle.vehicleId}</Typography>
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
      </CardContent>
      <Divider />

      {/* Vehicle Information */}
      <CardContent>
        <Typography variant="body1">Plate Number: {vehicle.plateNumber}</Typography>
        <Typography variant="body1">Vehicle Type: {vehicle.vehicleType} </Typography>
        <Typography variant="body1">Vehicle Make: {vehicle.makeModel}</Typography>
        <Typography variant="body1">Route: {vehicle.route}</Typography>
      </CardContent>

      <CardContent >
        <Stack direction={{ xs: "column", md: "row" }} alignItems="center" spacing={4} width="100%">
          {/* Vehicle Rental Fee */}
          <Stack width="100%">
            <Typography variant="h6"><strong>PHP {vehicle.rentalFee}</strong></Typography>
            <Typography variant="body2">per rent</Typography>
          </Stack>
          <Stack direction={{ xs: "column-reverse", md: "row" }} width="100%" justifyContent="end" >
            <Button variant="contained" sx={{ width: "250px" }} onClick={handleRentVehicle}>Rent Vehicle</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default VehicleCard;