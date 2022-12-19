import { Payment } from "../../api/dataTypes";
import PaymentIcon from '@mui/icons-material/Payment';
import RentIcon from '@mui/icons-material/CarRental';
import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";

type TransactionCardProps = {
    transactions: Payment,
  }

const TransactionCard = ({ transactions }: TransactionCardProps) => {
    return (
        <>
        <Card>
          <CardHeader 
            title={transactions.rental.vehicle.plateNumber}
            subheader={
                <>
                  <Stack spacing={0.5} direction="row" alignItems="center">
                    <PaymentIcon /> <Typography variant="body1">PHP {transactions.amount}.00</Typography>
                  </Stack>
                  <Stack spacing={0.5} direction="row" alignItems="center">
                    <RentIcon /> <Typography variant="body1">Rental Id: {transactions.rental.rentalId}</Typography>
                  </Stack>
                </>
                }
          />
          <Divider />
          <CardContent>
              <Typography 
                  variant="body1">Date Paid: <b>{transactions.datePaid}</b> 
              </Typography>
              <Typography 
                  variant="body1">Business Name: <b>{transactions.rental.vehicle.operator.businessName}</b> 
              </Typography>
              <Typography 
                  variant="body1">Operator Name: <b>{transactions.rental.vehicle.operator.account.firstname + ' ' + transactions.rental.vehicle.operator.account.lastname}</b>
              </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "end" }}>
            <Link to={"/driver/payments/update/"+ transactions.paymentId } style={{ textDecoration: 'none' }}> 
            <Button
               size="small" 
               variant="contained"
               sx={{width:"150px"}}>
                Edit
              </Button>
              </Link>
          </CardActions>
        </Card>
        </>
      );
}

export default TransactionCard;