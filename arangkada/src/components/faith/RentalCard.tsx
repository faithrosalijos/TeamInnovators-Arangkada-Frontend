import { Button, Card, CardContent, Divider, Typography, Stack, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { DateRange } from "@mui/icons-material/";
import { Rental } from "../../api/dataTypes";
import Status from "./Status";
import { useState } from "react";


type RentalCardProps = {
  rental: Rental,
}

const RentalCard = ({ rental }: RentalCardProps) => {
  const [openApproveDialog, setOpenApproveDialog] = useState(false);
  const [openDeclineDialog, setOpenDeclineDialog] = useState(false);

  const handleApprove = () => {
    console.log("Rental application approved.")
    setOpenApproveDialog(false);
  }

  const handleDecline = () => {
    console.log("Rental application declined.")
    setOpenDeclineDialog(false);
  }

  return (
    <>
      <Card>
        {/* Rental Information */}
        <CardContent>
          <Typography variant="h5">Rental ID: {rental.rentalId}</Typography>
          <Stack spacing={2} direction="row">
            <Stack spacing={0.5} direction="row" alignItems="center">
              <DateRange sx={{ color: "text.secondary" }} /> <Typography variant="body1">Start: {rental.startDate}</Typography>
            </Stack>
            <Stack spacing={0.5} direction="row" alignItems="center">
              <DateRange sx={{ color: "text.secondary" }} /> <Typography variant="body1">End: {rental.endDate}</Typography>
            </Stack>
          </Stack>
        </CardContent>
        <Divider />

        {/* Driver Information */}
        <CardContent>
          <Typography variant="h6">Driver ID: {rental.driver.driverid}</Typography>
          <Typography variant="body1">Name: {rental.driver.account.firstname + " " + rental.driver.account.lastname}</Typography>
          <Typography variant="body1">Contact Number: {rental.driver.account.contactNumber}</Typography>
          <Typography variant="body1">Address: {rental.driver.account.address}</Typography>
          <Typography variant="body1">License Number: {rental.driver.licensenumber}</Typography>
          <Typography variant="body1">License Code: {rental.driver.licensecode}</Typography>
        </CardContent>

        {/* Vehicle Information */}
        <CardContent>
          <Typography variant="h6">Vehicle ID: {rental.vehicle.vehicleId}</Typography>
          <Typography variant="body1">Plate Number: {rental.vehicle.plateNumber}</Typography>
          <Typography variant="body1">Vehicle Type: {rental.vehicle.vehicleType} </Typography>
          <Typography variant="body1">Vehicle Make: {rental.vehicle.makeModel}</Typography>
          <Typography variant="body1">Route: {rental.vehicle.route}</Typography>
        </CardContent>

        <CardContent >
          <Stack direction={{ xs: "column", md: "row" }} alignItems="center" spacing={4} width="100%">
            {/* Rental Status */}
            {rental.status === "PENDING" && <Status status="Pending" message="Waiting for operator's response." />}
            <Stack direction="row" width="100%" spacing={3} justifyContent="end" >
              <Button variant="contained" color="error" sx={{ width: "150px" }} onClick={() => setOpenDeclineDialog(true)}>Decline</Button>
              <Button variant="contained" color="success" sx={{ width: "150px" }} onClick={() => setOpenApproveDialog(true)}>Approve</Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      {/* Approve Rental Confimation Dialog */}
      <Dialog open={openApproveDialog} onClose={() => setOpenApproveDialog(false)}>
        <DialogTitle >
          {"Approve this rental application?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you approve this application, the driver will be notified of your response.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenApproveDialog(false)} color="secondary">Cancel</Button>
          <Button onClick={handleApprove}>Confirm</Button>
        </DialogActions>
      </Dialog>

      {/* Decline Rental Confimation Dialog */}
      <Dialog open={openDeclineDialog} onClose={() => setOpenDeclineDialog(false)}>
        <DialogTitle >
          {"Decline this rental application?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you decline this application, the driver will be notified of your response.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeclineDialog(false)} color="secondary">Cancel</Button>
          <Button onClick={handleDecline}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RentalCard;