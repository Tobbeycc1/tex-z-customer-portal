import classes from './SignIn.module.css'
function SignIn(props) {

  
    return(
        <div className={classes.sigInCon}>
            <h3 className={classes.title}>Phone Number</h3>
            <div className={classes.underlinedform}>
            <form className={classes.formCon}>
                <div className={classes.alignBtnRight}>
                <input type='number' className={classes.inputbig} placeholder='input your phone number'></input> <br/>
                <button className={classes.btn}>SIGN IN</button> 
                </div>
                
                
                
                
               
            </form>
        </div>
        </div>
    )
}
export default SignIn