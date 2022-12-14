import axios from "axios";
import { Driver } from "./dataTypes";


const DRIVER_BASE_URL = "http://localhost:8080/driver";

class DriverService {

    postDriver(data: Driver){
        return axios.post(DRIVER_BASE_URL + "/postDriver",data);
    }

    getAccountbyAccountId(id: string){
        return axios.get(DRIVER_BASE_URL + "/getByAccountId/" + id);
    }

    getDriverbyDriverId(id: string){
        return axios.get(DRIVER_BASE_URL + "/getByDriverId/" + id);
    }

}

export default new DriverService();