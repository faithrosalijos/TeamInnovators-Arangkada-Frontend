import axios from "axios";

const RENTAL_BASE_URL = "http://localhost:8080/rental";

class RentalService {

  getRentalsByDriver(id: string) {
    return axios.get(RENTAL_BASE_URL + "/getRentalsByDriverId/" + id);
  }

  getCurrentRental(id: string) {
    return axios.get(RENTAL_BASE_URL + "/getCurrentRentalByDriverId/" + id);
  }

  getRentalsByOperatorAndStatus(id: string, status: string) {
    return axios.get(RENTAL_BASE_URL + "/getRentalsByStatusAndVehicleOperatorId/" + id + "?status=" + status);
  }

  postRental(
    rental: {
      startDate: string,
      endDate: string,
      vehicle: { vehicleId: number }
      driver: { driverid: number }
    }) {
    return axios.post(RENTAL_BASE_URL + "/postRental/", rental);
  }

  putRental(
    id: string,
    rental: {
      startDate: string,
      endDate: string,
      status: string,
      current: boolean
    }) {
    return axios.put(RENTAL_BASE_URL + "/putRental/" + id, rental);
  }

  deleteRental(id: string) {
    return axios.delete(RENTAL_BASE_URL + "/deleteRental/" + id);
  }

}

export default new RentalService();