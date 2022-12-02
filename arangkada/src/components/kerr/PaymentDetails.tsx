import { Typography } from "@mui/material";
import { Payment } from "../../api/dataTypes";

type PaymentDetailsProps = {
    payment: Payment,
  }

  const PaymentDetails = ({ payment }: PaymentDetailsProps) => {

    return (
      <div>
        <Typography variant="h5">{payment.rent.driver.account.firstname + " " + payment.rent.driver.account.lastname}</Typography>
        <Typography variant="body1" color="text.secondary">Operator: {payment.rent.vehicle.operator.account.firstname + " " + payment.rent.vehicle.operator.account.firstname}</Typography>
        <Typography variant="body1" color="text.secondary">Contact Number: {payment.rent.driver.account.contactNumber}</Typography>
        <br></br>
        <Typography variant="body1">Payment ID: <b>{payment.paymentId}</b> </Typography>
        <Typography variant="body1">Rental ID: <b>{payment.rent.rentalId}</b> </Typography>
        <Typography variant="body1">Amount: <b>{payment.amount}</b> </Typography>
        <Typography variant="body1">Date Paid: <b>{payment.datePaid}</b></Typography>
      </div>
    );
  }
  
  export default PaymentDetails;