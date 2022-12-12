import Login from "../../components/karylle/Login"
import Welcome from "../../components/karylle/WelcomeLogin"
import Footer from "../../components/Footer"




export default function RegistrationOne() {
    return (
      <div className="bgimg">
        <div className="App">
            <div className="wrapperL">
                  <div className='leftL'>
                    <Welcome line1='Welcome to' line2='Arangkada' line3='We get you moving!'></Welcome>
                  </div>
                  <div className='rightL'>
                    <Login></Login>
                </div>
            </div>
        </div>
      </div>
      
    )
}