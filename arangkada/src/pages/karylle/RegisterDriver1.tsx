import { Box, Toolbar, Typography } from "@mui/material";
import Registration from "../../components/karylle/RegistrationFormD";
import Welcome from "../../components/cara/Welcome"
import Footer from "../../components/Footer";


export default function RegistrationOne() {
    return (
      <div className="App">
        <div className="bstyle">
          <div className='contain'>
            <div className='wrapper'>
              <div className='left'>
                <Welcome line1='Welcome to' line2='Arangkada' line3='We get you moving!'></Welcome>
              </div>
            <div className='right'>
              <Registration></Registration>
            </div>
            </div>
          </div>
          <Footer name="Cara Carmel Encabo" course="BSIT" section="G2"/>
        </div>
      </div>
      
    )
}