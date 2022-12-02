import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MyVehicle } from "../../pages/mariel/MyVehicles";
import RouteIcon from '@mui/icons-material/Route';


type MyVehicleCardProps = {
  myVehicle: MyVehicle,
}

const MyVehicleCard = ({ myVehicle }: MyVehicleCardProps) => {
  return (
    <>
    <Card>
      <CardHeader 
        title={myVehicle.plateNumber} 
        subheader={"Route: " + myVehicle.route} 
        action={
          <Button 
            type="submit" 
            variant="text" 
            fullWidth
            size="small"
            sx={{color: "gray",marginTop:5,}} >
          View
          </Button>
        }
      />
      <Divider />
      <CardContent>
          <Typography 
              variant="body1">Type: <b>{myVehicle.vehicleType}</b> 
          </Typography>
          <Typography 
              variant="body1">Make and Model: <b>{myVehicle.makeModel}</b>
          </Typography>
          <Typography 
              variant="body1">VIN: <b>{myVehicle.vin}</b>
          </Typography>
          <Typography 
              variant="body1">OR, CR Status: <b>{myVehicle.orStatus}</b>
          </Typography>
          <Typography 
              variant="body1">Vehicle Condition: <b>{myVehicle.condition}</b>
          </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button 
          size="small" 
          variant="contained" 
          className='remove'
          color="error"
          sx={{width:"150px"}}>
          Remove
        </Button>
        <Button 
          size="small" 
          variant="contained"
          sx={{width:"150px"}}>
          Update
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
export default MyVehicleCard;