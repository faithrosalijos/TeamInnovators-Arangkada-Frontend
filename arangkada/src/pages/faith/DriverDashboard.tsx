import { Box, Grid, Paper, Typography } from "@mui/material";
import DashboardCard from "../../components/faith/DashboardCard";
import PageHeader from "../../components/PageHeader";
import { useEffect, useState } from "react";
import { CarRental, Commute, Cancel, DoneAll } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import RentalService from "../../api/RentalService";
import { Rental } from "../../api/dataTypes";
import Footer from "../../components/Footer";


const DriverDashboard = () => {
  const [pageSize, setPageSize] = useState<number>(5);
  const [rentals, setRentals] = useState<Rental[]>([]);

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

  useEffect(() => {
    RentalService.getRentalsByDriver("2").then((response) => {
      setRentals(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <Box mt="12px" sx={{ minHeight: "80vh" }}>
        <PageHeader title={"Welcome, Name!"} />
        <br></br>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <DashboardCard title="Total Approved Rentals" count={rentals.filter((rental) => rental.status !== "PENDING" && rental.status !== "DECLINED").length}>
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
          <Typography variant="h5">All Rental Applications</Typography>
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
      </Box>
      <Footer name="Faith Rosalijos" course="BSIT" section="G1" />
    </>
  );
}

export default DriverDashboard;