import { Box } from '@mui/material';
import ProfileF from '../../images/ProfilepicF.png';
import ProfileM from '../../images/ProfilepicM.png';

export default function ContactUs() {
    return (

        <div>
            <div className="App">
                <p style={{fontSize: 40, color: '#90794C', textAlign: 'left', marginLeft: 200}}>About Us</p>
                <div style={{backgroundColor: '#D2A857', borderRadius: 30, padding: 30, maxWidth: 800, marginLeft: 215, opacity:'0.94'}}>
                    <div>
                        <p style={{color: '#261D0C', fontSize: 17, paddingLeft: 5, textAlign:'justify'}}>
                        Arangkada is a PUV rental management system app that helps both PUV Operators and Professional
                        Licensed Drivers make transactions in a fast and more convenient way. 
                        <br></br><br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo elit, tempus ac scelerisque ac, 
                        eleifend et arcu. Nulla sit amet libero nisl. Sed id gravida est, in egestas odio. Sed bibendum varius 
                        enim. Nulla non fermentum nisl. Donec feugiat sagittis sem eu venenatis. Morbi porttitor quam in luctus 
                        consectetur. Suspendisse convallis tortor velit. Sed vitae erat viverra, scelerisque ante ac, porttitor 
                        lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>
                </div><br></br>
                <p style={{fontSize: 40, color: '#90794C', textAlign: 'center', marginLeft: 20}}>Team Innovators
                <p style={{color: 'grey', fontSize: 15,  textAlign:'center'}}> Meet the entire team</p></p>

                <div style={{backgroundColor: '#ffffff', borderRadius: 30, padding: 5, maxWidth: 300, marginLeft: 470}}>
                    <img src={ProfileF} alt={"profile female"} style={{width: 150, height: 150}}/>
                    <div className='contain3'>
                        <p style={{color: 'black', fontSize: 14,  textAlign:'center'}}> Team Leader Name
                        <p style={{color: 'grey', fontSize: 12, textAlign:'center'}}> Team Member Role</p>
                        <p style={{color: 'black', fontSize: 13,  textAlign:'center'}}> 
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.</p></p>
                    </div>
                </div>

                <div className="wrapperA">
                  <div className='leftA'>
                    <div style={{backgroundColor: '#ffffff', borderRadius: 30, padding: 5, maxWidth: 300, marginLeft: 50}}>
                        <img src={ProfileF} alt={"profile female"} style={{width: 150, height: 150}}/>
                    <div className='contain3'>
                        <p style={{color: 'black', fontSize: 14,  textAlign:'center'}}> Team Member Name
                        <p style={{color: 'grey', fontSize: 12, textAlign:'center'}}> Team Member Role</p>
                        <p style={{color: 'black', fontSize: 13,  textAlign:'center'}}> 
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.</p></p>
                    </div>
                </div>
                  </div>
                  <div className='rightL'>
                  <div style={{backgroundColor: '#ffffff', borderRadius: 30, padding: 5, maxWidth: 300, marginLeft: 120}}>
                    <img src={ProfileM} alt={"profile male"} style={{width: 150, height: 150}}/>
                    <div className='contain3'>
                        <p style={{color: 'black', fontSize: 14,  textAlign:'center'}}> Team Member Name
                        <p style={{color: 'grey', fontSize: 12, textAlign:'center'}}> Team Member Role</p>
                        <p style={{color: 'black', fontSize: 13,  textAlign:'center'}}> 
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.</p></p>
                    </div>
                </div>
                </div>
            </div>
            <div className="wrapperA">
                  <div className='leftA'>
                    <div style={{backgroundColor: '#ffffff', borderRadius: 30, padding: 5, maxWidth: 300, marginLeft: 50, marginTop:20}}>
                        <img src={ProfileF} alt={"profile female"} style={{width: 150, height: 150}}/>
                    <div className='contain3'>
                        <p style={{color: 'black', fontSize: 14,  textAlign:'center'}}> Team Member Name
                        <p style={{color: 'grey', fontSize: 12, textAlign:'center'}}> Team Member Role</p>
                        <p style={{color: 'black', fontSize: 13,  textAlign:'center'}}> 
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.</p></p>
                    </div>
                </div>
                  </div>
                  <div className='rightL'>
                  <div style={{backgroundColor: '#ffffff', borderRadius: 30, padding: 5, maxWidth: 300, marginLeft: 120, marginTop:20}}>
                    <img src={ProfileF} alt={"profile female"} style={{width: 150, height: 150}}/>
                    <div className='contain3'>
                        <p style={{color: 'black', fontSize: 14,  textAlign:'center'}}> Team Member Name
                        <p style={{color: 'grey', fontSize: 12, textAlign:'center'}}> Team Member Role</p>
                        <p style={{color: 'black', fontSize: 13,  textAlign:'center'}}> 
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.</p></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}