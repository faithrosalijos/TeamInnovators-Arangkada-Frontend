import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { Rental } from "../../api/dataTypes";


type UpdateRentalFormProps = {
  rental: Rental,
}

const UpdateRentalForm = ({ rental }: UpdateRentalFormProps) => {
  const [openCancelDialog, setOpenCancelDialog] = useState(false);
  const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
  const [startDate, setStartDate] = useState<Date | null>(new Date(rental.startDate));
  const [endDate, setEndDate] = useState<Date | null>(new Date(rental.endDate));
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
      console.log(startDate);
      console.log(endDate);
    }
  }

  const handleCancelRental = () => {

  }

  const handleCancel = () => {
    console.log("Application cancelled.")
    setOpenCancelDialog(false);
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3} component="form" onSubmit={handleSubmit}>
          <DesktopDatePicker
            readOnly={rental.status === "APPROVED"}
            label="Start Date"
            minDate={currentDate}
            value={startDate}
            onChange={(date) => setStartDate(date)}
            renderInput={(params) => <TextField {...params} size="small" error={startDateError !== null} helperText={startDateError} />}
          />
          <DesktopDatePicker
            readOnly={rental.status === "APPROVED"}
            label="End Date"
            minDate={startDate !== null ? currentDate : new Date()}
            value={endDate}
            onChange={(date) => setEndDate(date)}
            renderInput={(params) => <TextField size="small" {...params} error={endDateError !== null} helperText={endDateError} />}
          />
          <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: rental.status === "PENDING" ? "end" : "start" }}>
            {
              rental.status === "PENDING" ?
                <>
                  <Button onClick={() => setOpenCancelDialog(true)} color="secondary" variant="contained" sx={{ width: "250px" }}>Cancel</Button>
                  <Button type="submit" variant="contained" sx={{ width: "250px" }}>Save Changes</Button>
                </> :
                <Button onClick={handleCancelRental} color="error" variant="contained" sx={{ width: "250px" }}>Cancel Rental</Button>
            }
          </Stack>
        </Stack>
      </LocalizationProvider>

      {/* Cancel Application Confimartion Dialog */}
      <Dialog open={openCancelDialog} onClose={() => setOpenCancelDialog(false)}>
        <DialogTitle >
          {"Are you sure you want to cancel this application?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            The operator is yet to respond to your rental application. If you cancel now, the application would be deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCancelDialog(false)} color="secondary">Cancel</Button>
          <Button onClick={handleCancel}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UpdateRentalForm;