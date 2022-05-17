import classes from './ChangeEmail.module.css'
function ChangeEmail(props) {
    return(
        <div>
            <form>
                <label className={classes.label}>Enter your e-mail address</label> <br/>
                <input type='text' placeholder='input an accessible e-mail address' className={classes.input}/>
                <div className={classes.btnCon}>
                <button className={classes.btn}>SAVE</button>
                </div>
                
            </form>
        </div>
    )
}
export default ChangeEmail