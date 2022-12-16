import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import axios from "axios";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AccountService from "../../api/AccountService";
import OperatorService from "../../api/OperatorService";
import {UserContext, UserContextType } from "../../helpers/UserContext";



export default function OperatorInfo() {
    
    const navigate = useNavigate();
    const location = useLocation();
    const { user, handleSetUser } = useContext(UserContext) as UserContextType;
    const handleCancelClick = () => {
        navigate("/operator/operatorprofile/");
    }
    const para = useParams() as { id: string };

    const [account, setAccount]= useState({
        firstname: "",
        middlename: "",
        lastname: "",
        birthdate: "",
        age: "",
        contactNumber: "",
        address: "",
        gender: "",
        username: "",
        password: "",
        accountType: "",
    })

    const { firstname, middlename, lastname, birthdate, age, contactNumber, address, gender, username, password, accountType } = account;

    useEffect(() => {
        if(user != null){
        OperatorService.getOperatorbyOperatorId(user.userId).then((response) => {
            setAccount(response.data.account);
            console.log(response.data.account)
        }).catch((error) => {
          console.log(error);
        })
        }
      }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };
    
    const handleSelectChange = (event: SelectChangeEvent) => {
        setAccount({ ...account, [event.target.name]: event.target.value });
    }

    const putAccount = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/account/putAccount?accountId=${para.id}`,{
            firstname:account.firstname,
            middlename:account.middlename,
            lastname: account.lastname,
            contactNumber:account.contactNumber,
            address:account.address,
            username: account.username,
            password: account.password,
        })
        .then((res:any)=> {
            console.log('Editing Data'); 
            navigate("/operator/operatorprofile/");
            handleSetUser({
                userId: para.id,
                type: res.data.account.accountType,
                username: res.data.account.username,
                password: res.data.account.password,
                firstname: res.data.account.firstname,
                lastname: res.data.account.lastname,
                accountId: res.data.account.accountId,
            });
        
        })
        .catch((err:string) => console.log(err))
    };
    
    return (
        <Grid component="form" onSubmit={putAccount}>
            <div>
                <h2 style={{textAlign: 'left', color: '#90794C'}}>User Information</h2>
                <hr className="line"></hr><br></br>
            </div>
            <div className="three">
                <TextField required id="outlined-required" label="Firstname" name="firstname" value={firstname} onChange={handleChange} sx={{margin: 2}}/>
                <TextField required id="outlined-required" label="Middlename" name="middlename" value={middlename} onChange={handleChange} sx={{margin: 2}}/>
                <TextField required id="outlined-required" label="Lastname" name="lastname" value={lastname} onChange={handleChange} sx={{margin: 2}}/>
            </div>
            <div className="two">
                <TextField required id="outlined-required" label="Contact Number" name="contactNumber" value={contactNumber} onChange={handleChange} sx={{margin: 2}}/>
                <TextField disabled id="outlined-disabled" label="Birthdate" name="birthdate" value={birthdate} sx={{margin: 2}}/>
            </div>
            <div className="two">
                <TextField disabled id="outlined-disabled" label="Age" name="age" value={age} sx={{margin: 2}}/>
                <FormControl disabled>
                    <InputLabel id="demo-simple-select-disabled-label" sx={{margin: 2}}>Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-disabled-label"
                    id="demo-simple-select-disabled"
                    label="Gender"
                    name="gender"
                    value={gender}
                    onChange={handleSelectChange}
                    sx={{margin: 2}}
                    >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="one">
                <TextField required id="outlined-required" label="Address" name="address" value={address} onChange={handleChange} sx={{margin: 2}}/>
                <TextField required id="outlined-required" label="Username" name="username" value={username} onChange={handleChange} sx={{margin: 2}}/>
                <TextField required id="outlined-required" label="Password" name="password" value={password} onChange={handleChange} sx={{margin: 2}}/>
            </div>
            
            <Stack direction="row" justifyContent="end" padding={3}>
                <Button variant="contained" onClick={handleCancelClick} style={{backgroundColor: '#828E99', marginTop: 25, paddingInline: 40}}>Cancel</Button>
                <Button variant="contained" type="submit" style={{backgroundColor: '#D2A857', marginTop: 25, paddingInline: 20, marginLeft: 15}}>Save Changes</Button>
            </Stack>
            
        </Grid>
          
            
    )
}