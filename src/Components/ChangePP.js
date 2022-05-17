import classes from './ChangePP.module.css'
function ChangePP(props) {
    return(
        <div>
        <form>
            <label className={classes.label}>Select an image</label> <br/>
           <div className={classes.iconCon}>
           <div className={classes.iconSubCon}>
           <i class="fa-solid fa-file-arrow-up" style={{
               fontSize: '40px', marginRight:'auto', verticalAlign: 'middle'
           }}></i>

<span class="material-symbols-outlined" style={{
                verticalAlign: 'middle', cursor: 'pointer', marginTop: '10px'
           }}>arrow_drop_down_circle</span>
           </div>
           
           </div>
            <div className={classes.btnCon}>
            <button className={classes.btn}>SAVE</button>
            </div>
            
        </form>
    </div>
    )
}
export default ChangePP