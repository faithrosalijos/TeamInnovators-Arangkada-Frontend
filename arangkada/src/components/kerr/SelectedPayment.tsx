import { Button, FormControl, Grid,  InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import PaymentService from "../../api/PaymentService";
import axios from "axios";

const UpdateSelectedPayment  = () =>{
    
    const navigate = useNavigate();
    const param = useParams() as { id: string };

    const [payment, setPayment]= useState({
        paymentId: "",
        amount: "",
        rental: {
            rentalId: ""
        }
    })
    const { amount, rental } = payment;
    const updatePayment = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/payment/putPayment/${param.id}`,{
        // VehicleService.putVehicle( {
        amount: payment.amount,
        rental: payment.rental
    })
    .then((res:any)=> console.log('Editing Data'))
    .catch((err:string) => console.log(err))
    // alert("Changes Successfully change")
    // navigate("/operator/view-payment")
    };

  useEffect(() => {
    // console.log(isRented)
    PaymentService.getPaymentById(param.id).then((response) => {
      setPayment(response.data);
    //   console.log(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, []);
     
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPayment({ ...payment, [e.target.name]: e.target.value });
        //console.log(e.target.name)
    };
    const handleSelectChange = (event: SelectChangeEvent) => {
        setPayment({ ...payment, [event.target.name]: event.target.value });
    }

    return ( 
        <>
        <Grid container spacing={4} onSubmit={updatePayment}component="form">
        <Grid item xs={12} md={4}>
           <TextField 
                onChange={handleChange} 
                disabled
                value={amount} 
                name="amount"
                label="Amount" 
                size="small"
                fullWidth 
            >
            </TextField> 
        </Grid>
        <Grid item xs={12} md={4}>
           <TextField 
                onChange={handleChange} 
                value={rental.rentalId}
                name="rentalId"
                disabled
                label="Rental Id" 
                size="small" 
                fullWidth 
            >
           </TextField>
        </Grid>
            <Grid item xs={12} >
            <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
              <Button  onClick={() => navigate(-1)} color="secondary" variant="contained" sx={{ width: "250px" }}>Cancel</Button>
              <Button  type="submit" variant="contained" sx={{ width: "250px"}}>Save Changes</Button> 
              {/* onClick={(e)=>{e.preventDefault(); console.log(data)}} */}
            </Stack>
            </Grid>
        </Grid>
        </>
       );
    }
export default UpdateSelectedPayment;