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
    <Grid container spacing={2} onSubmit={handleSubmit} component="form" sx={{ marginTop: "0", padding: "12px 0" }}>
      <Grid item xs={60} md={50}>
        <TextField 
          onChange={handlePlateNumberChange} 
          value={plateNumber} label="Plate Number" 
          size="small"  
          fullWidth 
          InputProps={{ startAdornment: (<InputAdornment position="start"> <DriveEta /> </InputAdornment>) }} 
          sx={{width: '78%',marginLeft: "1%"}} />
        <Button 
          type="submit" 
          variant="contained"  
          sx={{margin: 3, marginTop: "0",width: '13%', height: 40}}>
          Search
        </Button>
      </Grid>
      <Grid item xs={60} md={50}>
        <Button  
          onClick={handleClear}
          sx={{margin: 1, marginTop: "0"}} >
          Clear Filters
        </Button>
      </Grid>
    </Grid>
   );
}
 
export default MyVehicleSearch;