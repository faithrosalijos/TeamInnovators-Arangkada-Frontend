import { Button, Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const CancelRentalForm = () => {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPasswordError(null);

    if (password === "") {
      setPasswordError("Please enter your password to confirm cancellation.")
    } else if (password !== "password") {
      setPasswordError("Password is incorrect.")
    } else {
      console.log(password);
    }
  }

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  }

  return (
    <Stack spacing={3} component="form" onSubmit={handleSubmit}>
      <TextField
        onChange={handlePasswordChange}
        type={showPassword ? "text" : "password"}
        value={password}
        label="Password"
        size="small"
        fullWidth
        error={passwordError !== null}
        helperText={passwordError}
        InputProps={{ endAdornment: (<InputAdornment position="end"> <IconButton onClick={handlePasswordShow}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton> </InputAdornment>) }}
      />
      <Stack spacing={3} direction={{ xs: "column-reverse", md: "row" }} sx={{ justifyContent: "end" }}>
        <Button color="secondary" variant="contained" sx={{ width: "250px" }}>No, Go Back</Button>
        <Button type="submit" variant="contained" sx={{ width: "250px" }}>Yes, Proceed</Button>
      </Stack>
    </Stack>
  );
}

export default CancelRentalForm;