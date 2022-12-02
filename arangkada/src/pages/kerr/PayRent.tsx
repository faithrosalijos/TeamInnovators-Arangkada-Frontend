import { Box } from "@mui/material";
import { useState } from "react";
import { Rental } from "../../api/dataTypes";
import Instructions from "../../components/faith/Instructions";
import PayRentForm from "../../components/kerr/PayRentForm";
import RentalDetails from "../../components/kerr/RentalDetails";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

const PayRent = () => {
    const [rental, setRental] = useState<Rental>(
      {
        rentalId: 1, 
        startDate: "2022-12-01", 
        endDate: "2022-12-02",
        status: "PENDING",

        vehicle: {
            vehicleId: 1, 
            plateNumber: "XXX-XX1", 
            route: "01K", 
            vehicleType: "Jeepney", 
            makeModel: "Model XX", 
            vin: 1, 
            orStatus: "OR Status", 
            vehicleCondition: "Vehicle Condition", 
            rentalFee: 500.0,

            operator: {
                operatorId: 1, 
                businessName: "Doe PUV", 
                permitNumber: "XXX-XXX",

                account: { 
                    accountId: 3, 
                    firstname: "John", 
                    middlename: "", 
                    lastname: "Doe", 
                    birthdate: "2000-12-31", 
                    age: 24, 
                    contactNumber: "9998765544", 
                    address: "ABC City", 
                    gender: "Male", 
                    username: "john.doe", 
                    password: "john", 
                    accountType: "operator" 
                }
            }
        },

        driver: {
            driverId: 1, 
            licensenumber: "GXX-XX-XXXXXX", 
            licensecode: "A,A1,B,B1",
            
            account: {
                accountId: 1, 
                firstname: "Jobert", 
                middlename: "", 
                lastname: "Doe", 
                birthdate: "2000-12-31", 
                age: 48, 
                contactNumber: "9998765544", 
                address: "DEF City", 
                gender: "Male", 
                username: "jobert.doe", 
                password: "jobert", 
                accountType: "driver" 
            }
        }
      }
    );
  
    return (
      <>
        <Box mt="12px" sx={{ minHeight: "80vh" }}>
          <PageHeader title="Pay Rent" />
          <br></br>
          <Instructions header="Please provide the amount to pay the rent." subheader="" />
          <br></br>
          <RentalDetails rental={rental} />
          <br></br>
          <br></br>
          <PayRentForm />
        </Box>
        <Footer name="Kerr Labajo" course="BSCS" section="F1" />
      </>
    );
  }
  
  export default PayRent;