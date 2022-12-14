import { Box, Typography, } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import MyVehicleCardList from "../../components/mariel/MyVehicleCardList";
import MyVehicleSearch from "../../components/mariel/MyVehicleSearch";
import { Vehicle } from "../../api/dataTypes";
import VehicleService from "../../api/VehicleService";
import Loading from "../../components/Loading";
import ResponseError from "../../components/faith/ResponseError";



const MyVehicles = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([])
  const [myVehicles, setVehicles] = useState<Vehicle[]>([]);


  useEffect(() => {
    VehicleService.getVehicleByOperatorOperatorId("3").then((response) => {
      setVehicles(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  useEffect(() => {
    setFilteredVehicles(myVehicles);
  }, [myVehicles])

  const handleFilterSubmit = (plateNumber: string) => {
    const temp = myVehicles.filter((myVehicle) =>
    myVehicle.plateNumber.toLowerCase().includes(plateNumber.toLowerCase()) 
    )
    setFilteredVehicles(temp);
  }

  const handleFilterClear = () => {
    setFilteredVehicles(myVehicles);
  }

  // if (loading) return (<Loading />)

  // if (error !== '') return (<ResponseError message={error} />)

  return ( 
    <>
      <Box mt="12px" sx={{ minHeight: "80vh"}}>
        <PageHeader title="Vehicles" />
        <br></br>
        <MyVehicleSearch handleFilterSubmit={handleFilterSubmit} handleFilterClear={handleFilterClear}/>
        <br></br>
          {filteredVehicles.length !== 0 && <MyVehicleCardList myVehicle={filteredVehicles} />}
          {filteredVehicles.length === 0 && <Typography variant="body1" color="text.secondary" align="center">Vehicle Not Found.</Typography>}
      </Box>
      <Footer name="Mariel Genodiala" course="BSIT" section="G3"/>
    </>

  );
}
 
export default MyVehicles;