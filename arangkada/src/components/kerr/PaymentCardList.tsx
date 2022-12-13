import { Grid } from "@mui/material";
import { Payment } from "../../api/dataTypes";
import PaymentCard from "./PaymentCard";

type MyPaymentCardListProps = {
    myPayment: Payment[],
  }

  const PaymentCardList = ({ myPayment }: MyPaymentCardListProps) => {
    return ( 
      <Grid container spacing={2} sx={{ padding: "12px 0" }}>
        {myPayment.map((myPayment) => (
          <Grid xs={12} md={12} lg={12} item key={myPayment.paymentId}>
            <PaymentCard myPayment={myPayment} />
          </Grid>
        ))}
        
      </Grid>
      
     );
  }

export default PaymentCardList;