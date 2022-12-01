import { Button, Card, CardContent, Divider, Typography, Stack, Dialog, DialogActions, DialogContentText, DialogTitle, DialogContent } from "@mui/material";
import { BusinessCenter, Person, Phone } from "@mui/icons-material/";
import { Rental, Vehicle } from "../../api/dataTypes";
import RentalService from "../../api/RentalService";
import { useState } from "react";


type VehicleCardProps = {
  vehicle: Vehicle,
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const [openRentDialog, setOpenRentDialog] = useState(false);

  const handleRentVehicle = () => {
    RentalService.getCurrentRental("2").then((response) => {
      const currentRental: Rental | null = response.data;
      if (currentRental !== null) {
        setOpenRentDialog(true);
      } else {

      }
    })
  }

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5">Vehicle ID: {vehicle.vehicleId}</Typography>
          {/* Operator Information */}
          <Stack spacing={{ xs: 1, sm: 2 }} direction={{ xs: "column", sm: "row" }}>
            <Stack spacing={0.5} direction="row" alignItems="center">
              <BusinessCenter sx={{ color: "text.secondary" }} /> <Typography variant="body1">{vehicle.operator.businessName}</Typography>
            </Stack>
            <Stack spacing={0.5} direction="row" alignItems="center">
              <Person sx={{ color: "text.secondary" }} /> <Typography variant="body1">{vehicle.operator.account.firstname + " " + vehicle.operator.account.lastname}</Typography>
            </Stack>
            <Stack spacing={0.5} direction="row" alignItems="center">
              <Phone sx={{ color: "text.secondary" }} /> <Typography variant="body1">{vehicle.operator.account.contactNumber}</Typography>
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
          <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
            {/* Vehicle Rental Fee */}
            <Typography variant="h6"><strong>PHP {vehicle.rentalFee}</strong><Typography variant="body2">per rent</Typography></Typography>
            <Button variant="contained" sx={{ width: "150px" }} onClick={handleRentVehicle}>Rent Vehicle</Button>
          </Stack>
        </CardContent>
      </Card>

      {/* Current Rental Notice Dialog */}
      <Dialog open={openRentDialog} onClose={() => setOpenRentDialog(false)}>
        <DialogTitle >
          {"You have an ogoing or pending rental."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can only have one rental at a time. Finish or cancel your ongoing or pending rental first.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenRentDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default VehicleCard;