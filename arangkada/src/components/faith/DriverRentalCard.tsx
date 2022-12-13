import { Button, Card, CardContent, Divider, Typography, Stack } from "@mui/material";
import { Person, Home, Phone } from "@mui/icons-material/";
import { Rental } from "../../api/dataTypes";
import { useModal } from "mui-modal-provider";
import { ConfirmationModal } from "../Modals";
import Status from "./Status";
import RentalService from "../../api/RentalService";
import { SnackbarContext, SnackbarContextType } from "../../helpers/SnackbarContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";


type DriverRentalCardProps = {
  rental: Rental,
  handleDriverRentalDecline?: (rentalId: number) => void,
  handleDriverRentalApprove?: (rentalId: number) => void,
}

const DriverRentalCard = ({ rental, handleDriverRentalApprove, handleDriverRentalDecline }: DriverRentalCardProps) => {
  const { showModal } = useModal();
  const { handleSetMessage } = useContext(SnackbarContext) as SnackbarContextType;
  const navigate = useNavigate();

  const handleDischarge = () => {
    navigate("/operator/drivers/discharge", { state: {rental: rental }});
  }

  const handleViewPayments = () => {

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
          handleSetMessage("Rental declined.");
          handleDriverRentalDecline!(response.data.rentalId);
        }).catch((error) => {
          handleSetMessage(error.message + ". Failed to declined rental.");
        })
      }
    });
  }

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
          handleSetMessage("Rental approved.");
          handleDriverRentalApprove!(+response.data.rentalId);
        }).catch((error) => {
          handleSetMessage(error.message + ". Failed to approve rental.");
        })
      }
    });
  }

  return ( 
    <Card>
      <CardContent>
        <Typography variant="h5">Driver ID: {rental.driver.driverId}</Typography>
        {/* Driver Information */}
        <Stack spacing={{ xs: 1, sm: 2 }} direction={{ xs: "column", sm: "row" }}>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Person sx={{ color: "text.secondary" }} />
            <Typography variant="body1">{rental.driver.account.firstname + " " + rental.driver.account.lastname}</Typography>
          </Stack>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Home sx={{ color: "text.secondary" }} />
            <Typography variant="body1">{rental.driver.account.address}</Typography>
          </Stack>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Phone sx={{ color: "text.secondary" }} />
            <Typography variant="body1">{rental.driver.account.contactNumber}</Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />

      {/* License Information */}
      <CardContent>
        <Typography variant="body1">License Number: {rental.driver.licenseNumber}</Typography>
        <Typography variant="body1">License Code:  {rental.driver.licenseCode}</Typography>
      </CardContent>

      {/* Rental Information */}
      <CardContent>
        <Typography variant="h6">Rental Details</Typography>
        <Typography variant="body1">Start Date: {rental.startDate}</Typography>
        <Typography variant="body1">End Date:  {rental.endDate}</Typography>
        <Typography variant="body1">Vehicle ID:  {rental.vehicle.vehicleId}</Typography>
      </CardContent>

      <CardContent >
        <Stack direction={{ xs: "column", lg: "row" }} alignItems="center" spacing={4} width="100%">
          {
            rental.status === "PENDING"?
              <>
                <Status status="Pending" message="Driver is waiting for your response." />
                <Stack direction={{ xs: "column-reverse", md: "row" }} width="100%" spacing={{ xs: 2, md: 3 }} justifyContent="end" >
                  <Button variant="contained" color="error" sx={{ width: "250px" }} onClick={handleDecline}>Decline</Button>
                  <Button variant="contained" color="success" sx={{ width: "250px" }} onClick={handleApprove}>Approve</Button>
                </Stack>
              </>:
              <>
                {rental.status === "APPROVED" && <Status status="Approved" message="Driver is currently renting your vehicle." />}
                {rental.status === "FINISHED" && <Status status="Finished" message="Driver is done with his rental." />}
                <Stack direction={{ xs: "column-reverse", md: "row" }} width="100%" spacing={{ xs: 2, md: 3 }} justifyContent="end" >
                  {rental.status === "APPROVED" && <Button variant="contained" color="error" sx={{ width: "250px" }} onClick={handleDischarge}>Discharge</Button>}
                  <Button variant="contained" sx={{ width: "250px" }} onClick={handleViewPayments}>View Payments</Button>
                </Stack>
              </>   
          }
        </Stack>
      </CardContent>
    </Card>
   );
}
 
export default DriverRentalCard;