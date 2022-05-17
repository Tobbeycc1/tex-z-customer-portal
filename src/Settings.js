import { Link } from 'react-router-dom'
import classes from './Settings.module.css'
import TopHeader from './TopHeader'
function Settings(props) {
    return(
        <div className={classes.portalCon}>
            <TopHeader subT={'Edit your personal information'} title={'Settings'}/>
       
        <div className={classes.settingselementsBigCon}>
        <div className={classes.settingselementsCon}>
        <Link to={'/changename'} className={classes.settingselements}>Change Name</Link> 
        <Link to={'/changeprofilepicture'} className={classes.settingselements}>Change Profile Picture</Link> 
        <Link to={'/changeemail'} className={classes.settingselements}>Change Email Address</Link>

        </div>

        <div className={classes.settingsFormCon}>  
            {props.form}
        </div>
        </div>
       
        </div>
    )
}
export default Settings