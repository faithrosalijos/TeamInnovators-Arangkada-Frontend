import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { Payment } from "../../api/dataTypes";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import PaymentService from "../../api/PaymentService";
import RentalService from "../../api/RentalService";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ResponseError from "../../components/faith/ResponseError";
import PaymentCardList from "../../components/kerr/PaymentCardList";
import { UserContext, UserContextType } from "../../helpers/UserContext";
import { SnackbarContext, SnackbarContextType } from "../../helpers/SnackbarContext";

const Transactions = () => {

}

export default Transactions;