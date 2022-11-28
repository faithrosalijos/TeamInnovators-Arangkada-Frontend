import { Box, Grid, Paper, Typography } from "@mui/material";
import DashboardCard from "../../components/faith/DashboardCard";
import PageHeader from "../../components/PageHeader";
import { Rental } from "./MyRental";
import { useState } from "react";
import { CarRental, Commute, Cancel, DoneAll } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";


const DriverDashboard = () => {
  const [pageSize, setPageSize] = useState<number>(5);
  const [rentals, setRentals] = useState<Rental[]>([
    {
      rentalId: 1, startDate: "11/25/2022", endDate: "11/27/2022", status: "FINISHED",
      vehicle: {
        vehicleId: 1, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
        operator: {
          operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
          account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
        }
      }
    },
    {
      rentalId: 2, startDate: "11/25/2022", endDate: "11/27/2022", status: "APPROVED",
      vehicle: {
        vehicleId: 1, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
        operator: {
          operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
          account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
        }
      }
    },
    {
      rentalId: 3, startDate: "11/25/2022", endDate: "11/27/2022", status: "FINISHED",
      vehicle: {
        vehicleId: 1, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
        operator: {
          operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
          account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
        }
      }
    },
    {
      rentalId: 4, startDate: "11/25/2022", endDate: "11/27/2022", status: "CANCELLED",
      vehicle: {
        vehicleId: 2, plateNumber: "XXX-XX1", route: "01K", vehicleType: "Jeepney", makeModel: "Model XX", vin: 1, orStatus: "OR Status", vehicleCondition: "Vehicle Condition", rentalFee: 500.0,
        operator: {
          operatorId: 1, businessName: "Doe PUV", permitNumber: "XXX-XXX",
          account: { accountId: 3, firstname: "John", middlename: "", lastname: "Doe", birthdate: "2000-12-31", age: 24, contactNumber: "9998765544", address: "ABC City", gender: "Maleale", username: "john.doe", password: "john", accountType: "operator" }
        }
      }
    },
  ]);

  const columns: GridColDef[] = [
    { field: "rentalId", headerName: "Rental ID", flex: 1, minWidth: 100 },
    { field: "businessName", headerName: "Business Name", flex: 1, minWidth: 100, valueGetter: (param) => param.row.vehicle.operator.businessName },
    { field: "operator", headerName: "Operator", flex: 1, minWidth: 100, valueGetter: (param) => param.row.vehicle.operator.account.firstname + ' ' + param.row.vehicle.operator.account.lastname },
    { field: "vehicleId", headerName: "Vehicle ID", flex: 1, minWidth: 100, valueGetter: (param) => param.row.vehicle.vehicleId },
    { field: "rentalFee", headerName: "Rental Fee (Php)", flex: 1, minWidth: 100, valueGetter: (param) => param.row.vehicle.rentalFee },
    { field: "startDate", headerName: "Start Date", type: "date", flex: 1, minWidth: 100 },
    { field: "endDate", headerName: "End Date", type: "date", flex: 1, minWidth: 100 },
    { field: "status", headerName: "Status", flex: 1, minWidth: 100 },
  ]

  return (
    <Box mt="12px">
      <PageHeader title={"Welcome, " + "Name" + "!"} />
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <DashboardCard title="Total Rentals" count={rentals.length}>
            <Commute fontSize="large" color="secondary" />
          </DashboardCard>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <DashboardCard title="Ongoing Rental" count={rentals.filter((rental) => rental.status === "APPROVED").length}>
            <CarRental fontSize="large" color="info" />
          </DashboardCard>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <DashboardCard title="Cancelled" count={rentals.filter((rental) => rental.status === "CANCELLED").length}>
            <Cancel fontSize="large" color="error" />
          </DashboardCard>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <DashboardCard title="Finished" count={rentals.filter((rental) => rental.status === "FINISHED").length}>
            <DoneAll fontSize="large" color="success" />
          </DashboardCard>
        </Grid>
      </Grid>
      <br></br>
      <Paper sx={{ padding: "12px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5">All Rentals</Typography>
        <div style={{ flexGrow: 1, width: "100%", minHeight: "380px" }}>
          <DataGrid
            autoHeight 
            sx={{ minHeight: "369px", '.MuiDataGrid-columnSeparator': { display: 'none' }, '&.MuiDataGrid-root': { border: 'none' } }}
            rows={rentals}
            columns={columns}
            getRowId={(row) => row.rentalId}
            rowsPerPageOptions={[5, 10, 15]}
            pagination
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pageSize={pageSize}
          />
        </div>
      </Paper>
      <br></br>
      {/* <Footer name="Faith Rosalijos" course="BSIT" section="G1"/> */}
    </Box>
  );
}

export default DriverDashboard;