import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";


export default function OperatorInfo() {
    return (
        <div>
            <div>
                <h2 style={{textAlign: 'left', color: '#90794C'}}>User Information</h2>
                <hr className="line"></hr><br></br>
            </div>
        
            <div className="three">
                <TextField id="outlined-read-only-input" label="Firstname" defaultValue="John" InputProps={{readOnly: true,}} sx={{margin: 2}}/>
                <TextField id="outlined-read-only-input" label="Middlename" defaultValue="Santos" InputProps={{readOnly: true,}} sx={{margin: 2}}/>
                <TextField id="outlined-read-only-input" label="Lastname" defaultValue="Doe" InputProps={{readOnly: true,}} sx={{margin: 2}}/>
            </div>
            <div className="two">
                <TextField id="outlined-read-only-input" label="Contact Number" defaultValue="09231819397" InputProps={{readOnly: true,}} sx={{margin: 2}}/>
                <TextField id="outlined-read-only-input" label="Birthdate" defaultValue="2001-10-23" InputProps={{readOnly: true,}} sx={{margin: 2}}/>
            </div>
            <div className="two">
                <TextField id="outlined-read-only-input" label="Age" defaultValue="30" InputProps={{readOnly: true,}} sx={{margin: 2}}/>
                <FormControl>
                    <InputLabel id="demo-simple-select-readonly-label" sx={{margin: 2}}>Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-readonly-label"
                    id="demo-simple-select"
                    label="Gender"
                    defaultValue="Male"
                    inputProps={{ readOnly: true }}
                    sx={{margin: 2}}
                    >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="one">
                <TextField id="outlined-read-only-input" label="Address" defaultValue="Natalio B. Bacalso Ave, Cebu City, 6000 Cebu" InputProps={{readOnly: true,}} sx={{margin: 2}}/>
                <TextField id="outlined-read-only-input" label="Username" defaultValue="johndoe123" InputProps={{readOnly: true,}} sx={{margin: 2}}/>
                <TextField id="outlined-read-only-input" label="Password" defaultValue="qwerty00" InputProps={{readOnly: true,}} sx={{margin: 2}}/>
                {/*<Stack direction="row" justifyContent="end">
                    <Button variant="contained" style={{backgroundColor: '#D2A857', marginTop: 25, marginLeft: 15, marginRight: 15}}>Edit User Info</Button>
                </Stack>
                <div>
                    <h2 style={{textAlign: 'left', color: '#90794C'}}>Business Information</h2>
                    <hr className="line"></hr><br></br>
                </div>*/}
                <TextField id="outlined-read-only-input" label="Business Name" defaultValue="TriWheels" InputProps={{readOnly: true,}} sx={{margin: 2}}/>
                <TextField id="outlined-read-only-input" label="Business Permit Number" defaultValue="001492" InputProps={{readOnly: true,}} sx={{margin: 2}}/>
            </div>
            
            <Stack direction="row" justifyContent="end" padding={7}>
                <Button variant="contained" style={{backgroundColor: '#D76666', marginTop: 25}}>Delete Account</Button>
                <Button variant="contained" style={{backgroundColor: '#D2A857', marginTop: 25, marginLeft: 15, marginRight: 15, paddingInline: 60}}>Edit</Button>
            </Stack>
        
        </div>
          
            
    )
}