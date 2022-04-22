import { Link } from 'react-router-dom'
import classes from './Otp.module.css'
function Otp(props) {

   
    return(
        <div className={classes.OtpCon}>
        <h3>Enter OTP:</h3>
       <Link to='/' className={classes.link}>Do you wish to change your phone number? </Link>

       <div>
           <form>
               <input type='number' maxLength={1} placeholder='X' className={classes.input}/>
               <input type='number' placeholder='X' className={classes.input}/>
               <input type='number' placeholder='X' className={classes.input}/>
               <h3 className={classes.otpDash}>-----</h3>
               <input type='number' placeholder='X' className={classes.input}/>
               <input type='number' placeholder='X' className={classes.input}/>
               <input type='number' placeholder='X' className={classes.input}/>
           </form>
       </div>
        </div>
        
    )
}
export default Otp