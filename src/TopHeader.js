import classes from './TopHeader.module.css'
import AVI from '../src/Images/avi.jpg'
import { Link } from 'react-router-dom';
function TopHeader(props) {
    // var clientName = 'Tobbey'
    var customerName = 'TOBBEY CHIME'
    var notificationNumber = '5'
    
    return(
        <div >
            <div className={classes.conA}>
            {/* <h3>TopHeaderrrrrrrrrr</h3> */}
            <div className={classes.deliveryTimeCon}>

            <div className={classes.yellowdash}></div>
            <h3 className={classes.subhtitle}>{props.title}<span className={classes.clientName} >{props.clientNameProps}</span></h3> 
            </div>

            <div className={classes.customerDetailsCon}>
                <div className={classes.customerNameCon}> <p className={classes.customerName}>{customerName}</p></div>
           

            <Link to={'/notifications'} class="fa-solid fa-bell" 
            style={{textDecoration: 'none', display: 'inline-block', marginLeft: '35px'}}
            ><sup className={classes.sup}>{notificationNumber}</sup></Link>
            <img src={AVI} alt='AVI' className={classes.AVI}/>

            </div>
        </div>
        
        <p className={classes.thankYou} >{props.subT} </p>
            
        </div>
                   
    )
    
}
export default TopHeader