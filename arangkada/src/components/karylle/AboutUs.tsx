import { Box } from '@mui/material';
import ProfileF from '../../images/ProfilepicF.png';
import ProfileM from '../../images/ProfilepicM.png';
import ProfileMariel from '../../images/mariel.png';
import ProfileFaith from '../../images/faith.png';
import ProfileKerr from '../../images/kerr.png';
import ProfileCara from '../../images/cara.png';
import ProfileKarylle from '../../images/karylle.png';

export default function ContactUs() {
    return (

        <div>
            <div className="App">
                <p style={{fontSize: 40, color: '#90794C', textAlign: 'left', marginLeft: 310}}>About Us</p>
                <div style={{backgroundColor: '#D2A857', borderRadius: 30, padding: 30, maxWidth: 800, marginLeft: 290, opacity:'0.94'}}>
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

                <div style={{backgroundColor: '#ffffff', borderRadius: 30, padding: 5, maxWidth: 300, marginLeft: 560}}>
                    <img src={ProfileMariel} alt={"profile female"} style={{width: 150, height: 150}}/>
                    <div className='contain3'>
                        <p style={{color: 'black', fontSize: 14,  textAlign:'center'}}> Mariel Genodiala
                        <p style={{color: 'grey', fontSize: 12, textAlign:'center'}}> Founder</p>
                        <p style={{color: 'black', fontSize: 13,  textAlign:'center'}}> 
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.</p></p>
                    </div>
                </div>

                <div className="wrapperA">
                  <div className='leftA'>
                    <div style={{backgroundColor: '#ffffff', borderRadius: 30, padding: 5, maxWidth: 300, marginLeft: 80}}>
                        <img src={ProfileFaith} alt={"profile female"} style={{width: 150, height: 150}}/>
                    <div className='contain3'>
                        <p style={{color: 'black', fontSize: 14,  textAlign:'center'}}> Faith Abigail Rosalijos
                        <p style={{color: 'grey', fontSize: 12, textAlign:'center'}}> Co-founder</p>
                        <p style={{color: 'black', fontSize: 13,  textAlign:'center'}}> 
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.</p></p>
                    </div>
                </div>
                  </div>
                  <div className='rightL'>
                  <div style={{backgroundColor: '#ffffff', borderRadius: 30, padding: 5, maxWidth: 300, marginLeft: 180}}>
                    <img src={ProfileKerr} alt={"profile male"} style={{width: 150, height: 150}}/>
                    <div className='contain3'>
                        <p style={{color: 'black', fontSize: 14,  textAlign:'center'}}> Kerr Labajo
                        <p style={{color: 'grey', fontSize: 12, textAlign:'center'}}> Co-founder</p>
                        <p style={{color: 'black', fontSize: 13,  textAlign:'center'}}> 
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.</p></p>
                    </div>
                </div>
                </div>
            </div>
            <div className="wrapperA">
                  <div className='leftA'>
                    <div style={{backgroundColor: '#ffffff', borderRadius: 30, padding: 5, maxWidth: 300, marginLeft: 80, marginTop:20}}>
                        <img src={ProfileCara} alt={"profile female"} style={{width: 150, height: 150}}/>
                    <div className='contain3'>
                        <p style={{color: 'black', fontSize: 14,  textAlign:'center'}}> Cara Carmel Encabo
                        <p style={{color: 'grey', fontSize: 12, textAlign:'center'}}> Co-founder</p>
                        <p style={{color: 'black', fontSize: 13,  textAlign:'center'}}> 
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.</p></p>
                    </div>
                </div>
                  </div>
                  <div className='rightL'>
                  <div style={{backgroundColor: '#ffffff', borderRadius: 30, padding: 5, maxWidth: 300, marginLeft: 180, marginTop:20}}>
                    <img src={ProfileKarylle} alt={"profile female"} style={{width: 150, height: 150}}/>
                    <div className='contain3'>
                        <p style={{color: 'black', fontSize: 14,  textAlign:'center'}}> Karylle Jay Caballero
                        <p style={{color: 'grey', fontSize: 12, textAlign:'center'}}> Co-founder</p>
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