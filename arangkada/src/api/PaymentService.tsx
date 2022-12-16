import axios from "axios";
import { Payment } from "./dataTypes";

const PAYMENT_BASE_URL = "http://localhost:8080/payment";

class PaymentService {

    getPaymentById(id: string) {
      return axios.get(PAYMENT_BASE_URL+"/getPaymentById/"+id);
    }

    getPaymentsByDriverId(id: string) {
      return axios.get(PAYMENT_BASE_URL+"/getPaymentsByDriverId/"+id);
    }

    postPayment(payment: Payment) {
      return axios.post(PAYMENT_BASE_URL + "/postPayment/", payment);
    }

    putPayment(id: string, payment: Payment) {
      return axios.put(PAYMENT_BASE_URL+"/putPayment/"+id, payment);
    }

    deletePayment(id: string) {
      return axios.delete(PAYMENT_BASE_URL + "/deletePayment/" + id);
    }
  
  }
  
  export default new PaymentService();