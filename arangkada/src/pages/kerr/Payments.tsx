import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Payment } from "../../api/dataTypes";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import PaymentService from "../../api/PaymentService";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ResponseError from "../../components/faith/ResponseError";
import PaymentCardList from "../../components/kerr/PaymentCardList";

const Payments = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [payments, setPayments] = useState<Payment[]>([]);

    const handlePayRentClick = () => {
      navigate("/driver/payments/payrent/");
  }
    useEffect(() => {
      PaymentService.getPaymentsByDriverId("1").then((response) => {
        setPayments(response.data)
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
      <Box sx={{ padding: "12px 0 0" }}>
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
          {payments.length !== 0 && <PaymentCardList myPayment={payments} />}
          {payments.length === 0 && <Typography variant="body1" color="text.secondary">No rents paid.</Typography>}
          <Footer name="Kerr Labajo" course="BSCS" section="F1" />
      </Box>
      </>
      );
}
export default Payments;