import Classes from './Header.module.css'
import Logo from '../Images/Logo.png'

function Header(props) {
    return(
        <div className={Classes.HeaderLogo}>
            <img src={Logo} alt='logo' />
            
        </div>
    )
}
export default Header
