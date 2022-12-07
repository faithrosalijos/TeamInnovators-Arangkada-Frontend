import axios from "axios";

const VEHICLE_BASE_URL = "http://localhost:8080/vehicle";

class VehicleService {

  getVehicleByOperatorOperatorId(id: string) {
    return axios.get(VEHICLE_BASE_URL + "/getByOperatorId/" + id);
  }

  getVehicleByVehicleType(vehicleType: string) {
    return axios.get(VEHICLE_BASE_URL + "/getByVehicleType/?vehicleType=" + vehicleType);
  }


}

export default new VehicleService();