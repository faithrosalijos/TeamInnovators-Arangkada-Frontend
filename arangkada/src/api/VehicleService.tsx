import axios from "axios";

const VEHICLE_BASE_URL = "http://localhost:8080/vehicle";

class VehicleService {

  getVehicleByOperatorOperatorId(id: string) {
    return axios.get(VEHICLE_BASE_URL + "/getByOperatorId/" + id);
  }
  getVehicleByVehicleType(vehicleType: string) {
    return axios.get(VEHICLE_BASE_URL + "/getByVehicleType/?vehicleType=" + vehicleType);
  }
  getVehicleByVehicleId(id: string) {
    return axios.get(VEHICLE_BASE_URL + "/getByVehicleId/" + id);
  }
  getVehicleByPlateNumber(plateNumber: string) {
    return axios.get(VEHICLE_BASE_URL + "/getByPlateNumber/?plateNumber=" + plateNumber);
  }


}

export default new VehicleService();