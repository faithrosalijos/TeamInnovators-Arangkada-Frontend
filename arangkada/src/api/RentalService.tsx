import axios from "axios";

const RENTAL_BASE_URL = "http://localhost:8080/rental";

class RentalService {

  getRentalsByDriver(id: string) {
    return axios.get(RENTAL_BASE_URL+"/getRentalsByDriverId/"+id);
  }

  getCurrentRental(id: string) {
    return axios.get(RENTAL_BASE_URL+"/getCurrentRentalByDriverId/"+id);
  }

}

export default new RentalService();