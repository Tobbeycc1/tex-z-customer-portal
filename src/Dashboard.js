import { Link } from 'react-router-dom';
import classes from './Dashboard.module.css'
import AVI from '../src/Images/avi.jpg'
function Dashboard(props) {
    const estimatedDuration = '1:50 pm'
    const customerName = 'TOBBEY CHIME'
    const notificationNumber = '5'
    const minutesRemaining = '10 minutes'
    return(
        <div className={classes.portalCon}>
        <div className={classes.conA}>
            <div className={classes.deliveryTimeCon}>

            <div className={classes.yellowdash}></div>
            <h3 className={classes.subhtitle}>You would receive your package at: <span className={classes.estimatedTime}>{estimatedDuration}</span></h3> 
            </div>


            <div className={classes.customerDetailsCon}>
                <div className={classes.customerNameCon}> <p className={classes.customerName}>{customerName}</p></div>
           

            <Link to={'/notifications'} class="fa-solid fa-bell" 
            style={{textDecoration: 'none', display: 'inline-block', marginLeft: '35px'}}
            ><sup className={classes.sup}>{notificationNumber}</sup></Link>
            <img src={AVI} alt='AVI' className={classes.AVI}/>

            </div>
           

            
            
            
        </div>
        <p className={classes.minutesRemaining}>Arrives in the next: {minutesRemaining}</p>
        
        <div className={classes.mapAndPackageDetailsCon}>
                <div className={classes.mapCon}>

                </div>

                <div className={classes.PackageDetailsCon}>
                    <h3>Package Details </h3>

                    <form>
                    <div className={classes.inputFieldCon}> 
                    <div className={classes.yellowSquare}> </div> 
                    <input type='text' className={classes.inputField} placeholder='Pick-up location'/> <br/>
                    <div className={classes.dottedLine}>
                
                    </div>


                    </div>
                    <div className={classes.inputFieldConB}> 
                    <div className={classes.whiteSquare}> </div> 
                    <input type='text' className={classes.inputFieldB} placeholder='Package destination'/> <br/>

                    </div>

                   <div className={classes.categoryCon}>
                   <div className={classes.categorySubCon}>
                   <input list="Category" name="Category"  className={classes.inputFieldC} placeholder="Category"/>
                   <datalist id="Category">
    <option value="TV"/>
    <option value="Fridge"/>
    <option value="Washing Machine"/>
    <option value="Home Theatre"/>
    <option value="Fan"/>
  </datalist>  
                   </div> 
                   <div className={classes.inputFieldConD}> 
                   <input type='text' className={classes.inputFieldD} placeholder='Package name'/> <br/>

                    </div>
                   
                   </div>


                    {/* <div className={classes.calibrate}>
                     <i class="fa-solid fa-compass"
                     style={{color: 'var(--yellow', fontSize: '20px'
                    }}
                     ></i>  
                    </div> */}
                    </form>

                    
                    
                    
                </div>
            </div>

        </div>
    )
}
export default Dashboard