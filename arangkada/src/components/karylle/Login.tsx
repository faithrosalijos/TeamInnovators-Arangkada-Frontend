import { Card, Button, TextField, Grid } from "@mui/material"
import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";



export default function Login(){

    const navigate = useNavigate();

    const[accounts,setAccount] = useState([]);
    const[accountType,setAccountType] = useState([]);

    const[loginData,setLoginData] = useState({
        username:"",
        password:""
    });

    const{ username, password } = loginData;

    const onInputChange=(e: any)=>{
        setLoginData({ ...loginData,[e.target.name]: e.target.value});
    };

    const checkInfo=async(event: { preventDefault: () => void; })=>{
        event.preventDefault();

        try{
          const result = await axios.get(`http://localhost:8080/account/getByUsername?username=${username}`);
          setAccount(result.data);
          console.log((result.data))
          console.log((result.data.accountType))

        if(result.data.accountType==='Operator' && (result.data)!=null){
            if((result.data.password)===password && (result.data.username)===username){
                navigate('/operator');
            }else{
                alert("Username and password does not match!");
            }
        }else{ //driver
            alert("Wrong account");
        }
        }catch(err){
          console.log("Does not exist");
        }
      }


    return (
        <Grid onSubmit={checkInfo} component="form">
            <div><br></br><br></br><br></br><br></br></div>
            <div style={{ backgroundColor: 'white', padding: 2, marginLeft: -130, maxWidth: 600, maxHeight: 670, textAlign: 'left', marginBottom:'1rem', borderRadius:35, opacity:'0.91'}}>
                <br></br>
                <h1 style={{marginLeft: 70, color: '#90794C'}}>Log in</h1><br></br><br></br>
                <TextField required id="outlined-basic" name="username" label="Username" variant="outlined" value={username} onChange={(e)=>onInputChange(e)} sx={{margin: 0, marginLeft: 8, marginRight: 8, width: { sm:400, md:400}}}/><br></br><br></br><br></br>
                <TextField required id="outlined-basic" name="password" label="Password" variant="outlined" value={password} onChange={(e)=>onInputChange(e)} sx={{margin: 0, marginLeft: 8, marginRight: 8, width: { sm:400, md:400}}}/><br></br><br></br>
                <p style={{color: 'brown', fontSize: '15px', textAlign: 'center'}}>  <a href="https://www.youtube.com"  className="links">Forgot password?</a></p><br></br>
                <Button variant="contained" type="submit" style={{backgroundColor: '#D2A857', marginLeft: 200, marginTop:25, paddingInline:40, marginBottom:'45px', borderRadius:20}}>Log in</Button>
                
            </div>
            <p style={{color: 'white', fontSize: '15px', marginLeft: '-8rem'}}>Not registered yet?  <a href="https://www.youtube.com"  className="linksL">Create an account</a></p>
        </Grid>
    )
}
