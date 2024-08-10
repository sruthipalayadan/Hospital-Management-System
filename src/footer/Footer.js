import styles from './Footer.module.css'

function Footer()
{
    return(
          
         <div className={styles.container3}>
          <div className={styles.fbox}>
          <p><h4>Address</h4></p>
          <p><b>MEDITECH HOSPITAL</b>
          <br></br>
          K.C Abraham Master Road<br></br>
          12th Cross Rd, Panampilly Nagar<br></br>
           Kochi, Kerala 682036
           </p>
           </div>


           <div className={styles.fbox}>
          <p><h4>Contact</h4></p>
          <p><b>MEDITECH HOSPITAL</b>
          <br></br>
          <b>Phone:</b>+91-8289966221<br></br>
             <b>Email:</b><i>meditech@gmail.com</i>
           </p>
           </div>



           <div className={styles.fbox}>
          <p><h4>Social Media</h4></p>
          <p><b>MEDITECH HOSPITAL</b>
          <br></br>
          <b>Facebook:</b><i>facebook.com/meditech</i><br></br>
             <b>Instagram:</b>meditech_hs<i></i>
           </p>
           </div>

           </div>
        )
}
export default Footer;