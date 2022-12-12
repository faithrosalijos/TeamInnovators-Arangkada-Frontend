import { Button, Stack, TextField, Grid } from "@mui/material";
import { useState } from "react";

const PayRentForm = () => {
    const [amount, setAmount] = useState("");

  
    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(event.target.value);
    }
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      ///TODO: DatePaid must be set automatically to the current date of today.
    }
  
    return ( 
      <>
      <Grid container spacing={2} onSubmit={handleSubmit} component="form" sx={{marginTop: 2, marginBottom: 5}}>
      <Grid item xs={12} md={4}>
         <TextField 
              onChange={handleAmountChange} 
              value={amount} 
              label="Amount" 
              size="small"
              fullWidth 
              required
              sx={{margin: 1, }}>
          </TextField> 
      </Grid>
          <Grid item xs={12} >
          <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
            <Button color="secondary" variant="contained" sx={{ width: "250px" }}>Cancel</Button>
            <Button type="submit" variant="contained" sx={{ width: "250px"}}>Pay Rent</Button>
          </Stack>
          </Grid>
      </Grid>
      </>
     );
  }
  
  export default PayRentForm;