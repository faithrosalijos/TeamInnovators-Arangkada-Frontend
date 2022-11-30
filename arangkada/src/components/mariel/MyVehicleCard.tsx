import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Paper, Typography } from "@mui/material";
import { MyVehicle } from "../../pages/operator/MyVehicles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
=======
import { MyVehicle } from "../../pages/mariel/MyVehicles";
>>>>>>> Stashed changes:arangkada/src/components/mariel/MyVehicleCard.tsx

type MyVehicleCardProps = {
  myVehicle: MyVehicle,
}

const MyVehicleCard = ({ myVehicle }: MyVehicleCardProps) => {
  return (
    <>
    <Card>
      <CardHeader 
        title={myVehicle.plateNumber} 
        subheader={myVehicle.route} 
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
          variant="outlined"
          sx={{ color:'##D2A857',fontWeight: "bold"}}>
          Update
        </Button>
        <Button 
          size="small" 
          variant="outlined" 
          className='remove'
          sx={{ color:'#D62828', fontWeight: "bold"}}>
          Remove
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
export default MyVehicleCard;