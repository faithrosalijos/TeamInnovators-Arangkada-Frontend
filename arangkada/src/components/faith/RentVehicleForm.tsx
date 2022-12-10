import { Button, Stack, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RentVehicleForm = () => {
  const navigate = useNavigate();
  const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startDateError, setStartDateError] = useState<string | null>(null);
  const [endDateError, setEndDateError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEndDateError(null);
    setStartDateError(null);

    if (startDate === null)
      setStartDateError("Please enter a start date.");
    else if (startDate.toString() === "Invalid Date")
      setStartDateError("Invalid date.")
    else if (startDate < currentDate)
      setStartDateError("Start date must be today or later.")
    else if (endDate === null)
      setEndDateError("Please enter an end date.");
    else if (endDate.toString() === "Invalid Date")
      setEndDateError("Invalid end date.");
    else if (endDate < startDate)
      setEndDateError("End date must not be before the start date.");
    else {
      // http post request here

    }
  }

  const handleBack = () => {
    navigate("../", { replace: true });
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3} component="form" onSubmit={handleSubmit}>
        <DesktopDatePicker
          label="Start Date"
          minDate={currentDate}
          value={startDate}
          onChange={(date) => setStartDate(date)}
          renderInput={(params) => <TextField {...params} size="small" error={startDateError !== null} helperText={startDateError} />}
        />
        <DesktopDatePicker
          label="End Date"
          minDate={startDate === null ? currentDate : startDate}
          value={endDate}
          onChange={(date) => setEndDate(date)}
          renderInput={(params) => <TextField size="small" {...params} error={endDateError !== null} helperText={endDateError} />}
        />
        <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
          <Button onClick={handleBack} color="secondary" variant="contained" sx={{ width: "250px" }}>Go Back</Button>
          <Button type="submit" variant="contained" sx={{ width: "250px" }}>Rent Vehicle</Button>
        </Stack>
      </Stack>
    </LocalizationProvider>
  );
}

export default RentVehicleForm;