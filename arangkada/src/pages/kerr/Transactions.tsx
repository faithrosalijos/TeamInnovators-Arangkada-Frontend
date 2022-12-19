import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { Payment } from "../../api/dataTypes";
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

const Transactions = () => {
    const { handleSetMessage } = useContext(SnackbarContext) as SnackbarContextType;
    const { user } = useContext(UserContext) as UserContextType;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [payments, setPayments] = useState<Payment[]>([]);

    useEffect(() => {
        if (user !== null) {
          PaymentService.getAllPayments()
          .then((response) => {
            setPayments(response.data);
            setError("");
          }).catch((error) => {
            handleSetMessage(error.message);
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
          <PageHeader title="My Driver's Transactions" />
          <br></br>
            {payments.length !== 0 && <PaymentCardList myPayments={payments} />}
            {payments.length === 0 && <Typography variant="body1" color="text.secondary">No drivers has paid any rents yet.</Typography>}
            <Footer name="Kerr Labajo" course="BSCS" section="F1" />
        </Box>
        </>
        );
}

export default Transactions;