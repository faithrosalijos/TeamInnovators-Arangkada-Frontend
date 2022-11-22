import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Paper, Typography } from "@mui/material";
import { MyVehicle } from "../../pages/MyVehiclePage/MyVehicles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
              variant="body1">VIN: <b>{myVehicle.route}</b>
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
          sx={{marginLeft: 128, color:'##D2A857',fontWeight: "bold"}}>
          Update
        </Button>
        <Button 
          size="small" 
          variant="outlined" 
          className='remove'
          sx={{marginLeft: 5 , color:'#D62828', fontWeight: "bold"}}>
          Remove
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
export default MyVehicleCard;