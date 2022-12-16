import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import RentalService from "../../api/RentalService";
import Status from "../../components/faith/Status";
import UpdateRentalForm from "../../components/faith/UpdateRentalForm";
import VehicleDetails from "../../components/faith/VehicleDetails";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import ResponseError from "../../components/faith/ResponseError";
import { Rental } from "../../api/dataTypes";
import { UserContext, UserContextType } from "../../helpers/UserContext";

const MyRental = () => {
  const { user } = useContext(UserContext) as UserContextType;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentRental, setCurrentRental] = useState<Rental>({} as Rental);

  useEffect(() => {
    if (user !== null) {
      RentalService.getCurrentRentalByDriver(
        user.userId
      ).then((response) => {
        setCurrentRental(response.data)
        setError("");
      }).catch((error) => {
        setError(error.message);
      }).finally(() => {
        setLoading(false);
      })
    }
  }, []);

  const handleSetCurrentRental = (rental: Rental) => {
    setCurrentRental(rental);
  }

  if (loading) return (<Loading />)

  if (error !== "") return (<ResponseError message={error} />)

  return (
    <>
      <Box mt="12px" display="flex" flexDirection="column" sx={{ minHeight: "80vh" }}>
        <PageHeader title="Rental" />
        <br></br>
        {
          Object.keys(currentRental).length !== 0 ?
            <>
              <Typography variant="h5">Rental ID: {currentRental.rentalId}</Typography>
              <br></br>
              {currentRental.status === "PENDING" && <Status status="Pending" message="Waiting for operator's response." />}
              {currentRental.status === "APPROVED" && <Status status="Approved" message="Operator has approved your application." />}
              {currentRental.status === "FINISHED" && <Status status="Finished" message="You have finished your rental." />}
              <br></br>
              <VehicleDetails vehicle={currentRental.vehicle} />
              <br></br>
              <br></br>
              <UpdateRentalForm currentRental={currentRental} handleSetCurrentRental={handleSetCurrentRental} />
            </> :
            <Typography variant="body1" color="text.secondary">No ongoing or pending rental.</Typography>
        }
      </Box>
      <Footer name="Faith Rosalijos" course="BSIT" section="G1" />
    </>
  );
}

export default MyRental;