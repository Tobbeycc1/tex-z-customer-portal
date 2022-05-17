import classes from './ChangeNameForm.module.css'
function ChangeNameForm(props) {
    return(
        <div>
            <form>
                <label className={classes.label}>Enter your name</label> <br/>
                <input type='text' placeholder='Surname       Other name      First name' className={classes.input}/>
                <div className={classes.btnCon}>
                <button className={classes.btn}>SAVE</button>
                </div>
                
            </form>
        </div>
    )
}
export default ChangeNameForm