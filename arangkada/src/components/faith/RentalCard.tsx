import { Button, Card, CardContent, Divider, Typography, Stack } from "@mui/material";
import { DateRange } from "@mui/icons-material/";
import { Rental } from "../../api/dataTypes";
import { useModal } from "mui-modal-provider";
import { ConfirmationModal } from "./Modals";
import Status from "./Status";
import RentalService from "../../api/RentalService";
import { PendingRentalsContext, PendingRentalsContextType } from "../../helpers/PendingRentalsContext";
import { useContext } from "react";

type RentalCardProps = {
  rental: Rental,
}

const RentalCard = ({ rental }: RentalCardProps) => {
  const { showModal } = useModal();
  const { pendingRentals, setPendingRentals } = useContext(PendingRentalsContext) as PendingRentalsContextType;

  const handleApprove = () => {
    const modal = showModal(ConfirmationModal, {
      title: "Approve this rental application?",
      content: "If you approve this application, the driver will be notified of your response.",
      onCancel: () => {
        modal.hide();
      },
      onConfirm: () => {
        modal.hide();
        RentalService.putRental(rental.rentalId.toString(), {
          startDate: rental.startDate,
          endDate: rental.endDate,
          status: "APPROVED",
          current: rental.current,
        }).then((response) => {
          setPendingRentals(pendingRentals.filter((pendingRental) => pendingRental.rentalId !== response.data.rentalId))
        }).catch((error) => {
          console.log(error);
        })
      }
    });
  }

  const handleDecline = () => {
    const modal = showModal(ConfirmationModal, {
      title: "Decline this rental application?",
      content: "If you decline this application, the driver will be notified of your response.",
      onCancel: () => {
        modal.hide();
      },
      onConfirm: () => {
        modal.hide();
        modal.hide();
        RentalService.putRental(rental.rentalId.toString(), {
          startDate: rental.startDate,
          endDate: rental.endDate,
          status: "DECLINED",
          current: false,
        }).then((response) => {
          setPendingRentals(pendingRentals.filter((pendingRental) => pendingRental.rentalId !== response.data.rentalId))
        }).catch((error) => {
          console.log(error);
        })
      }
    });
  }


  return (
    <Card>
      {/* Rental Information */}
      <CardContent>
        <Typography variant="h5">Rental ID: {rental.rentalId}</Typography>
        <Stack spacing={{ xs: 1, sm: 2 }} direction={{ xs: "column", sm: "row" }}>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <DateRange sx={{ color: "text.secondary" }} /> 
            <Typography variant="body1">Start: {rental.startDate}</Typography>
          </Stack>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <DateRange sx={{ color: "text.secondary" }} /> 
            <Typography variant="body1">End: {rental.endDate}</Typography>
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
        <Stack direction={{ xs: "column", lg: "row" }} alignItems="center" spacing={4} width="100%">
          {/* Rental Status */}
          {rental.status === "PENDING" && <Status status="Pending" message="Waiting for operator's response." />}
          <Stack direction={{ xs: "column-reverse", md: "row" }} width="100%" spacing={{ xs: 2, md: 3 }} justifyContent="end" >
            <Button variant="contained" color="error" sx={{ width: "250px" }} onClick={handleDecline}>Decline</Button>
            <Button variant="contained" color="success" sx={{ width: "250px" }} onClick={handleApprove}>Approve</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default RentalCard;