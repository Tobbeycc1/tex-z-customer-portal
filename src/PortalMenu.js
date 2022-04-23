import classes from './PortalMenu.module.css'
import Logo from './Images/Logo.png'
import { Link } from 'react-router-dom'
import  './index.css'

function PortalMenu(props) {
    return(
        <div className={classes.PortalMenuCon}>
            <img src={Logo} className={classes.Logo} alt='Logo' /> <br/>
            
        
                <div className={classes.styles}>
                    
                    <span ><Link  to={'/dashboard'} className={"material-symbols-outlined style"}>dashboard DASHBOARD</Link></span>
                 <br/>
                
                </div>

                <div className={classes.styles}>
                    
                    <span ><Link  to={'/dashboard'} className={"material-symbols-outlined style"}>query_stats LIVE-TRACK</Link></span>
                 <br/>
                
                </div>

               

                <div className={classes.styles}>
                    
                    <span ><Link  to={'/dashboard'} className={"material-symbols-outlined style"}>settings SETTINGS</Link></span>
                 <br/>

                
                
                </div>
               
                <Link  to={'/'} style={{marginTop:'180px'}} className={"material-symbols-outlined style"}>logout LOG-OUT</Link>
               
                
            
        </div>
    )
}
export default PortalMenu