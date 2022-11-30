import axios from "axios";

const PAYMENT_BASE_URL = "http://localhost:8080/payment";

class PaymentService {

    getPaymentsByDriverId(id: string) {
      return axios.get(PAYMENT_BASE_URL+"/getPaymentsByDriverId/"+id);
    }
  
  }
  
  export default new PaymentService();