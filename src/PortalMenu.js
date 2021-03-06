import classes from './PortalMenu.module.css'
import Logo from './Images/Logo.png'
import { Link } from 'react-router-dom'
import  './index.css'

function PortalMenu(props) {
    return(
        <div className={classes.PortalMenuCon}>
            <img src={Logo} className={classes.Logo} alt='Logo' /> <br/>
            
        
                <div className={classes.styles}>
                    
                    <span ><Link  to={'/dashboard'} className={"fa-solid fa-table-cells-large style"}> dashboard </Link></span>
                
                 <br/>
                   
                </div>

                <div className={classes.styles}>
                    
                    <span ><Link  to={'/dashboard'} className={"fa-solid fa-arrow-trend-up style"}> LIVE-TRACK</Link></span>
                 <br/>
                
                </div>

               

                <div className={classes.styles}>
                    
                    <span ><Link  to={'/changename'} className={"fa-solid fa-gear style"}> settings </Link></span>
                 <br/>

                
                
                </div>

                <div className={classes.styles}>
                    
                    <span ><Link  to={'/changename'} className={"fa-solid fa-clock-rotate-left style"}> History </Link></span>
                 <br/>

                
                
                </div>
               
                <Link  to={'/'} style={{marginTop:'180px'}} className={"fa-solid fa-arrow-right-from-bracket style"}> LOG-OUT</Link>
               
                
            
        </div>
    )
}
export default PortalMenu