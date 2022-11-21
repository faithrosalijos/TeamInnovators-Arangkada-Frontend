import { useState } from "react";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const VehicleFilterForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [operatorName, setOperatorName] = useState("");
  const [location, setLocation] = useState("");

  const handleBusinessNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessName(event.target.value);
  }

  const handleOperatorNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOperatorName(event.target.value);
  }

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  }

  const handleClear = (event: React.MouseEvent) => {
    setBusinessName("");
    setOperatorName("");
    setLocation("");
  }

  return ( 
    <Grid container spacing={2} onSubmit={handleSubmit} component="form" sx={{ marginTop: "0", padding: "12px 0" }}>
      <Grid item xs={12} md={3}>
        <TextField onChange={handleBusinessNameChange} value={businessName} label="Search by Business Name" size="small" fullWidth InputProps={{ startAdornment: (<InputAdornment position="start"> <SearchIcon /> </InputAdornment>) }} />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField onChange={handleOperatorNameChange} value={operatorName} label="Operator Name" size="small" fullWidth InputProps={{ startAdornment: (<InputAdornment position="start"> <PersonIcon /> </InputAdornment>) }} />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField onChange={handleLocationChange} value={location} label="Location" size="small" fullWidth InputProps={{ startAdornment: (<InputAdornment position="start"> <LocationOnIcon /> </InputAdornment>) }} />
      </Grid>
      <Grid item xs={12} md={3}>
        <Button type="submit" fullWidth variant="contained" >Search</Button>
      </Grid>
      <Grid item xs={12} md={3}>
        <Button onClick={handleClear}>Clear Filters</Button>
      </Grid>
    </Grid>
   );
}
 
export default VehicleFilterForm;