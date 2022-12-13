import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Payment } from "../../api/dataTypes";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import PaymentService from "../../api/PaymentService";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ResponseError from "../../components/faith/ResponseError";

const MyPayments = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [currentPayment, setCurrentPayment] = useState<Payment>();

    const handlePayRentClick = () => {
      navigate("/driver/payments/payrent/");
  }
    useEffect(() => {
      PaymentService.getPaymentsByDriverId("2").then((response) => {
        setCurrentPayment(response.data)
        setError("");
      }).catch((error) => {
        setError(error.message);
      }).finally(() => {
        setLoading(false);
      })
    }, []);

    if (loading) return (<Loading />)

    if (error !== "") return (<ResponseError message={error} />)

    return (
        <>
          <Box mt="12px" sx={{ minHeight: "80vh" }}>
            <PageHeader title="My Payments" />
            <br></br>
            <Grid item xs={60} md={50}>
              <Button 
                id="AddBtn"
                onClick={handlePayRentClick}
                type="submit" 
                variant="contained"  
                sx={{marginLeft:160, height: "65px",width: "65px",borderRadius: "100px", marginTop: 2,marginRight: 2, marginBottom: 4}}>
                <h1>+</h1>
              </Button>
            </Grid>
            {
              currentPayment ?
                <>
                  <Typography variant="h5">Payment ID: {currentPayment.paymentId}</Typography>
                  {/* TODO: Show RentDetails from RentEntity of Payment to be added in dataTypes.tsx
                  and add Pay Rent button to PayRent page to be linked. */}
                  {/* <br></br>
                  {currentRental.status === "PENDING" && <Status status="Pending" message="Waiting for operator's response." />}
                  {currentRental.status === "APPROVED" && <Status status="Approved" message="Operator has approved your application." />}
                  <br></br>
                  <br></br>
                  <VehicleDetails vehicle={currentRental.vehicle} />
                  <br></br>
                  <br></br>
                  <UpdateRentalForm rental={currentRental} /> */}
                </> :
                <Typography variant="body1" color="text.secondary">No rents paid.</Typography>
            }
          </Box>
          <Footer name="Kerr Labajo" course="BSCS" section="F1" />
        </>
      );
}
export default MyPayments;