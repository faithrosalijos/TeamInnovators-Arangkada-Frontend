import { Payment } from "../../api/dataTypes";
import PaidIcon from '@mui/icons-material/Paid';
import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";

type MyPaymentCardProps = {
    myPayment: Payment,
  }

const PaymentCard = ({ myPayment }: MyPaymentCardProps) => {
    return (
        <>
        <Card>
          <CardHeader 
            title={myPayment.rental.vehicle.plateNumber}
            subheader={
                <Stack spacing={0.5} direction="row" alignItems="center">
                    <PaidIcon/> <Typography variant="body1">{myPayment.amount}</Typography>
                </Stack>
                }
            action={
              <Link to={"/driver/payment/view/"+ myPayment.paymentId } style={{ textDecoration: 'none' }}> 
              <Button 
                variant="text" 
                fullWidth
                size="small"
                sx={{color: "gray",marginTop:5,}} >
                Rental Id: {myPayment.rental.rentalId}
              </Button>
              </Link>
            }
          />
          <Divider />
          <CardContent>
              <Typography 
                  variant="body1">Date Paid: <b>{myPayment.datePaid}</b> 
              </Typography>
              <Typography 
                  variant="body1">Business Name: <b>{myPayment.rental.vehicle.operator.businessName}</b> 
              </Typography>
              <Typography 
                  variant="body1">Operator Name: <b>{myPayment.rental.vehicle.operator.account.firstname + ' ' + myPayment.rental.vehicle.operator.account.lastname}</b>
              </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "end" }}>
          <Link to={"/driver/payment/delete/" + myPayment.paymentId} style={{ textDecoration: 'none' }}> 
            <Button 
              size="small" 
              variant="contained" 
              className='remove'
              color="error"
              sx={{width:"150px"}}>
              Remove
            </Button>
            </Link>
            <Link to={"/driver/payment/update/"+ myPayment.paymentId } style={{ textDecoration: 'none' }}> 
            <Button
               size="small" 
               variant="contained"
               sx={{width:"150px"}}>
                Update
              </Button>
              </Link>
          </CardActions>
        </Card>
        </>
      );
}

export default PaymentCard;