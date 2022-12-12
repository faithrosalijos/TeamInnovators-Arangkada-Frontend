import { Home, Person, Phone } from "@mui/icons-material";
import { Card, CardContent, Typography, Stack, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Rental } from "../../api/dataTypes";
import Status from "./Status";

type DriverCardProps = {
  rental: Rental,
}

const DriverRentingCard = ({ rental }: DriverCardProps) => {
  const navigate = useNavigate();

  const handleDischarge = () => {
    navigate(
      "/operator/drivers/discharge", { state: {rental: rental }});
  }

  const handleViewPayments = () => {

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
          {/* Rental Status */}
          {rental.status === "APPROVED" && <Status status="Approved" message="Driver is currently renting your vehicle." />}
          <Stack direction={{ xs: "column-reverse", md: "row" }} width="100%" spacing={{ xs: 2, md: 3 }} justifyContent="end" >
            <Button variant="contained" color="error" sx={{ width: "250px" }} onClick={handleDischarge}>Discharge</Button>
            <Button variant="contained" sx={{ width: "250px" }} onClick={handleViewPayments}>View Payments</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
   );
}
 
export default DriverRentingCard;