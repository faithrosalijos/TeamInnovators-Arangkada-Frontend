import { useState } from "react";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import DriveEta from "@mui/icons-material/DriveEta";


const MyVehicleSearch = () => {
  const [plateNumber, setPlateNumber] = useState("");

  const handlePlateNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlateNumber(event.target.value);
  }
  
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  }

  const handleClear = (event: React.MouseEvent) => {
    setPlateNumber("");
  }

  return ( 
    <Grid container spacing={2} onSubmit={handleSubmit} component="form" sx={{marginTop: 2}}>
      <Grid item xs={12} md={8}>
        <TextField 
          onChange={handlePlateNumberChange} 
          value={plateNumber} label="Plate Number" 
          size="small"  
          fullWidth 
          InputProps={{ startAdornment: (<InputAdornment position="start"> <DriveEta /> </InputAdornment>) }} 
          sx={{margin:1}} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Button 
          type="submit" 
          variant="contained"  
          color ="secondary"
          fullWidth
          sx={{margin: 1,}}>
          Search
        </Button>
      </Grid>
      <Grid item xs={12} md={3}>
        <Button  
          onClick={handleClear}
          color="error"
          size="small">
          Clear Filters
        </Button>
      </Grid>
    </Grid>
   );
}
 
export default MyVehicleSearch;