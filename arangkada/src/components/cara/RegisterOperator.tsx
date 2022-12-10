import { Button, TextField } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Op from '../../images/operator.png';


export default function RegisterOperator() {
    const [businessName, setBusinessName] = useState("");
    const [permitNumber, setPermitNumber] = useState("");
    const navigate = useNavigate();

    const handleBusinessNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBusinessName(event.target.value);
    }

    const handlePermitNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPermitNumber(event.target.value);
    }

    const handleSubmitClick = () => {
        navigate("/landing/");
    }

    return (
        <div className="contain2">
           <h3>You are a PUV Operator!</h3>
           <img src={Op} style={{width: 210, height: 210, marginLeft:'150px', marginRight:'150px'}}/>
           <i><p style={{fontSize: '15px'}}>Please fill further information</p></i>
           <TextField id="outlined-basic" label="Business Name" variant="outlined" value={businessName} onChange={handleBusinessNameChange} sx={{margin: 1, width: { sm: 400, md: 400 }}}/><br></br>
           <TextField id="outlined-basic" label="Business Permit Number" variant="outlined" value={permitNumber} onChange={handlePermitNumberChange} sx={{margin: 1, width: { sm: 400, md: 400 }}}/><br></br>
           <Button variant="contained" onClick={handleSubmitClick} style={{backgroundColor: '#D2A857', marginTop: 25, paddingInline: 40, marginBottom: '45px'}}>SUBMIT</Button><br></br>
        </div>
    )
}