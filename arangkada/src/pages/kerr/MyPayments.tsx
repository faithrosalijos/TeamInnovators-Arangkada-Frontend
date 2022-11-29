import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Payment, Rental } from "../../api/dataTypes";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import PaymentService from "../../api/PaymentService";

const MyPayments = () => {
    const [currentPayment, setCurrentPayment] = useState<Payment>();
  
    useEffect(() => {
      PaymentService.getPaymentsByDriverId("2").then((response) => {
        setCurrentPayment(response.data)
      }).catch((error) => {
        console.log(error);
      })
    }, []);

    return (
        <>
          <Box mt="12px" sx={{ minHeight: "80vh" }}>
            <PageHeader title="My Payments" />
            <br></br>
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