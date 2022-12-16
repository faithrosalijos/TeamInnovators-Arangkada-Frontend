import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { Payment, Rental } from "../../api/dataTypes";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import PaymentService from "../../api/PaymentService";
import RentalService from "../../api/RentalService";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ResponseError from "../../components/faith/ResponseError";
import PaymentCardList from "../../components/kerr/PaymentCardList";
import { UserContext, UserContextType } from "../../helpers/UserContext";
import { SnackbarContext, SnackbarContextType } from "../../helpers/SnackbarContext";

const Payments = () => {
    const { handleSetMessage } = useContext(SnackbarContext) as SnackbarContextType;
    const { user } = useContext(UserContext) as UserContextType;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [payments, setPayments] = useState<Payment[]>([]);
    const [currentRental, setCurrentRental] = useState<Rental>({} as Rental);

    const handlePayRentClick = () => {
      if (user !== null) {
        RentalService.getCurrentRentalByDriver(
          user.userId
          ).then((response) => {
            if(response.data === null){
              handleSetMessage("You are not currently renting any vehicles.");
            }
          setError("");
        }).catch((error) => {
          setError(error.message);
        }).finally(() => {
          setLoading(false);
        })
      }
      else{
        navigate("/driver/payments/pay-rent/");
      }
  }
    useEffect(() => {
      if (user !== null) {
        PaymentService.getPaymentsByDriverId(
          user.userId
          ).then((response) => {
          setPayments(response.data);
          // console.log(response.data); 
          setError("");
        }).catch((error) => {
          setError(error.message);
        }).finally(() => {
          setLoading(false);
        })
      }
    }, []);

    if (loading) return (<Loading />)

    if (error !== "") return (<ResponseError message={error} />)

    return (
      <>
      <Box mt="12px" display="flex" flexDirection="column" sx={{ minHeight: "80vh" }}>
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
          {payments.length !== 0 && <PaymentCardList myPayments={payments} />}
          {payments.length === 0 && <Typography variant="body1" color="text.secondary">No rents paid.</Typography>}
          <Footer name="Kerr Labajo" course="BSCS" section="F1" />
      </Box>
      </>
      );
}
export default Payments;