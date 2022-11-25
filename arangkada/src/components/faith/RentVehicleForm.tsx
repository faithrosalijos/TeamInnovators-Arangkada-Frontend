import { Button, Stack, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";


const RentVehicleForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startDateError, setStartDateError] = useState<string | null>(null);
  const [endDateError, setEndDateError] = useState<string | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  }

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEndDateError(null);
    setStartDateError(null);

    if (startDate === null)
      setStartDateError("Please enter a start date.");
    else if (endDate === null)
      setEndDateError("Please enter an end date.");
    else if (endDate < startDate)
      setEndDateError("End date must be before the start date.");
    else {
      console.log(startDate);
      console.log(endDate);
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3} component="form" onSubmit={handleSubmit}>
        <DesktopDatePicker
          label="Start Date"
          inputFormat="MM/dd/yyyy"
          minDate={new Date()}
          value={startDate}
          onChange={handleStartDateChange}
          renderInput={(params) => <TextField {...params} size="small" error={startDateError !== null} helperText={startDateError} />}
        />
        <DesktopDatePicker
          label="End Date"
          inputFormat="MM/dd/yyyy"
          minDate={startDate !== null ? startDate : new Date()}
          value={endDate}
          onChange={handleEndDateChange}
          renderInput={(params) => <TextField size="small" {...params} error={endDateError !== null} helperText={endDateError} />}
        />
        <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
          <Button color="secondary" variant="contained" sx={{ width: "250px" }}>Go Back</Button>
          <Button type="submit" variant="contained" sx={{ width: "250px" }}>Rent Vehicle</Button>
        </Stack>
      </Stack>
    </LocalizationProvider>
  );
}

export default RentVehicleForm;