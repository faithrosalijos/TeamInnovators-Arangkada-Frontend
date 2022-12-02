import { Button, Stack, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";

const PayRentForm = () => {
    const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
    const [datePaid, setDatePaid] = useState<Date | null>(null);
    const [datePaidError, setDatePaidError] = useState<string | null>(null);
  
    const handleDatePaidChange = (date: Date | null) => {
        setDatePaid(date);
    }
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setDatePaidError(null);
  
      ///TODO: DatePaid must be set automatically to the current date of today.
      if (datePaid === null)
        setDatePaidError("Please input the date of payment.");
      else
        console.log(datePaid);
    }
  
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3} component="form" onSubmit={handleSubmit}>
          <DesktopDatePicker
            label="Start Date"
            minDate={currentDate}
            value={datePaid}
            onChange={handleDatePaidChange}
            renderInput={(params) => <TextField {...params} size="small" error={datePaidError !== null} helperText={datePaidError} />}
          />
          <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
            <Button color="secondary" variant="contained" sx={{ width: "250px" }}>Go Back</Button>
            <Button type="submit" variant="contained" sx={{ width: "250px" }}>Rent Vehicle</Button>
          </Stack>
        </Stack>
      </LocalizationProvider>
    );
  }
  
  export default PayRentForm;