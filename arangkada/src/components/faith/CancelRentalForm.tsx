import { Button, Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import RentalService from "../../api/RentalService";
import { CurrentRentalContext, CurrentRentalContextType } from "../../helpers/CurrentRentalContext";
import { Rental } from "../../api/dataTypes";
import { useNavigate } from "react-router-dom";
import { SnackbarContext, SnackbarContextType } from "../../helpers/SnackbarContext";

const CancelRentalForm = () => {
  const navigate = useNavigate();
  const { currentRental, handleSetCurrentRental } = useContext(CurrentRentalContext) as CurrentRentalContextType;
  const { handleSetMessage } = useContext(SnackbarContext) as SnackbarContextType;

  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPasswordError(null);

    if (password === "") {
      setPasswordError("Please enter your password to confirm cancellation.")
    } else if (password !== "password") {
      setPasswordError("Password is incorrect.")
    } else {
      RentalService.putRental(
        currentRental.rentalId.toString(),
        {
          startDate: currentRental.startDate,
          endDate: currentRental.endDate,
          status: "CANCELLED",
          current: false,
        }).then(() => {
          handleSetCurrentRental({} as Rental);
          handleSetMessage("Rental cancelled.");
          navigate("../", { replace: true });
        }).catch(() => {
          handleSetMessage("Failed to cancel rental.");
        })
    }
  }

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  }

  const handleBack = () => {
    navigate("../");
  }

  return (
    <Stack spacing={3} component="form" onSubmit={handleSubmit}>
      <TextField
        onChange={(event) => setPassword(event.target.value)}
        type={showPassword ? "text" : "password"}
        value={password}
        label="Password"
        size="small"
        fullWidth
        error={passwordError !== null}
        helperText={passwordError}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handlePasswordShow}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
        <Button onClick={handleBack} color="secondary" variant="contained" sx={{ width: "250px" }}>No, Go Back</Button>
        <Button type="submit" variant="contained" sx={{ width: "250px" }}>Yes, Proceed</Button>
      </Stack>
    </Stack>
  );
}

export default CancelRentalForm;