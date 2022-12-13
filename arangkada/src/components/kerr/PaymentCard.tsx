import { Payment } from "../../api/dataTypes";
import RouteIcon from '@mui/icons-material/Route';
import PaymentService from "../../api/PaymentService";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";

type MyPaymentCardProps = {
    myPayment: Payment,
  }

const PaymentCard = ({ myPayment }: MyPaymentCardProps) => {
    return (
        <>
        {/* HELP REQUEST: It successfully iterates each payments of the current logged in driver
                      but it displays blank white space when calling the myPayment.rent...etc. 
                      I left some comments in specific lines below which causes the problem.
                      Data types paymentId, amount, and datePaid are the only ones that can be
                      displayed. Need help please.*/}
        <Card>
          <CardHeader 
            title={myPayment.rent.vehicle.plateNumber}    // Cause of Error/Blank white space is here
            subheader={
                <Stack spacing={0.5} direction="row" alignItems="center">
                    <RouteIcon/> <Typography variant="body1">{myPayment.amount}</Typography>
                </Stack>
                }
            action={
              <Link to={"/driver/payment/view/"+ myPayment.paymentId } style={{ textDecoration: 'none' }}> 
              <Button 
                variant="text" 
                fullWidth
                size="small"
                sx={{color: "gray",marginTop:5,}} >
                Rental Id: {myPayment.rent.rentalId}
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
                  variant="body1">Business Name: <b>{myPayment.rent.vehicle.operator.businessName}</b> {/*Cause of Error/Blank white space is here*/}   
              </Typography>
              <Typography 
                  variant="body1">Operator Name: <b>{myPayment.rent.vehicle.operator.account.firstname + ' ' + myPayment.rent.vehicle.operator.account.lastname}</b> {/*Cause of Error/Blank white space is here*/}   
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