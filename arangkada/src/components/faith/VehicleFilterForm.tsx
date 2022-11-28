import { useState } from "react";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import { Search, Person, LocationOn } from "@mui/icons-material";


type VehicleFilterFormProps = {
  handleFilterSubmit: (businessName: string, operatorName: string, route: string) => void,
  handleFilterClear: () => void,
}

const VehicleFilterForm = ({ handleFilterSubmit, handleFilterClear }: VehicleFilterFormProps) => {
  const [businessName, setBusinessName] = useState("");
  const [operatorName, setOperatorName] = useState("");
  const [route, setRoute] = useState("");

  const handleBusinessNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessName(event.target.value);
  }

  const handleOperatorNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOperatorName(event.target.value);
  }

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoute(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleFilterSubmit(businessName, operatorName, route);
  }

  const handleClear = (event: React.MouseEvent) => {
    setBusinessName("");
    setOperatorName("");
    setRoute("");
    handleFilterClear();
  }

  return (
    <Grid container spacing={2} onSubmit={handleSubmit} component="form">
      <Grid item xs={12} md={3}>
        <TextField onChange={handleBusinessNameChange} value={businessName} label="Search by Business Name" size="small" fullWidth InputProps={{ startAdornment: (<InputAdornment position="start"> <Search /> </InputAdornment>) }} />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField onChange={handleOperatorNameChange} value={operatorName} label="Operator Name" size="small" fullWidth InputProps={{ startAdornment: (<InputAdornment position="start"> <Person /> </InputAdornment>) }} />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField onChange={handleLocationChange} value={route} label="Route" size="small" fullWidth InputProps={{ startAdornment: (<InputAdornment position="start"> <LocationOn /> </InputAdornment>) }} />
      </Grid>
      <Grid item xs={12} md={3}>
        <Button type="submit" fullWidth variant="contained" color="secondary">Search</Button>
      </Grid>
      <Grid item xs={12} md={3}>
        <Button onClick={handleClear} color="error" size="small">Clear Filters</Button>
      </Grid>
    </Grid>
  );
}

export default VehicleFilterForm;