import { Payment } from "../../api/dataTypes";
import RouteIcon from '@mui/icons-material/Route';
import PaymentService from "../../api/RentalService";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";

type MyPaymentCardProps = {
    myPayment: Payment,
  }

const PaymentCard = ({ myPayment }: MyPaymentCardProps) => {
    return (
        <>
        <Card>
          <CardHeader 
            title={myPayment.rent.vehicle.plateNumber}       
            subheader={<Stack spacing={0.5} direction="row" alignItems="center">
                <RouteIcon/> <Typography variant="body1">{myPayment.amount}</Typography>
              </Stack>}
            action={
              <Link to={"/operator/vehicles/view/"+ myPayment.paymentId } style={{ textDecoration: 'none' }}> 
              <Button 
                variant="text" 
                fullWidth
                size="small"
                sx={{color: "gray",marginTop:5,}} >
                Payment ID: {myPayment.paymentId}
              </Button>
              </Link>
            }
          />
          <Divider />
          <CardContent>
            <Typography 
                  variant="body1">Rental Id: <b>{myPayment.rent.rentalId}</b>
              </Typography>
              <Typography 
                  variant="body1">Date Paid: <b>{myPayment.datePaid}</b> 
              </Typography>
              <Typography 
                  variant="body1">Business Name: <b>{myPayment.rent.vehicle.operator.businessName}</b>
              </Typography>
              <Typography 
                  variant="body1">Operator Name: <b>{myPayment.rent.vehicle.operator.account.firstname + ' ' + myPayment.rent.vehicle.operator.account.lastname}</b>
              </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "end" }}>
          <Link to={"/driver/payments/delete/" + myPayment.paymentId} style={{ textDecoration: 'none' }}> 
            <Button 
              size="small" 
              variant="contained" 
              className='remove'
              color="error"
              sx={{width:"150px"}}>
              Remove
            </Button>
            </Link>
            <Link to={"/driver/payments/update/"+ myPayment.paymentId } style={{ textDecoration: 'none' }}> 
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