// import { Link } from 'react-router-dom';
import classes from './Dashboard.module.css'
// import AVI from '../src/Images/avi.jpg'
import ellipse from '../src/Images/Ellipse 16.png'
import driverImage from '../src/Images/passport.png'
import { useRef } from "react";
import './index.css'
import TopHeader from './TopHeader';

function Dashboard(props) {

    const myInput = useRef()
    const myInputA = useRef()
    const myInputB = useRef()
    const myInputC = useRef()
    const myInputD = useRef()
    const myInputE = useRef()
    const myInputF = useRef()
    const myInputG = useRef()
    const myInputH = useRef()
    const myInputI = useRef()
    const change = useRef()
    const orderBtn =useRef()
    const priceDetailsRef =useRef()
    const deliveryEstimatedTimeConRef =useRef()
    const deliveryEstimatedTimeRef =useRef()
    
    
   
    var TMImage = '' 
    var TMName = 'Chime Tochukwu Celestine'
    var TMNo = '892-91-8'
    var TMPhoneNo = '0905387301 '
    var CarModel = 'ee'
    var PlateNo = '86153'
    var packagePrice = 'N 2,500'
    var deliveryEstimatedTime = '1:30pm'
    var clientName = 'Tobbey'
    // var TMImage = driverImage
    

function blank() {
    console.log('load');
    console.log(TMName);
    if (PlateNo != '' && TMName !== '' && TMNo !== '' && TMPhoneNo !== '' && CarModel !== '' && TMImage !== '' ) {
        console.log('clicked');
        change.current.className = 'nameT'
        myInput.current.style.visibility = 'visible'
        myInputA.current.style.visibility = 'visible'
        myInputB.current.style.visibility = 'visible'
        myInputC.current.style.visibility = 'visible'
        myInputD.current.style.visibility = 'visible'
        orderBtn.current.style.display = 'none'
        priceDetailsRef.current.style.visibility = 'visible'
        deliveryEstimatedTimeConRef.current.style.background = 'none'
        deliveryEstimatedTimeRef.current.style.visibility = 'visible'
    }
    
 }
   
   
    return(
        <div className={classes.portalCon}>
            <TopHeader title={'Welcome Back'} clientNameProps={clientName} subT={'Thank you for coming back'}/>
        

        
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

                   <div className={classes.categoryCon}>
                 
                   <div className={classes.inputFieldConD}> 


                   <div className={classes.imageIcon}><i class="fa-solid fa-image"></i> </div>
                   
                   <input type='text' className={classes.inputFieldB} placeholder='Upload a clear image'/> <br/>

                    </div>
                   
                   </div>

                   <div className={classes.orderCon}>
                   <div className={classes.calibrate}>
                   <span > <button className={classes.btn} ref={orderBtn}>ORDER</button> </span>
                   <i class="fa-solid fa-compass"
                     style={{color: 'var(--yellow',
                     fontSize: '30px',
                     display: 'inline-block',
                     verticalAlign: 'middle'
                     
                    }}
                     ></i>  
                    </div>

                   </div>


                    
                    </form>

                    
                    
                    
                </div>
            </div>

            <div className={classes.conC}>
            <div className={classes.TMImageCon}>
            <div className={classes.TMImage}>
            <img src= {TMImage} alt= 'TM image' 
            onError={(e) => (e.target.onerror = null, e.target.src = ellipse)}
            onLoad={blank} 
            />


            
            </div>
            </div>
            <div className={classes.assignedTMDetails} >
            <h3 onLoad={blank}>Your assigned TM</h3>
            <div className={classes.assignedTMConA}>
           <div className={classes.nameCon} ref={change} >
           <p className={classes.name} ref={myInput}>Name:<span ref={myInputE} className={classes.actualname}>{TMName}</span></p>
            <p className={classes.name} ref={myInputA}>TM no.:<span ref={myInputF} className={classes.actualname}>{TMNo}</span></p>
            <p className={classes.name} ref={myInputB}>Phone no.:<span ref={myInputG} className={classes.actualname}>{TMPhoneNo}</span></p>
            <p className={classes.name} ref={myInputC}>Car model:<span ref={myInputH} className={classes.actualname}>{CarModel}</span></p>
            <p className={classes.name} ref={myInputD}>Plate no.:<span ref={myInputI} className={classes.actualname}>{PlateNo}</span></p>
           </div>
            </div>
           
            </div>
{/* Payment details */}
            <div className={classes.paymentDetailsCon}>
            <div className={classes.priceDetails}>
            <div ref={priceDetailsRef} className={classes.priceDetailsSubCon}>
            <p className={classes.deliveryFare}>Delivery Fare</p>
            <p className={classes.packagePrice}>{packagePrice}</p>
            </div>
            

            </div>

            <div className={classes.durationDetails}>
            <div ref={deliveryEstimatedTimeConRef} className={classes.deliveryEstimatedTimeCon}>
            <h3 className={classes.youWould} ref={deliveryEstimatedTimeRef}>You would recieve your package by: <span className={classes.deliveryEstimatedTime}>{deliveryEstimatedTime}</span></h3>
            </div>
                
            </div>

            <div className={classes.declineTMCon}>
            <p className={classes.declineTM}>Decline TM</p> 
            </div>

            

            </div>
            
           

            
            
            
        </div>

        </div>
    )
}
export default Dashboard