import { Box } from '@mui/material';

export default function ContactUs() {
    return (

        <div>
            <div className="App"></div>
            <p style={{fontSize: 40, color: '#90794C', textAlign: 'left', marginLeft: 200}}>About Us</p>
            <div style={{backgroundColor: '#D2A857', borderRadius: 30, padding: 80, maxWidth: 700, marginLeft: 70}}>
            <Box>
                <p style={{color: '#ffffff', fontSize: 15, paddingLeft: 10}}>
                Arangkada is a PUV rental management system app that helps both PUV Operators and Professional
                Licensed Drivers make transactions in a fast and more convenient way. 
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo elit, tempus ac scelerisque ac, 
                eleifend et arcu. Nulla sit amet libero nisl. Sed id gravida est, in egestas odio. Sed bibendum varius 
                enim. Nulla non fermentum nisl. Donec feugiat sagittis sem eu venenatis. Morbi porttitor quam in luctus 
                consectetur. Suspendisse convallis tortor velit. Sed vitae erat viverra, scelerisque ante ac, porttitor 
                lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
            </Box>
             
            </div>
            </div>
    )
}