import axios from "axios";

const PAYMENT_BASE_URL = "http://localhost:8080/vehicle";

class VehicleService {

    getVehicleByOperatorId(id: string) {
      return axios.get(PAYMENT_BASE_URL+"/getVehicleByOperatorId/"+id);
    }
  
  }
  
  export default new VehicleService();