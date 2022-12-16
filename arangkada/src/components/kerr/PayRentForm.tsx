import { Button, Stack, TextField, Grid } from "@mui/material";
import { useState } from "react";
import { Rental } from "../../api/dataTypes";
import { useNavigate, useParams } from "react-router-dom";
import PaymentService from "../../api/PaymentService";

type RentalDetailsProps = {
  rental: Rental,
}

const PayRentForm = ({rental}: RentalDetailsProps) => {
    const navigate = useNavigate();

    const [data, setData] = useState({
      paymentId: "",
      amount: "",
      datePaid: "",
      rental: ""
    })
  
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if(Number(data.amount) >= rental.vehicle.rentalFee)
      {
        PaymentService.postPayment({
          paymentId: -1,
          amount: Number(data.amount),
          datePaid: new Date(new Date().setHours(0, 0, 0, 0)).toJSON(),
          rental: rental
        }).then((response: any) => console.log('Posting Data'))
          .catch((error: string) => console.log(error))
          alert("Successfully paid the rent.")
          navigate('/driver/payments')
      }
      else
      {
        alert("Amount is not correct.")
      }
    }

    const handleBack = () => {
      navigate("../", { replace: true });
    }
  
    return ( 
      <>
      <Grid container spacing={2} onSubmit={handleSubmit} component="form" sx={{marginTop: 2, marginBottom: 5}}>
      <Grid item xs={12} md={4}>
         <TextField 
              onChange={handleAmountChange} 
              value={data.amount} 
              name="amount"
              label="Amount" 
              size="small"
              fullWidth 
              required>
          </TextField> 
      </Grid>
          <Grid item xs={12} >
          <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
            <Button onClick={handleBack} color="secondary" variant="contained" sx={{ width: "250px" }}>Cancel</Button>
            <Button type="submit" variant="contained" sx={{ width: "250px"}}>Pay Rent</Button>
          </Stack>
          </Grid>
      </Grid>
      </>
     );
  }
  
  export default PayRentForm;