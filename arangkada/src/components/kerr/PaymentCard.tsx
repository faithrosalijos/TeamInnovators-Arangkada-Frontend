import { Payment } from "../../api/dataTypes";
import { useEffect, useState, useContext } from "react";
import { useModal } from "mui-modal-provider";
import { NoticeModal } from "../../components/Modals";
import PaymentIcon from '@mui/icons-material/Payment';
import RentIcon from '@mui/icons-material/CarRental';
import { useNavigate, useParams } from "react-router-dom";
import { SnackbarContext, SnackbarContextType } from "../../helpers/SnackbarContext";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";

type MyPaymentCardProps = {
    myPayment: Payment,
  }

const PaymentCard = ({ myPayment }: MyPaymentCardProps) => {
  const navigate = useNavigate()
  const { showModal } = useModal();

  const handleEditPaymentClick = () =>{
    if(myPayment.collected === true)
        {
          const modal = showModal(NoticeModal, {
            title: "You are not allowed to edit this payment.",
            content: "This payment has already been collected by the operator.",
            onOkay: () => {
              modal.hide();
            }
          });
        }
        else
        {
          navigate("/driver/payments/update/"+ myPayment.paymentId);
        }
  }
    return (
        <>
        <Card>
          <CardHeader 
            title={myPayment.rental.vehicle.plateNumber}
            subheader={
                <>
                  <Stack spacing={0.5} direction="row" alignItems="center">
                    <PaymentIcon /> <Typography variant="body1">PHP {myPayment.amount}.00</Typography>
                  </Stack>
                  <Stack spacing={0.5} direction="row" alignItems="center">
                    <RentIcon /> <Typography variant="body1">Rental Id: {myPayment.rental.rentalId}</Typography>
                  </Stack>
                </>
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
            <Button
               size="small" 
               variant="contained"
               onClick={handleEditPaymentClick}
               sx={{width:"150px"}}>
                Edit
              </Button>
          </CardActions>
        </Card>
        </>
      );
}

export default PaymentCard;