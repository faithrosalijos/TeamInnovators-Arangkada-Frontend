import axios from "axios";
import { Operator } from "./dataTypes";


const OPERATOR_BASE_URL = "http://localhost:8080/operator";

class OperatorService {

    postOperator(data: Operator){
        return axios.post(OPERATOR_BASE_URL + "/postOperator",data);
    }

    getByAccountId(id: string){
        return axios.get(OPERATOR_BASE_URL + "/getByAccountId/" + id);
    }

    getOperatorbyOperatorId(id: string){
        return axios.get(OPERATOR_BASE_URL + "/getByOperatorId/" + id);
    }

}

export default new OperatorService();